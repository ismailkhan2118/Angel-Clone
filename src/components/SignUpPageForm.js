import React from 'react';

function SignUpPageForm(props) {
    return (
        <div>
            <div className='login-h1-div'>
                <img src={"https://angel.co/assets/shared/angellist_logo_hand-242554a1b6fa9f574f4ee1488f18d011b3066c90989f8320c15961aedaada679.svg"} alt="anglelistlogo" />
                <h1 className='login-h1'>Login</h1>
                <p>Find the job made for you !</p>
            </div>
            <div className='login-input-div'>
                <input className='login-input-1' type="email" placeholder='   Email'></input>
                <input className='login-input-2' type="password" placeholder='   Password'></input>
                <button className='login-btn'>Login</button>
            </div>
            <div className='login-signup-div'>
                <p><b>Not Registerd ? </b>  </p>
                <a href="/signup">Creat an Account </a>
            </div>
        </div>
    );
}

export default SignUpPageForm;