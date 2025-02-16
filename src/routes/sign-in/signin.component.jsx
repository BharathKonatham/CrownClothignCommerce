import React, { useState } from 'react'
import { 
    auth, 
    signInWithGooglePopup, 
    createUserDocumentFromAuth,
    signInWithGoogleRedirect,
    signUserWithEmailAndPassword } from '../../utils/Firebase.utils'
import { useEffect } from 'react'
import { getRedirectResult } from 'firebase/auth'
import { redirect } from 'react-router-dom'
import { setPersistence, browserSessionPersistence } from "firebase/auth";
import SignUpForm from '../../components/sign-up-form/signUpForm.component'
import SignInForm from '../../components/sign-in-form/sign-in-form.component'
import './authentication.styles.scss'

const Authentication = () => {
    const logGoogleUser = async()=>{
        const {user}  = await signInWithGooglePopup();
        //console.log(user)
        // const userDocRef = await createUserDocumentFromAuth(user)
        // console.log(userDocRef) //moved to usercontext component using authchange listner
    }
    
    return (
        <div className='authentication-container'>
        <SignInForm />
        <SignUpForm />

        </div>
    )
}

export default Authentication
