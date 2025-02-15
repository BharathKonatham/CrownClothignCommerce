import React, { useState } from 'react'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'
import './sign-in-form.styles.scss'
import { 
    auth, 
    signInWithGooglePopup, 
    createUserDocumentFromAuth,
    signInUserWithEmailAndPassword,
    signUserWithEmailAndPassword } from '../../utils/Firebase.utils'

const defaultFormFields = {
    email:'',
    password:''
}
const SignInForm = () => {
    const [formFields,setFormFields] = useState(defaultFormFields)
    const {email,password} = formFields

    const logGoogleUser = async()=>{
        const {user}  = await signInWithGooglePopup();
        console.log(user)
        const userDocRef = await createUserDocumentFromAuth(user)
        console.log(userDocRef)    

        setFormFields(defaultFormFields)
        
    }
    const handleChange = (e)=>{
        
        setFormFields({
            ...formFields,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = async (event)=>{
        event.preventDefault()
        try{
           const response = await signInUserWithEmailAndPassword(email,password)
           console.log(response)
        }catch(e){
           e.code === 'auth/invalid-credential'? alert('auth/invalid-credential'):console.log(e)
        }
    }
    return (
        <div className='sign-in-container'>
        <h2>I have an account. Sign In</h2>
            <form onSubmit={handleSubmit}>
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
                        
                <div className="buttons-container">
                    <Button type='submit'> Sing in </Button>
                    <Button type='button'onClick={logGoogleUser} buttonType="google"> 
                            google sign in 
                    </Button>
                </div>
            </form>
        
        </div>
    )
}

export default SignInForm
