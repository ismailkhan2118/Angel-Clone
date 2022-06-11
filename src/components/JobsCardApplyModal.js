import React from 'react';
import { Link } from 'react-router-dom';
import "./JobsCardApplyModal.scss"

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
                </div>
            </div>

        </div>
    );
}

export default JobsCardApplyModal;