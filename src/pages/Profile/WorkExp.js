import React from "react";
import "./ProfilePage.scss";
import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { InputTextarea } from "primereact/inputtextarea";
import { Chips } from "primereact/chips";

export default function WorkExp() {
  const [prevcmpnyinfo, setPrecmpnyinfo] = useState({
    companyName: "",
    title: "",
    startDate: "",
    endDate: "",
    currentlyWorkHere: false,
    description: "",
    typeOfPosition: "",
    workedOn: "",
    skillsUsed: "",
  });
  return (
    <div>
      {" "}
      <div className="pane-wrapper">
        <div className="left-pane">
          <div className="tw-font-semibold tw-text-black">
            Your Work Experience
          </div>
          <div className="section-description">
            What other positions have you held?
          </div>
        </div>

        <div className="right-pane">
          <div>
            <label htmlFor="prevcmpnyname">Company Name</label>
          </div>

          <div>
            <InputText
              className="p-float-label"
              id="prevcmpnyname"
              name="prevcmpnyname"
              value={prevcmpnyinfo.companyName}
              onChange={(e) => setPrecmpnyinfo(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="prevcmpnytitle">Title</label>
          </div>
          <div>
            <InputText
              id="prevcmpnytitle"
              name="prevcmpnytitle"
              value={prevcmpnyinfo.title}
              onChange={(e) =>
                setPrecmpnyinfo({
                  ...prevcmpnyinfo,
                  title: e.target.value,
                })
              }
            />
          </div>
          {console.log(prevcmpnyinfo.title)}

          <div>
            <label htmlFor="strtcal">Start Date</label>
          </div>
          <div>
            <Calendar
              id="strtcal"
              name="strtcal"
              value={prevcmpnyinfo.startDate}
              onChange={(e) =>
                setPrecmpnyinfo({
                  ...prevcmpnyinfo,
                  startDate: e.value,
                })
              }
            ></Calendar>
          </div>
          {console.log(`start date is ${prevcmpnyinfo.endDate}`)}

          <div>
            <label htmlFor="endcal">End Date</label>
          </div>
          <div>
            <Calendar
              id="endcal"
              name="endcal"
              value={prevcmpnyinfo.endDate}
              onChange={(e) =>
                setPrecmpnyinfo({
                  ...prevcmpnyinfo,
                  endDate: e.value,
                })
              }
            ></Calendar>
          </div>

          {console.log(`end date is ${prevcmpnyinfo.endDate}`)}
          <div>
            <input
              id="crntlywrkhere"
              name="crntlywrkhere"
              className="tw-mr-2"
              type="checkbox"
              value={prevcmpnyinfo.currentlyWorkHere}
              onChange={(e) =>
                setPrecmpnyinfo({
                  ...prevcmpnyinfo,
                  currentlyWorkHere: !prevcmpnyinfo.currentlyWorkHere,
                })
              }
            />
            <label htmlFor="crntlywrkhere">Currently Work Here</label>
          </div>

          {console.log(prevcmpnyinfo.currentlyWorkHere)}
          <div>
            <label htmlFor="descr">Description</label>
          </div>
          <div>
            <InputTextarea
              rows={5}
              cols={35}
              value={prevcmpnyinfo.description}
              placeholder="Description"
              onChange={(e) =>
                setPrecmpnyinfo({
                  ...prevcmpnyinfo,
                  description: e.target.value,
                })
              }
              autoResize
            />
          </div>
          <div>
            <label htmlFor="skilsusd">Skills developed</label>
          </div>
          <div>
            <Chips
              value={prevcmpnyinfo.skillsUsed}
              onChange={(e) =>
                setPrecmpnyinfo({
                  ...prevcmpnyinfo,
                  skillsUsed: e.target.value,
                })
              }
            ></Chips>
          </div>
          <div className="btns-div">
            <button className="cancel-btn"> Cancel</button>
            <button className="blue-btn">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
