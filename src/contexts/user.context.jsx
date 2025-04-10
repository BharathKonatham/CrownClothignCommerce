import { createContext, useEffect, useReducer, useState } from "react";
import { Value } from "sass";
import { onAuthStateChangedListner, signOutUser,createUserDocumentFromAuth } from "../utils/Firebase.utils";

export const UserContext = createContext({
    currentUser : null,
    setCurrentUser:()=> null  
})
const INITIAL_STATE = {
    currentUser: null
}
export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER',
}
const userReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            // console.log('inside reducer',payload)    
            return {
                ...state,
                currentUser: payload
            };
        default:
            throw new Error(`Unhandled type ${type} in cartReducer`);
    }
}
export const UserProvider = ({children})=>{
    const [state,dispatch] = useReducer(userReducer, INITIAL_STATE)
    const {currentUser} = state
    //const [currentUser,setCurrentUser] = useState(null)
    const setCurrentUser = (user) => {
        dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user })
    }
    const value={currentUser,setCurrentUser}
    // useEffect(()=>{
    //     const unsubsribe =  onAuthStateChangedListner((user)=>{
    //         console.log(user)
    //         if(user){
    //             createUserDocumentFromAuth(user)
    //         }
    //         setCurrentUser(user)
    //     }) 
    //     //when ever this component unmounts we don't need to listne for auth change, 
    //     // tha authchange funtion returns a unsubsribe function when the context component unmounts 
    //     //which is being returnd by useEffect which stops listening 

    //     return unsubsribe
    // },[])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}