import React from "react";
import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { InputTextarea } from "primereact/inputtextarea";
import { Chips } from "primereact/chips";
import { Dropdown } from "primereact/dropdown";

import "./ProfilePage.scss";
import {
  primaryRoleSelectItems,
  experience,
  Degree,
} from "../../data/JobRoles";
export default function About() {
  const [user, setUser] = useState("Mohammad Abrar Baqtiyar");
  const [location, setLocation] = useState("");
  const [exp, setExp] = useState(experience);
  const [primaryrole, setPrimaryRole] = useState(primaryRoleSelectItems);
  const [secroles, setSecRoles] = useState([]);
  const [bio, setBio] = useState("");

  return (
    <div>
      <div className="pane-wrapper">
        <div className="left-pane">
          <div className="tw-font-semibold tw-text-black">About</div>
          <div classname="section-description">
            Tell us about yourself so that startups know who you are
          </div>
        </div>

        <div className="right-pane">
          <div
            style={{
              color: "#162040",
              fontSize: "24px",
              fontFamily:
                "Helvetica Neue,arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
              margin: "0px 0px 18px",
            }}
          >
            {user}
          </div>
          <div
            style={{
              display: "flex",
              textAlign: "center",
            }}
          >
            <img
              className="img-style"
              src="https://data.whicdn.com/images/305312729/original.jpg?t=1515972463"
            />

            <div>
              <button className="photo-btn">Upload a new photo</button>
            </div>
          </div>

          <div>
            <label htmlFor="Location">Where are you based</label>
            <div>
              <InputText
                id="Location"
                name="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
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
            <label htmlFor="Primary-Role">Select your Primary Role</label>
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
                onChange={(e) => setSecRoles([...secroles, e.target.value])}
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
          <div className="btns-div">
            <button className="cancel-btn">Cancel</button>
          </div>
          <button
            onClick={() => {
              console.log("save btn clicked");
            }}
            type="button"
            className="blue-btn"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
