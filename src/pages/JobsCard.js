import React from "react"
import "./JobsCard.scss"
import homeicon from "../assets/home-icon.svg"

function JobsCard() {
    return (
        <div className="jobs-card-container">
            <div className="jobs-card">
                <div className="jobs-card-company-name">

                    <img className="company-img" src="" alt="" />
                    <div className="jobs-card-company-name-description">
                        <h1 className="jobs-card-h1">Faang</h1>
                        <p className="jobs-card-company description ">Company Description</p>
                    </div>
                </div>
                <div className="jobs-card-company-hiring">
                </div>
                <div className="jobs-card-company-role">
                    <div className="company-role-salary">
                        <h2 className="jobs-card-h2">Software intern -Frontend(React) </h2>
                        <p>Location</p>
                        <p>salary</p>

                    </div>
                    <div className="jobs-card-apply-save">
                        <button className="save-btn">Save</button>
                        <button className="apply-btn">Apply</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default JobsCard;