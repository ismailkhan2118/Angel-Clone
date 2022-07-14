import React from "react";
import "./JobsModal.scss";
import { useState, useReducer } from "react";
import { Slider } from "primereact/slider";
import { InputText } from "primereact/inputtext";
import { Chips } from "primereact/chips";
import { type } from "@testing-library/user-event/dist/type";
const reducer = (state, action) => {

  if (action.type === "FULL-TIME") {
    console.log(state)
    return state?.length;
  }


  return state;
}

function JobsModal() {
  const initialState = { fulltime: "Fulltime", };
  const [fullTimeFilter, setFullTimeFilter] = useState("FUll-TIme")

  const [value5, setValue5] = useState([10, 95]);
  const [experience, setExperrience] = useState([0, 8]);
  const [chipValue, setChipValue] = useState([])
  const [value1, setValue1] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state)
  console.log(fullTimeFilter)
  return (
    <div className="jobs-modal-container">
      <div className="jobs-modal-header">Header</div>
      <div className="jobs-modal-filter">
        <Chips value={chipValue} onChange={(e) => { setChipValue(e.target.value) }}></Chips>

      </div>
      <div className="salary-skills">
        <div className="jobs-details-svg">

          <svg height="24px" version="1.1" viewBox="0 0 24 24" width="24px"><g fill="none" fill-rule="evenodd" id="icn_job" stroke="none" stroke-width="1"><g fill="currentColor" id="settings-slider-desktop-horizontal-alternate" transform="translate(2.000000, 2.000000)"><path d="M18.75,0 L1.25,0 C0.559644063,0 0,0.559644063 0,1.25 L0,14.5833333 C0,15.2736893 0.559644063,15.8333333 1.25,15.8333333 L18.75,15.8333333 C19.4403559,15.8333333 20,15.2736893 20,14.5833333 L20,1.25 C20,0.559644063 19.4403559,0 18.75,0 Z M18.3333333,12.0833333 C18.3333333,12.313452 18.1467853,12.5 17.9166667,12.5 L2.08333333,12.5 C1.85321469,12.5 1.66666667,12.313452 1.66666667,12.0833333 L1.66666667,2.08333333 C1.66666667,1.85321469 1.85321469,1.66666667 2.08333333,1.66666667 L17.9166667,1.66666667 C18.1467853,1.66666667 18.3333333,1.85321469 18.3333333,2.08333333 L18.3333333,12.0833333 Z" id="Shape"></path><path d="M11.9583333,17.235 C11.8791786,17.1394639 11.761567,17.0841667 11.6375,17.0841667 L8.3625,17.0841667 C8.23843297,17.0841667 8.12082143,17.1394639 8.04166667,17.235 L6.29166667,19.345 C6.20288525,19.4723134 6.19222794,19.638422 6.26401189,19.7760371 C6.33579583,19.9136521 6.47812108,19.9999606 6.63333333,20.0000003 L13.3658333,20.0000003 C13.521333,20.0001781 13.6639929,19.9137522 13.735838,19.7758448 C13.807683,19.6379373 13.796757,19.4714984 13.7075,19.3441667 L11.9583333,17.235 Z" id="Path"></path><path d="M8.46916667,3.33833333 C7.66505998,3.37935026 7.04633932,4.06426659 7.0869847,4.86839215 C7.12763009,5.6725177 7.81226048,6.29155476 8.61640473,6.25128091 C9.42054898,6.21100706 10.0399023,5.52666277 10,4.7225 C9.98059697,4.33593023 9.80840045,3.97290756 9.52130283,3.7133163 C9.23420521,3.45372504 8.85573172,3.3188365 8.46916667,3.33833333 Z" id="Path"></path><path d="M3.98416667,5.41666667 L5.625,5.41666667 C5.97017797,5.41666667 6.25,5.13684464 6.25,4.79166667 C6.25,4.4464887 5.97017797,4.16666667 5.625,4.16666667 L3.98416667,4.16666667 C3.6389887,4.16666667 3.35916667,4.4464887 3.35916667,4.79166667 C3.35916667,5.13684464 3.6389887,5.41666667 3.98416667,5.41666667 Z" id="Path"></path><path d="M16.0416667,4.16666667 L11.4583333,4.16666667 C11.1131554,4.16666667 10.8333333,4.4464887 10.8333333,4.79166667 C10.8333333,5.13684464 11.1131554,5.41666667 11.4583333,5.41666667 L16.0416667,5.41666667 C16.3868446,5.41666667 16.6666667,5.13684464 16.6666667,4.79166667 C16.6666667,4.4464887 16.3868446,4.16666667 16.0416667,4.16666667 Z" id="Path"></path><path d="M11.4116667,7.91666667 C10.6072864,7.95677705 9.98770778,8.64134612 10.027768,9.44572893 C10.0678282,10.2501117 10.7523586,10.869733 11.5567439,10.829723 C12.3611293,10.7897129 12.9807932,10.1052211 12.9408333,9.30083333 C12.9004165,8.4965168 12.2160214,7.87701801 11.4116667,7.91666667 L11.4116667,7.91666667 Z" id="Path"></path><path d="M16.0416667,8.75 L14.4008333,8.75 C14.0556554,8.75 13.7758333,9.02982203 13.7758333,9.375 C13.7758333,9.72017797 14.0556554,10 14.4008333,10 L16.0416667,10 C16.3868446,10 16.6666667,9.72017797 16.6666667,9.375 C16.6666667,9.02982203 16.3868446,8.75 16.0416667,8.75 Z" id="Path"></path><path d="M8.5675,8.75 L3.98416667,8.75 C3.6389887,8.75 3.35916667,9.02982203 3.35916667,9.375 C3.35916667,9.72017797 3.6389887,10 3.98416667,10 L8.5675,10 C8.91267797,10 9.1925,9.72017797 9.1925,9.375 C9.1925,9.02982203 8.91267797,8.75 8.5675,8.75 Z" id="Path"></path></g></g></svg>
          <h2>Job Details</h2>
        </div>
        <h2>skills</h2>
      </div>
      <div className="jobs-modal-salary-skills">
        <div className="jobs-modal-type">
          <div className="modal-checkbox">
            <h2>Jobs Type</h2>
            <hr />
            <div>
              <input type="checkbox" name="Fulltime" value={chipValue} onClick={(e) => { setChipValue([...chipValue, e.target.name]) }} id="f-t" />
              <label htmlFor="f-t">Full Time  </label>
            </div>
            <div>
              <input type="checkbox" name="Internship" value={chipValue} onClick={(e) => { setChipValue([...chipValue, e.target.name]) }} id="intern" />
              <label className="intern">Internship </label>
            </div>
            <div>
              <input value={chipValue} name=" Contract" type="checkbox" id="contract" onChange={(e) => {
                setChipValue([...chipValue, e.target.name])
              }} />
              <label className="contract">  Contract</label>
            </div>
            <div>
              <input name="co founder" value={chipValue} type="checkbox" id="co-founder" onChange={(e) => { setChipValue([...chipValue, e.target.name]) }} />
              <label className="co-founder"> Co Founder</label>
            </div>


          </div>
        </div>
        <div className="jobs-modal-skills">
          <div className="skills-svg">

            <h1 className="salary-h2">Skills</h1>
            <div>
              <svg className="search-g" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" ><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm0 6a1 1 0 011 1v6a1 1 0 11-2 0v-6a1 1 0 011-1zm0-4a1 1 0 110 2 1 1 0 010-2z" fill="currentColor"></path></svg>
            </div>
          </div>
          <div className="modal-skills-input ">
            <InputText
              className="t"
              placeholder="Type to Search"
              value={value1}
              onChange={(e) => setValue1(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="type-experience">
        <h2>Salary</h2>
        <h2>Experience</h2>
      </div>
      <div className="jobs-modal-type-experience">
        <div className="jobs-modal-salary">
          <h1 className="salary-h2">Salary</h1>
          <div className="modal-range">
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

        <div className="jobs-modal-experience">
          <h1 className="salary-h2">Experience</h1>
          <div className="modal-range">
            <h5 className="d">
              {" "}
              {experience[0]}-{experience[1]}Years          </h5>
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
    </div>
  );
}

export default JobsModal;
