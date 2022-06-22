import React from 'react';
import { Link } from 'react-router-dom';
import "./JobsCardApplyModal.scss"
import { useState } from "react"

function JobsCardApplyModal(props) {


    return (
        <div className='apply-modal-container'>
            <div className='applying-company-container'>
                <div className='applying-company'>
                    <h5>Apply to</h5>
                </div>
            </div>
            <div className='applying-user-container'>
                <div className='applying-user'>
                    <h5>Your Application</h5>
                    <hr />
                    <div className='username-edit'>
                        <h4>User Name</h4>
                        <Link to="/profile" ><p className='update'>Update</p></Link>
                    </div>
                    <div className='companyname-profile'>
                        <div className='company-name'>
                            <h4>Your hiring contact is {props.coname}</h4>
                            <h5>let them know why you are good fit </h5>
                        </div>
                        <div className="company-img">
                            <img className="apply-img" src={props.coimg} alt='company mame ' />
                        </div>

                    </div>
                    <div className='textarea-input'>
                        <textarea placeholder={`Write a note to Hr name at Company name`} rows="4" className='apply-textarea'></textarea>
                    </div>
                    <div className='btns'>
                        <button className='cancel-btn'  >Cancel</button>
                        <button className='sending-btn'>Send Application</button>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default JobsCardApplyModal;