import React from 'react';
import "./LoginPageImg.scss"
function LoginPageImg(props) {
    return (
        <div className='login-page-img-container'>
            <img className='img-1' src='https://angel.co/webpack/ddd4595adfcf2880d80e8bf949042bf2.png' alt='side' />
            <div className='h1-p-container'>
                <h1 className='img-h1'>Find The Job Made For You</h1>
                <p className='img-p'> Browse over 130K jobs at top companies and fast-growing startups.</p>
            </div>

        </div >
    );
}

export default LoginPageImg;