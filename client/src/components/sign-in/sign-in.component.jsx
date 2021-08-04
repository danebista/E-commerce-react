import React, {useState} from 'react';
import {connect} from 'react-redux';

import './sign-in.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {googleSignInStart, userSignInStart} from '../../redux/user/user-actions';

const SignIn=({emailSignInStart, googleSignInStart}) =>{
    
    const [userCredentials, setCredentials] = useState({email:'', password:''})
    const {email, password} = userCredentials;

    const handleSubmit = (e) => {
        e.preventDefault();
  
        emailSignInStart(email, password);
    }

    const handleChange = e =>{
        const {value, name} = e.target;
        setCredentials({...userCredentials, [name] :value}) 
    }


        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput
                     name="email"
                     type="email"
                     value={email}
                     handleChange={handleChange}
                     label="email" required
                     />
                    <FormInput 
                    name="password" 
                    type="password" 
                    value={password} 
                    handleChange={handleChange} 
                    label="password" required
                    />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton> 
                        <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>     
                </form>
            </div>
        )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: ()=> dispatch(googleSignInStart()),
    emailSignInStart: (email, password)=> dispatch(userSignInStart({email, password}))

})
export default connect(null, mapDispatchToProps)(SignIn);
