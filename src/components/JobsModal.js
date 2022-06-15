import React from "react";
import "./JobsModal.scss";
import { useState } from "react";
import { Slider } from "primereact/slider";
import { InputText } from "primereact/inputtext";

function JobsModal() {
  const [value5, setValue5] = useState([10, 95]);
  const [experience, setExperrience] = useState([0, 8]);
  const [value1, setValue1] = useState("");
  return (
    <div className="jobs-modal-container">
      <div className="jobs-modal-header">Header</div>
      <div className="jobs-modal-filter"></div>
      <div className="salary-skills">
        <h2>Salary</h2>
        <h2>skills</h2>
      </div>
      <div className="jobs-modal-salary-skills">
        <div className="jobs-modal-salary">
          <h1 className="salary-h2">Salary</h1>
          <div className="modal-salary-range">
            <h5 className="">
              {" "}
              ${value5[0]}k-${value5[1]}k {value5[1] === 200 ? "+" : ""}
            </h5>

            <Slider
              className="modal-skills-slider"
              value={value5}
              onChange={(e) => setValue5(e.value)}
              max={200}
              range="200"
            />
          </div>
        </div>
        <div className="jobs-modal-skills">
          <h1 className="salary-h2">Skills</h1>
          <div className="modal-skills-input ">
            <InputText
              value={value1}
              onChange={(e) => setValue1(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="type-experience">
        <h2>Job Details</h2>
        <h2>Experience</h2>
      </div>
      <div className="jobs-modal-type-experience">
        <div className="jobs-modal-type">
          <div className="modal-checkbox">
            <h2>Jobs Type</h2>
            <hr />
            <div>
              <input type="checkbox" id="f-t" />
              <label htmlFor="f-t">Full Time  </label>
            </div>
            <div>
              <input type="checkbox" id="intern" />
              <label className="intern">Internship </label>
            </div>
            <div>
              <input type="checkbox" id="contract" onChange />
              <label className="contract">  Contract</label>
            </div>
            <div>
              <input type="checkbox" id="co-founder" onChange />
              <label className="co-founder"> Co Founder</label>
            </div>


          </div>
        </div>
        <div className="jobs-modal-experience">
          <h5 className="">
            {" "}
            ${experience[0]}Years-${experience[1]}Years          </h5>
          <Slider

            className="modal-skills-slider"
            value={experience}
            onChange={(e) => setExperrience(e.value)}
            max={20}
            range="200"
          />
        </div>
      </div>
    </div>
  );
}

export default JobsModal;
