import React, { useState } from "react";
import "./Overview.scss";

import "primeicons/primeicons.css";
export default function Overview() {
  const [profileName, setProfileName] = useState("Mr.Mohammad");
  const [activityStatus, setActivityStatus] = useState("Active");
  const [country, setCountry] = useState("India");
  const [jobType, setJobType] = useState("Full-time");
  const [skills, setSkills] = useState(["javaScript", "HTML", "CSS"]);
  const [salary, setSalary] = useState();
  const [desiredRole, setDesiredRole] = useState();
  const [remoteWork, setRemoteWork] = useState();
  const [desiredLocation, setDesiredLocation] = useState([
    "Hyderabad",
    "Bangalore",
  ]);
  const [desiredTechStack, setDesiredTechStack] = useState(["MERN", "MEAN"]);
  const [companySize, setCompanySize] = useState(["1-10", "20-100"]);
  return (
    <main>
      <div className="main-container">
        <section className="profile-details">
          <div>
            <img
              className="img-style"
              src="https://data.whicdn.com/images/305312729/original.jpg?t=1515972463"
              alt="image not found"
            />
          </div>
          <div>
            <span
              style={{
                "font-size": "20px",
                "font-family": "Arial, Helvetica, sans-serif",
                color: "#162040",
              }}
            >
              {profileName}
            </span>
            <span className="activity-style"> {activityStatus}</span>
            <div
              style={{
                "font-size": "14px",
                "font-family": "Arial, Helvetica, sans-serif",
                color: "#5A5E70",
              }}
            >
              {country}. 0 hours behind . open to {jobType}
            </div>
          </div>
          <div className="profile-det-rightpane">
            <span className="linkedin-style">
              <i className="pi pi-linkedin"></i>
            </span>
            <span className="resume-link">
              <a>Resume</a>
            </span>
          </div>
          <div></div>
        </section>
      </div>
      <section className="pane">
        <div className="pane-heading-style">Skills</div>
        {skills.map((skill) => {
          return <span className="grey-style">{skill}</span>;
        })}
      </section>
      <div></div>

      <section className="pane">
        <div className="pane-heading-style">Desired Salary</div>
        {<span className="grey-style">{salary ? salary : "Flexible"}</span>}
      </section>
      <section className="pane">
        <div className="pane-heading-style">Desired Role</div>
        {
          <span className="grey-style">
            {desiredRole ? desiredRole : "select role"}
          </span>
        }
      </section>
      <section className="pane">
        <div className="pane-heading-style">Remote Work</div>
        {
          <span className="grey-style">
            {remoteWork ? remoteWork : "select your job-location prefence"}
          </span>
        }
      </section>
      <section className="pane">
        <div className="pane-heading-style">Desired Location</div>
        {desiredLocation.map((location) => {
          return (
            <span className="grey-style">
              {location ? location : "Select your Desired location"}
            </span>
          );
        })}
      </section>
      <section className="pane">
        <div className="pane-heading-style">Desired Tech Stack</div>
        {desiredTechStack.map((Techstack) => {
          return (
            <span className="grey-style">
              {Techstack ? Techstack : "Select your Desired TechStack"}
            </span>
          );
        })}
      </section>
      <section className="pane">
        <div className="pane-heading-style">Desired Company Size</div>
        {companySize.map((size) => {
          return (
            <span className="grey-style">
              {size ? size : "Select your Desired company size"}
            </span>
          );
        })}
      </section>
    </main>
  );
}
