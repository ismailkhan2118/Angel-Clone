import React from "react";
import "./ProfilePage.scss";
import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { InputTextarea } from "primereact/inputtextarea";
import { Chips } from "primereact/chips";
import CompanyCard from "../../components/CompanyCard";

export default function WorkExp() {
  const [cmpnyinfo, setCmpnyinfo] = useState({
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
  const [savework, setSaveWork] = useState();
  return (
    <div>
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
          {savework ? (
            <div className="cmpny-crd">
              <div>
                <img
                  alt="Avatar for Work"
                  class="rounded-md"
                  height="46"
                  src="https://angel.co/images/shared/nopic_college.png"
                  width="46"
                />
              </div>
              <div>
                <CompanyCard
                  companyname={cmpnyinfo.companyName}
                  title={cmpnyinfo.title}
                  startDate={cmpnyinfo.startDate}
                  endDate={cmpnyinfo.endDate}
                  currentlyWorkHere={cmpnyinfo.currentlyWorkHere}
                  description={cmpnyinfo.description}
                  typeOfPosition={cmpnyinfo.typeOfPosition}
                  workedOn={cmpnyinfo.workedOn}
                  skillsUsed={cmpnyinfo.skillsUsed}
                ></CompanyCard>
              </div>
              <div>
                <button
                  style={{
                    color: "#717514",
                    fontFamily: "Arial,Helvetica,sans-serif",
                    fontSize: "12px",
                  }}
                  onClick={() => {
                    setSaveWork(false);
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          ) : (
            <div className="grey-pane">
              <div>
                <label htmlFor="cmpnyname">Company Name</label>
              </div>

              <div>
                <InputText
                  className="p-float-label"
                  id="cmpnyname"
                  name="cmpnyname"
                  value={cmpnyinfo.companyName}
                  onChange={(e) => setCmpnyinfo(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="cmpnytitle">Title</label>
              </div>
              <div>
                <InputText
                  id="cmpnytitle"
                  name="cmpnytitle"
                  value={cmpnyinfo.title}
                  onChange={(e) =>
                    setCmpnyinfo({
                      ...cmpnyinfo,
                      title: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <label htmlFor="strtcal">Start Date</label>
              </div>
              <div>
                <Calendar
                  id="strtcal"
                  name="strtcal"
                  value={cmpnyinfo.startDate}
                  onChange={(e) =>
                    setCmpnyinfo({
                      ...cmpnyinfo,
                      startDate: e.value,
                    })
                  }
                ></Calendar>
              </div>

              <div>
                <label htmlFor="endcal">End Date</label>
              </div>
              <div>
                <Calendar
                  id="endcal"
                  name="endcal"
                  value={cmpnyinfo.endDate}
                  onChange={(e) =>
                    setCmpnyinfo({
                      ...cmpnyinfo,
                      endDate: e.value,
                    })
                  }
                ></Calendar>
              </div>

              <div>
                <input
                  id="crntlywrkhere"
                  name="crntlywrkhere"
                  className="tw-mr-2"
                  type="checkbox"
                  value={cmpnyinfo.currentlyWorkHere}
                  onChange={(e) =>
                    setCmpnyinfo({
                      ...cmpnyinfo,
                      currentlyWorkHere: !cmpnyinfo.currentlyWorkHere,
                    })
                  }
                />
                <label htmlFor="crntlywrkhere">Currently Work Here</label>
              </div>

              <div>
                <label htmlFor="descr">Description</label>
              </div>
              <div>
                <InputTextarea
                  rows={5}
                  cols={35}
                  value={cmpnyinfo.description}
                  placeholder="Description"
                  onChange={(e) =>
                    setCmpnyinfo({
                      ...cmpnyinfo,
                      description: e.target.value,
                    })
                  }
                  autoResize
                />
              </div>
              <div>
                <label htmlFor="skillsused">Skills developed</label>
              </div>
              <div>
                <Chips
                  value={cmpnyinfo.skillsUsed}
                  onChange={(e) =>
                    cmpnyinfo({
                      ...cmpnyinfo,
                      skillsUsed: e.target.value,
                    })
                  }
                ></Chips>
              </div>
              <div className="btns-div">
                <button
                  onClick={() => {
                    console.log("sv btn clicked");
                  }}
                  type="button"
                  className="blue-btn"
                >
                  Save
                </button>

                <button className="cancel-btn">Cancel</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
