import React, { useState, useContext, useEffect } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/Firebase.utils'
import FormInput from '../form-input/form-input.component'
import './sign-up-form.styles.scss'
import Buttton from '../button/button.component'
import axios from 'axios'
import axiosInstance from '../../utils/axiosInterceptor'
const defaultFormFields = {
    firstName: '',
    lastName: '',
    email: '',
    confirmPassword: '',
    password: '',
    roles: ''
}
const defaultSignUpStatus={
    success: false,
    error: false,
    value: ''
}
const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    //const {setCurrentUser} = useContext(UserContext) //removed to implement it in autchange listner in usercontext comp
    const { firstName, lastName, email, confirmPassword, password, roles } = formFields
    const [signUp, setsignUp] = useState(defaultSignUpStatus);
    const handleChange = (e) => {
        setsignUp(defaultSignUpStatus)
        setFormFields({
            ...formFields,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {

        e.preventDefault()
        if (password === confirmPassword) {
            try {
                const response = await axiosInstance.post('/authentication/register', {
                    firstName,
                    lastName,
                    email,
                    password,
                    roles: roles === "ROLE_ADMIN" ? ["ROLE_ADMIN"] : ["ROLE_USER"]
                });
                console.log('User signed up:', response.data);
                setsignUp({
                    ...signUp,
                    success: true,
                    error: false,
                    value: response.data.message
                })
                setFormFields(defaultFormFields)
                // return response.data;
            } catch (error) {
                console.error('Signup failed:', error.response.data);
                setsignUp({
                    ...signUp,
                    error: true,
                    value: error.response.data.message
                })
            }

        }


    }


    return (
        <div className='sign-up-container'>
            <h2>I don't have an account</h2>
            <span>SignUp with email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput
                    label={'First Name'}
                    required type='text'
                    name='firstName'
                    value={firstName}
                    onChange={handleChange}
                />
                <FormInput
                    label={'Last Name'}
                    required type='text'
                    name='lastName'
                    value={lastName}
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
                <span>Select Role</span>
                <div className='roles'> 
                    <FormInput
                        label={'User'}
                        required
                        type='radio'
                        name='roles'
                        value="ROLE_USER"
                        checked={roles === "ROLE_USER"}
                        onChange={handleChange}
                        className='user role'
                    />
                    <FormInput
                        label={'Admin'}
                        required
                        type='radio'
                        name='roles'
                        value="ROLE_ADMIN"
                        checked={roles === "ROLE_ADMIN"}
                        onChange={handleChange}
                        className='admin role'
                    />
                </div>

                {(signUp.error || signUp.success) &&
                    <span className={`signUp`}>
                        <h3 className={`${signUp.error ? 'error' : 'success'}`}>
                            {signUp.value}
                        </h3>
                    </span>}
                <Buttton buttonType='' type='submit'>Sign Up</Buttton>
            </form>
        </div>
    )
}

export default SignUpForm
