import React from 'react';
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
                    <h4>User Name</h4>
                </div>
            </div>

        </div>
    );
}

export default JobsCardApplyModal;