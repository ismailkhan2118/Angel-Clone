import React from 'react';
import "./SignUpForm.scss"
import { NavLink, } from "react-router-dom"

function SignUpPageForm(props) {

    return (
        <div className='singupform-container'>
            <div className='signup-h1-div'>
                <img src={"https://angel.co/assets/shared/angellist_logo_hand-242554a1b6fa9f574f4ee1488f18d011b3066c90989f8320c15961aedaada679.svg"} alt="anglelistlogo" />
                <h1 className='login-h1'>Create Account</h1>
                <p>Find your next opportunity  !</p>
            </div>
            <div className='login-input-div'>
                <label htmlFor='fullname'>Full Name</label>
                <input id="fullname" className='login-input-1' type="text" placeholder='   enter text'></input>
                <label htmlFor='email'>Email</label>
                <input id="email" className='login-input-1' type="email" placeholder='   Email'></input>
                <label htmlFor='password' >Password</label>
                <input className='login-input-2' type="password" placeholder='   Password'></input>
                <button className='login-btn'>SignUp</button>
            </div>
            <div className='login-signup-div'>
                <p><b>Already have  an Account ? </b>  </p>
                <NavLink to="/login">Log in </NavLink>
            </div>
        </div>
    );
}

export default SignUpPageForm;