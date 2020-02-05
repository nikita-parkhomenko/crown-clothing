import React, { Component } from 'react';
import { auth, createUserProfileDocument } from '../../fiebase/firebase.utils'

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-buton';

import './sign-up.scss';

class SignUp extends Component {
    state = { 
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
     }

     handleSubmit = async event => {
         event.preventDefault();

         const { displayName, email, password, confirmPassword } = this.state;

         if (password !== confirmPassword) {
             alert("Password don't match");
             return;
         }

         try {
             const { user } = await auth.createUserWithEmailAndPassword(email, password);

             await createUserProfileDocument(user, { displayName });

             this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''        
             })
 
         } catch(error) {
             console.error('Error with sign up', error.message)
         }

     }

     handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value })
     }

    render() {
        
        const { displayName, email, password, confirmPassword } = this.state;

        return (
            <div className="sign-up">
                <h2 className="title"> I do not have an account </h2>
                <span> Sign up with your email and password </span>

                <form onSubmit={this.handleSubmit} className="sign-up-form">
                    <FormInput name="displayName" type="text" value={displayName} required
                        onChange={this.handleChange} label="Display Name" />

                    <FormInput name="email" type="email" value={email} required
                        onChange={this.handleChange} label="Email" />

                    <FormInput name="password" type="password" value={password} required
                        onChange={this.handleChange} label="Password" />

                    <FormInput name="confirmPassword" type="password" value={confirmPassword} required
                        onChange={this.handleChange} label="Confirm Password" />
                    

                    <CustomButton type="submit"> SIGN UP </CustomButton>

                </form>

            </div>
        );
    }
}

export default SignUp;