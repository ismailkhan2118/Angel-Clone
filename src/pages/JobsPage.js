import "./JobsPage.scss"

import { Chips } from 'primereact/chips';
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import JobsCard from "./JobsCard";


function JobsPage() {
    const [value, setValue] = useState([]);
    const [inputvalue, setInputValue] = useState([]);
    return (
        <div className="jobs-page-container">
            <div className="jobs-h1-div">
                <h1 className="jobs-h1" >Search For Jobs</h1>
            </div>
            <nav className="jobs-nav">
                <span>Browse all</span>
                <span>Saved</span>
            </nav>
            <div className="jobs-filters-div">
                <div className="chips">
                    <Chips className="jobs-title-chip" value={value} onChange={(e) => setValue(e.value)} placeholder="Add a job title"></Chips>
                </div>
                <div className="filter-logo-btn">
                    <img className="img-filter" src="https://cdn-icons.flaticon.com/png/512/2516/premium/2516722.png?token=exp=1653922188~hmac=26eb89c7ff5b3841b5ed12949cfc69c2" alt="img-filter" />

                    <button className="filter-btn"> Filters</button>
                </div>

            </div>
            <JobsCard></JobsCard>
            <JobsCard></JobsCard>
            <JobsCard></JobsCard>
        </div>)

}
export default JobsPage