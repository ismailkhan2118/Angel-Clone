import React from "react";
import { PrimeIcons } from "primereact/api";
import "./ProfilePage.scss";
import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { InputTextarea } from "primereact/inputtextarea";
import { Chips } from "primereact/chips";
import CompanyCard from "../../components/CompanyCard";

export default function WorkExp() {
  const [companyInfo, setCompanyInfo] = useState({
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

  const [saveWork, setSaveWork] = useState();
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
          {saveWork ? (
            <div className="cmpny-crd">
              <div>
                <i
                  className="pi pi-briefcase"
                  style={{ fontSize: "1.5em" }}
                ></i>
              </div>
              <div>
                <CompanyCard companyInfo={companyInfo}></CompanyCard>
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
                <label htmlFor="companyName">Company Name</label>
              </div>

              <div>
                <InputText
                  className="p-float-label"
                  id="companyName"
                  name="companyName"
                  value={companyInfo.companyName}
                  onChange={(e) =>
                    setCompanyInfo({
                      ...companyInfo,
                      companyName: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label htmlFor="companytitle">Title</label>
              </div>
              <div>
                <InputText
                  id="companytitle"
                  name="companytitle"
                  value={companyInfo.title}
                  onChange={(e) =>
                    setCompanyInfo({
                      ...companyInfo,
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
                  value={companyInfo.startDate}
                  onChange={(e) =>
                    setCompanyInfo({
                      ...companyInfo,
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
                  value={companyInfo.endDate}
                  onChange={(e) =>
                    setCompanyInfo({
                      ...companyInfo,
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
                  value={companyInfo.currentlyWorkHere}
                  onChange={(e) =>
                    setCompanyInfo({
                      ...companyInfo,
                      currentlyWorkHere: companyInfo.currentlyWorkHere,
                    })
                  }
                />
                <label htmlFor="crntlywrkhere">Currently Work Here</label>
              </div>
              {console.log(companyInfo.currentlyWorkHere)}

              <div>
                <label htmlFor="descr">Description</label>
              </div>
              <div>
                <InputTextarea
                  rows={5}
                  cols={35}
                  value={companyInfo.description}
                  placeholder="Description"
                  onChange={(e) =>
                    setCompanyInfo({
                      ...companyInfo,
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
                  value={companyInfo.skillsUsed}
                  onChange={(e) =>
                    companyInfo({
                      ...companyInfo,
                      skillsUsed: e.target.value,
                    })
                  }
                ></Chips>
              </div>
              <div className="btns-div">
                <button
                  onClick={() => {
                    setSaveWork(true);
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
