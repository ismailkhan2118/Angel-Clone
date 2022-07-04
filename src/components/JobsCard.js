import React, { useEffect } from "react"
import "./JobsCard.scss"
import { useState } from "react"
import { Dialog } from "primereact/dialog"
import { Button } from "primereact/button";
import { Slider } from "primereact/slider";

import JobsCardApplyModal from "./JobsCardApplyModal";


function JobsCard(props) {

    const [showApplicationModal, setShowApplicationModal] = useState(false);

    const onCancel = () => {
        setShowApplicationModal(false);
    }

    return (
        <div className="jobs-card-container">
            <div className="jobs-card">
                <div className="jobs-card-company-name">

                    <img className="company-img" src={props.coimg} alt="" />
                    <div className="jobs-card-company-name-description">
                        <h1 className="jobs-card-h1">{props.coname}</h1>
                        <p className="jobs-card-company description ">{props.codescription}</p>
                    </div>
                </div>
                <div className="jobs-card-company-hiring">
                </div>
                <div className="jobs-card-company-role">
                    <div className="company-role-salary">
                        <h2 className="jobs-card-h2">Role {props.corole} </h2>
                        <p>  {props.colocation}</p>

                        <p> salary {props.cosalary}</p>

                    </div>
                    <div className="jobs-card-apply-save">
                        <button className="save-btn"  >Save</button>
                        <button className="apply-btn" onClick={() => { setShowApplicationModal(true) }}>Apply</button>
                    </div>
                </div>
            </div>
            <Dialog
                dismissableMask={true}
                className="dialog-page"
                visible={showApplicationModal}
                onHide={onCancel}
            >
                <JobsCardApplyModal onCancel={onCancel} coimg={props.coimg} coname={props.coname}></JobsCardApplyModal>
            </Dialog>
        </div>
    )
}
export default JobsCard;