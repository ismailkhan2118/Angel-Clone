import React from 'react';
import LoginPageForm from '../components/LoginPageForm';
import LoginPageImg from '../components/LoginPageImg';

function LoginPage(props) {
    return (
        <div className='login-container'>
            <LoginPageForm></LoginPageForm>
            <LoginPageImg></LoginPageImg>
        </div>
    );
}

export default LoginPage;