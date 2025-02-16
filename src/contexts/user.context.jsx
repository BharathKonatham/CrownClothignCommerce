import { createContext, useEffect, useState } from "react";
import { Value } from "sass";
import { onAuthStateChangedListner, signOutUser,createUserDocumentFromAuth } from "../utils/Firebase.utils";

export const UserContext = createContext({
    currentUser : null,
    setCurrentUser:()=> null


    
})

export const UserProvider = ({children})=>{
    const [currentUser,setCurrentUser] = useState(null)
    const value={currentUser,setCurrentUser}
    useEffect(()=>{
        const unsubsribe =  onAuthStateChangedListner((user)=>{
            console.log(user)
            if(user){
                createUserDocumentFromAuth(user)
            }
            setCurrentUser(user)
        }) 
        //when ever this component unmounts we don't need to listne for auth change, 
        // tha authchange funtion returns a unsubsribe function when the context component unmounts 
        //which is being returnd by useEffect which stops listening 

        return unsubsribe
    },[])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}