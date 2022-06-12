import React from "react"
import "./JobsCard.scss"
import { useState } from "react"
import { Dialog } from "primereact/dialog"
import { Button } from "primereact/button";
import JobsCardApplyModal from "./JobsCardApplyModal";


function JobsCard() {
    const [displayBasic2, setDisplayBasic2] = useState(false);
    const [position, setPosition] = useState("center");
    const dialogFuncMap = { displayBasic2: setDisplayBasic2 };

    const onClick = (name, position) => {
        dialogFuncMap[`${name}`](true);

        if (position) {
            setPosition(position);
        }
    };

    const onHide = (name) => {
        dialogFuncMap[`${name}`](false);
    };

    const renderFooter = (name) => {
        return (
            <div>
                <Button
                    label="No"
                    icon="pi pi-times"
                    onClick={() => onHide(name)}
                    className="p-button-text"
                />
                <Button

                />
            </div>
        );
    };


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
                        <button className="save-btn"  >Save</button>
                        <button className="apply-btn" onClick={() => onClick("displayBasic2")}>Apply</button>
                    </div>
                </div>
            </div>
            <Dialog
                dismissableMask={true}
                className="dialog-page"
                // header="Apply Filters"
                visible={displayBasic2}
                // footer={renderFooter("displayBasic2")}
                onHide={() => onHide("displayBasic2")}
            >
                <JobsCardApplyModal disable={onHide}></JobsCardApplyModal>
            </Dialog>
        </div>
    )
}
export default JobsCard;