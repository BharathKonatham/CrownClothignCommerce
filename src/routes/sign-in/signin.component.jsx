import React from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/Firebase.utils'


const SignIn = () => {

    const logGoogleUser = async()=>{
        const {user}  = await signInWithGooglePopup();
        console.log(user)
        const userDocRef = await createUserDocumentFromAuth(user)
        console.log(userDocRef)
    }
    return (
        <div>
        sign in component
        <button onClick={logGoogleUser}>Sign in with google</button>
        </div>
    )
}

export default SignIn
