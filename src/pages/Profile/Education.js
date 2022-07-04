import React from "react";
import { useState } from "react";
import { Degree } from "../../data/JobRoles";
import EducationPane from "../../components/EducationPane";

import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";

export default function Education() {
  const [edu, setEdu] = useState("");
  const [graddt, setGraddt] = useState(null);
  const [saveEdu, setSaveEdu] = useState(false);
  const [gpa, setGpa] = useState();
  const [maxGpa, setMaxGpa] = useState();
  const [error, setError] = useState(false);
  const [ugMajor, setUgMajor] = useState();
  const [degree, setDegree] = useState(Degree);

  const validateGpa = () => {
    if (+gpa > +maxGpa) {
      setError(true);
    } else if (+gpa <= +maxGpa) {
      setError(false);
      setSaveEdu(true);
    }
  };
  return (
    <div>
      <div className="pane-wrapper">
        <div className="left-pane">
          <div className="tw-font-semibold tw-text-black">
            <label htmlFor="Edu">Education</label>
          </div>
          <div className="section-description">
            what schools have you studied at
          </div>
        </div>
        <div className="right-pane">
          {saveEdu ? (
            <div className="ed-card">
              <div>
                <img
                  alt="Avatar for Muffakham Jah College of Engineering and Technology ( Osmania University)"
                  class="rounded-md"
                  height="46"
                  src="https://angel.co/images/shared/nopic_college.png"
                  width="46"
                />
              </div>
              <div>
                <EducationPane
                  edu={edu}
                  ugMajor={ugMajor}
                  degree={degree}
                  gpa={gpa}
                  maxGpa={maxGpa}
                  graddt={new Date(graddt).getFullYear()}
                  saveEdu={saveEdu}
                ></EducationPane>
              </div>
              <div>
                <button
                  style={{
                    color: "#717514",
                    fontFamily: "Arial,Helvetica,sans-serif",
                    fontSize: "12px",
                  }}
                  onClick={() => {
                    setSaveEdu(false);
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          ) : (
            <div className="grey-pane">
              <div>
                <label htmlFor="Edu">Education</label>
                <span>
                  <InputText
                    id="Edu"
                    placeholder="College/University"
                    required
                    name="Edu"
                    value={edu}
                    onChange={(e) => setEdu(e.target.value)}
                  />
                </span>
              </div>
              <div>
                <label htmlFor="endgraddt">Graduation</label>
              </div>
              <div>
                <Calendar
                  required
                  id="endgraddt"
                  name="endgraddt"
                  placeholder="Graduation"
                  dateFormat="dd/mm/yy"
                  value={graddt}
                  onChange={(e) => setGraddt(e.target.value)}
                ></Calendar>
              </div>

              <div>
                <label htmlFor="degree">Degree and Major</label>
              </div>
              <div>
                <Dropdown
                  required
                  id="degree"
                  value={degree}
                  optionLabel="label"
                  optionValue="value"
                  options={Degree}
                  onChange={(e) => setDegree(e.value)}
                  placeholder="Degree Type"
                />
              </div>

              <InputText
                required
                id="ugMajor"
                placeholder="Major/Field of Study"
                name="ugMajor"
                value={ugMajor}
                onChange={(e) => setUgMajor(e.target.value)}
              />

              <div>
                <label>GPA</label>
              </div>
              <div>
                <span>
                  <InputText
                    required
                    classname="GPA-class"
                    type="number"
                    placeholder="GPA"
                    value={gpa}
                    onChange={(e) => setGpa(e.target.value)}
                  />
                </span>

                {error === true ? (
                  <div>gpa cannot exceed max GPA correct</div>
                ) : (
                  <div>gpa is correct </div>
                )}

                <div>
                  <label>MAX GPA</label>
                </div>

                <span>
                  <InputText
                    className="GPA-class"
                    type="number"
                    placeholder="Max"
                    value={maxGpa}
                    onChange={(e) => setMaxGpa(e.target.value)}
                  />
                </span>
              </div>
              <div className="btns-div">
                <button
                  onClick={() => {
                    if (
                      gpa !== "" &&
                      ugMajor !== "" &&
                      edu !== "" &&
                      degree !== "" &&
                      maxGpa !== "" &&
                      graddt !== undefined
                    ) {
                      validateGpa();
                    }
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
