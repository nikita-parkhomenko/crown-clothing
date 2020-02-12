import React, { Component } from 'react';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-buton';
import { auth, signInWithGoogle } from '../../fiebase/firebase.utils'

import './sign-in.scss';

class SignIn extends Component {
    state = { 
        email: '',
        password: ''
     }

     handleSubmit = async event => {
         event.preventDefault();

         const { email, password } = this.state;

         try {
            await auth.signInWithEmailAndPassword(email, password);

            this.setState({ 
                email: '',
                password: ''
             })
         } catch(error) {
             console.log(error)
         }
     }

     handleChange = event => {
         const { value, name } = event.target;

         this.setState({ [name]: value })
     }



    render() {
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} required
                        handleChange={this.handleChange} label="email" />

                    <FormInput name="password" type="password" value={this.state.password} required
                        handleChange={this.handleChange} label="password" />
                    <div className="buttons">
                        <CustomButton type="submit" > Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn > Sign In With Goole</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;