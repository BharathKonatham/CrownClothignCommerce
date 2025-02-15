import React, { useState } from 'react'
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from '../../utils/Firebase.utils'
import FormInput from '../form-input/form-input.component'
import './sign-up-form.styles.scss'
import Buttton from '../button/button.component'
const defaultFormFields = {
    displayName:'',
    email:'',
    confirmPassword:'',
    password:''
}
const SignUpForm = () => {
    const [formFields,setFormFields]= useState(defaultFormFields)

    const {displayName,email,confirmPassword,password} = formFields

    const handleChange = (e)=>{
        
        setFormFields({
            ...formFields,
            [e.target.name]:e.target.value
        })
    }
    
    const handleSubmit = async(e)=>{
        
        e.preventDefault()
        if(password === confirmPassword){
            try{
                const {user} = await createAuthUserWithEmailAndPassword(email,password)
                console.log(user)
                const fd = await createUserDocumentFromAuth(user,{displayName})
                console.log(fd)
                setFormFields(defaultFormFields)
            }catch(e){
                if(e.code === 'auth/email-already-in-use')
                    alert('auth/email-already-in-use')
                else
                    console.log(e)
            }
            
        }
        
        
    }
    
    return (
        <div className='sign-up-container'>
            <h2>I don't have an account</h2>
            <span>SignUp with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label={'Display Name'}
                    required type='text' 
                    name='displayName' 
                    value={displayName} 
                    onChange={handleChange}
                />

                <FormInput 
                    label={'Email'}
                    required 
                    type='email' 
                    name='email' 
                    value={email} 
                    onChange={handleChange}
                />

                <FormInput 
                    label={'Password'}
                    required 
                    type='password' 
                    name='password' 
                    value={password} 
                    onChange={handleChange}
                />

                <FormInput 
                    label={'Confirm Password'} 
                    required 
                    type='password' 
                    name='confirmPassword' 
                    value={confirmPassword} 
                    onChange={handleChange}
                />

                <Buttton buttonType='' type='submit'>Sign Up</Buttton>
            </form>
        </div>
    )
}

export default SignUpForm
