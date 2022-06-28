import React from 'react';
import LoginPageForm from '../components/LoginPageForm';
import LoginPageImg from '../components/LoginPageImg';
import SignUpPageForm from '../components/SignUpPageForm';
import "./SignUpPage.scss"


function SignUpPage(props) {
    return (
        <div className='signup-container'>
            <LoginPageImg />

            <SignUpPageForm />

        </div>
    );
}

export default SignUpPage;