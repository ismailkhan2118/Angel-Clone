import React from 'react';
import LoginPageForm from '../components/LoginPageForm';
import LoginPageImg from '../components/LoginPageImg';
import "./LoginPage.scss"

function LoginPage(props) {
    return (
        <div className='login-page-container'>
            <LoginPageForm></LoginPageForm>
            <LoginPageImg></LoginPageImg>
        </div>
    );
}

export default LoginPage;