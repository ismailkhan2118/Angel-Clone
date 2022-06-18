import "primeicons/primeicons.css";

import "./ProfilePage.scss";
import React from "react";
import { useState } from "react";

import { primaryRoleSelectItems, experience, Degree } from "../data/JobRoles";
import { educationCard } from "../components/educationCard";

import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Chips } from "primereact/chips";
import { Dropdown } from "primereact/dropdown";
import { Card } from "primereact/card";

import { TabView, TabPanel } from "primereact/tabview";

import { ToggleButton } from "primereact/togglebutton";
import Overview from "./Overview";

export default function ProfilePage() {
  const [name, setName] = useState("");
  const [edu, setEdu] = useState("");
  const [graddt, setGraddt] = useState("");
  const [user, setUser] = useState("User Name");

  const [exp, setExp] = useState(experience);

  const [primaryrole, setPrimaryRole] = useState(primaryRoleSelectItems);
  const [secroles, setSecRoles] = useState([]);
  const [bio, setBio] = useState("");
  const [lnkid, setLnkid] = useState("");
  const [gthbid, setGthbid] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [degree, setDegree] = useState(Degree);
  const [skills, setSkills] = useState("");
  const [gpa, setGpa] = useState();
  const [maxGpa, setMaxGpa] = useState();

  const [major, setMajor] = useState([{ id: "", oneOfMajors: "" }]);

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

  let gpacheck = true;
  const saveEduDetails = (gpa, maxGpa) => {
    if (gpa > maxGpa) {
      gpacheck = false;
      return (
        <div>
          <p>Gpa cannot</p>
          <p>exceed max</p>
          <p>GPA</p>
        </div>
      );
    } else {
      gpacheck = true;
      return (
        <div>
          <p>gpa is correct</p>
        </div>
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChangeMajorsInput = (i, e) => {
    let newmajors = [...major];
    newmajors[i][e.target.oneOfMajors] = e.target.value;
    setMajor(newmajors);
  };

  const addNewMajorfield = () => {
    setMajor([...major, { id: "", oneOfMajors: "" }]);
  };

  const selectedCountryTemplate = (option, props) => {
    if (option) {
      return (
        <div className="country-item country-item-value">
          <img
            alt={option.name}
            src="images/flag/flag_placeholder.png"
            onError={(e) =>
              (e.target.src =
                "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
            }
            className={`flag flag-${option.code.toLowerCase()}`}
          />
          <div>{option.name}</div>
        </div>
      );
    }

    return <span>{props.placeholder}</span>;
  };

  return (
    <div className="profile-container">
      {/* <h1>Edit your Unicorn List Profile</h1> */}
      <div className="main-container">
        {/* <h1>Edit your Unicorn List Profile</h1> */}
        <form onSubmit={handleSubmit}>
          <TabView
            activeIndex={activeIndex}
            onTabChange={(e) => setActiveIndex(e.index)}
            renderActiveOnly="true"
          >
            <TabPanel header="Overview">
              <Overview></Overview>
            </TabPanel>

            <TabPanel header="Profile">
              {console.log(activeIndex)}

              <section>
                <div className="pane-wrapper">
                  <div className="left-pane">
                    <div className="tw-font-semibold tw-text-black">About</div>
                    <div classname="section-description">
                      Tell us about yourself so that startups know who you are
                    </div>
                  </div>

                  <div className="right-pane">
                    <div>
                      <h1>{user}</h1>
                    </div>

                    <img
                      className="img-style"
                      src="https://data.whicdn.com/images/305312729/original.jpg?t=1515972463"
                    />

                    <div>
                      <label htmlFor="Location">Where are you based</label>
                      <div>
                        <InputText
                          id="Location"
                          name="Location"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="Experience">Experience</label>
                      <div>
                        <Dropdown
                          value={exp}
                          options={experience}
                          onChange={(e) => setExp(e.value)}
                          placeholder="Experience"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="Primary-Role">
                        Select your Primary Role
                      </label>
                      <div>
                        <Dropdown
                          value={primaryrole}
                          options={primaryRoleSelectItems}
                          onChange={(e) => setPrimaryRole(e.value)}
                          optionLabel="label"
                        />
                      </div>
                    </div>

                    <div className="tw-mt-4">
                      <label>open to the Following Roles:</label>
                      <div>
                        <Chips
                          value={secroles}
                          onChange={(e) => setSecRoles(e.value)}
                        ></Chips>
                      </div>

                      <div>
                        <Dropdown
                          value={secroles}
                          options={primaryRoleSelectItems}
                          onChange={(e) =>
                            setSecRoles([...secroles, e.target.value])
                          }
                          optionLabel="label"
                          optionGroupLabel="label"
                          optionGroupChildren="items"
                        />
                      </div>
                    </div>

                    <div>
                      <h3>your Bio</h3>
                    </div>
                    <div>
                      <InputTextarea
                        rows={5}
                        value={bio}
                        placeholder="bio"
                        onChange={(e) => setBio(e.target.value)}
                        autoResize
                      />
                    </div>
                  </div>
                </div>
              </section>

              <hr></hr>
              <section>
                <div className="pane-wrapper">
                  <div className="left-pane">
                    <div className="tw-font-semibold tw-text-black">
                      Social Profiles
                    </div>
                    <div classname="section-description">
                      Where can people find you online
                    </div>
                  </div>
                  <div className="right-pane">
                    <div>
                      <i className="pi pi-linkedin"></i>
                      <label htmlFor="lnkid" className="txt">
                        Linked in
                      </label>
                    </div>
                    <div>
                      <InputTextarea
                        className="input-container"
                        rows={1}
                        cols={35}
                        id="lnkid"
                        name="lnkid"
                        value={lnkid}
                        placeholder="https://www.linkedin.com/username"
                        onChange={(e) => setLnkid(e.target.value)}
                        autoResize
                      />
                    </div>
                    <div>
                      <i className="pi pi-github"></i>
                      <label htmlFor="lnkid" className="txt">
                        GitHub
                      </label>
                    </div>
                    <div>
                      <InputTextarea
                        className="input-container"
                        rows={1}
                        cols={35}
                        id="gthbid"
                        name="gthbid"
                        value={gthbid}
                        placeholder="https://www.github.com/username"
                        onChange={(e) => setGthbid(e.target.value)}
                        autoResize
                      />
                    </div>
                  </div>
                </div>
              </section>
              <hr></hr>
              <section>
                <div className="pane-wrapper">
                  <div className="left-pane">
                    <div className="tw-font-semibold tw-text-black">
                      Your Work Experience
                    </div>
                    <div classname="section-description">
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
                        type="checkbox"
                        value={prevcmpnyinfo.currentlyWorkHere}
                        onChange={(e) =>
                          setPrecmpnyinfo({
                            ...prevcmpnyinfo,
                            currentlyWorkHere: !prevcmpnyinfo.currentlyWorkHere,
                          })
                        }
                      />
                    </div>
                    <div>
                      <label htmlFor="crntlywrkhere">currentlyWorkHere</label>
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
                    <div>
                      <Button> Cancel</Button>
                      <Button label="Save" style={{ marginLeft: "4em" }} />
                    </div>
                  </div>
                </div>
              </section>
              <hr></hr>
              <section>
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
                    <div>
                      <div>
                        <educationCard></educationCard>
                      </div>
                      <label htmlFor="Edu">Education</label>
                      <span>
                        <InputText
                          id="Edu"
                          placeholder="College/University"
                          name="Edu"
                          value={edu}
                          onChange={(e) => setEdu(e.target.value)}
                        />
                      </span>
                      <span>
                        <Button
                          label="Proceed"
                          onClick={(e) => {
                            setEdu("");
                          }}
                          className="p-button-raised p-button-rounded p-button-secondary"
                        />
                        {console.log(edu)}
                      </span>
                    </div>
                    <div>
                      <label htmlFor="endgraddt">Graduation</label>
                    </div>
                    <div>
                      <Calendar
                        id="endgraddt"
                        name="endgraddt"
                        placeholder="Graduation"
                        value={graddt}
                        onChange={(e) => setGraddt(e.target.value)}
                      ></Calendar>
                    </div>
                    <div>
                      <label htmlFor="degree">Degree and Major</label>
                    </div>
                    <div>
                      <Dropdown
                        id="degree"
                        value={degree}
                        options={Degree}
                        onChange={(e) => setDegree(e.value)}
                        placeholder="Degree Type"
                      />
                    </div>
                    {/* <div>
                      <InputText
                        id="major"
                        name="major"
                        value={major}
                        placeholder="Major/Fiels of Study"
                        onChange={(e) => setMajor(e.value)}
                      />
                    </div> */}

                    {major.map((element, index) => {
                      return (
                        <div key={index}>
                          <input
                            key={index}
                            type="text"
                            placeholder="Major/Field of Study"
                            value={element.oneOfMajors || ""}
                            onChange={(e) => handleChangeMajorsInput(index, e)}
                          />
                        </div>
                      );
                    })}

                    <div>
                      <Button
                        type="button"
                        label="+Add Major"
                        onClick={() => addNewMajorfield()}
                      />
                      <div>
                        <label>GPA</label>
                      </div>
                      <div>
                        <span>
                          <InputText
                            classname="GPA-class"
                            type="text"
                            placeholder="GPA"
                            value={gpa}
                            onChange={(e) => setGpa(e.value)}
                          />
                        </span>
                        {console.log(gpa)}

                        <span>
                          <InputText
                            className="GPA-class"
                            type="text"
                            placeholder="Max"
                            value={maxGpa}
                            onChange={(e) => {
                              setMaxGpa(e.value);
                            }}
                          />
                        </span>
                      </div>
                      <div>
                        <span>
                          <button
                            className="blue-btn"
                            onClick={saveEduDetails(gpa, maxGpa)}
                          >
                            Save
                          </button>
                        </span>
                        <span>
                          <button className="cancel-btn">Cancel</button>
                        </span>
                      </div>
                      {console.log(major)}
                    </div>
                  </div>
                </div>
              </section>
              <hr></hr>
              <section>
                <div className="pane-wrapper">
                  <div className="left-pane">
                    <div className="tw-font-semibold tw-text-black">
                      Your Skills
                    </div>
                    <div classname="section-description">
                      This will help startups hone in on your strengths.
                    </div>
                  </div>
                  <div className="right-pane">
                    <Chips
                      value={skills}
                      onChange={(e) => setSkills(e.value)}
                    ></Chips>
                    {/* <InputText
                      type="text"
                      placeholder="e.g. Python,React"
                      value={skills}
                      onChange={(e) => setSkills(e.value)}
                      onSubmit={(e) => setSkills(e.value)}
                      
                    /> */}

                    {/* <Dropdown
                      value={selectedCountry}
                      options={countries}
                      onChange={(e) => setSelectedCountry(e.value)}
                      optionLabel="name"
                      filter
                      showClear
                      filterBy="name"
                      placeholder="Select a Country"
                      itemTemplate={countryOptionTemplate}
                    /> */}
                  </div>
                </div>
              </section>
              <hr></hr>
              <section>
                <div className="pane-wrapper">
                  <div className="left-pane">
                    <div
                      className="tw-font-semibold tw-text-black"
                      color="#162040"
                    >
                      Achievments
                    </div>
                    <div classname="section-description">
                      Sharing more details about yourself will help you stand
                      out more.
                    </div>
                  </div>
                  <div className="right-pane">
                    <div className="achiev-span">1000</div>
                    <InputTextarea rows={8}>
                      "It's OK to brag - e.g. I launched 3 successful Facebook
                      apps which in total reached 2M+ users and generated $100k+
                      in revenue. I built everything from the front-end to the
                      back-end and everything in between.
                    </InputTextarea>
                  </div>
                </div>
              </section>

              {/* {console.log(prevcmpnyinfo.description)}
              {console.log(prevcmpnyinfo.skillsUsed)} */}

              {name}
            </TabPanel>
          </TabView>
        </form>
      </div>
    </div>
  );
}
