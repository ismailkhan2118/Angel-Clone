import React from 'react';
import "./LoginPageForm.scss"
import { NavLink, useNavigate } from "react-router-dom";

function LoginPageForm(props) {
    const navigate = useNavigate()
    const loginHandler = () => {
        navigate("/home")
    }

    return (
        <div className='login-page-form-container'>
            <div className='login-h1-div'>
                <img src={"https://angel.co/assets/shared/angellist_logo_hand-242554a1b6fa9f574f4ee1488f18d011b3066c90989f8320c15961aedaada679.svg"} alt="anglelistlogo" />
                <h1 className='login-h1'>Login</h1>
                <p>Find the job made for you !</p>
            </div>
            <div className='login-input-div'>
                <input className='login-input-1' type="email" placeholder='   Email'></input>
                <input className='login-input-2' type="password" placeholder='   Password'></input>
                <button className='login-btn' onClick={loginHandler}>Login</button>
            </div>
            <div className='login-signup-div'>
                <p><b>Not Registerd ? </b>  </p>
                <NavLink to='/signup'>Create an Account</NavLink>
            </div>
        </div>
    );
}

export default LoginPageForm;