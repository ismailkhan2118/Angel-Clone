import React, { useEffect } from "react";
import { useState } from "react";
import { Chips } from "primereact/chips";
import { Dropdown } from "primereact/dropdown";
import axios from "axios";
import { Environment } from "../environment/environment";

// https://angel-clone.herokuapp.com/skillSearch
// POST
// {
// search: "<input>"
// }

export default function Skills() {
  const [skills, setSkills] = useState("");
  const [skillsFromApi, setSkillsFromApi] = useState([]);
  const [dropdownSkills, setDropdownSkills] = useState([
    { label: "", value: "" },
  ]);
  let user_data = localStorage.getItem("user_data");
  let key = JSON.parse(user_data);

  const updateDropdown = (name) => {
    return [...dropdownSkills, { label: name, value: name }];
  };

  const displaySkills = (a) => {
    axios
      .post(
        Environment.BASE_API_URL + "/skillSearch",
        {
          search: a,
        },
        {
          headers: {
            key: key.user.token,
          },
        }
      )
      .then((resp) => {
        console.log("this is resp.data", resp.data);
        console.log("this is type of resp.data", typeof resp.data);

        setSkillsFromApi(resp.data);

        console.log("inside  then value of setskillsfromapi ", skillsFromApi);
        console.log("this is the first elements", resp.data[0].skill_name);

        // resp.data.forEach((element) => {
        //   setdropdownSkills([...dropdownSkills, element.skill_name]);
        //   console.log("this is in for loop", element.skill_name);
        // });
        // console.log("this is theee dropdownSkills", dropdownSkills);
        // console.log("this is skills from api", dropdownSkills);

        // resp.data.forEach((obj) => {
        //   // console.log(obj.skill_name);
        //   setdropdownSkills([...dropdownSkills, obj.skill_name]);
        //   // setdropdownSkills();
        //   // dropdownSkills.push(obj.skill_name);
        //   // console.log("these are the skills obtained from api", dropdownSkills);

        //   // setSkills(obj.skill_name);
        //   // updateDropdown(obj.skill_name);
        //   console.log("this is show skills", dropdownSkills);
        // });
        // resp.data.forEach((obj) => {
        //   setdropdownSkills([...dropdownSkills, obj.skill_name]);
        // });

        // setSkills("");
      })
      .catch((err) => {
        return console.log(err);
      });

    setDropdownSkills(skillsFromApi);
    console.log("this is dropdownskills", dropdownSkills);
    console.log("this is skills from the api", skillsFromApi);
  };
  // };

  return (
    <>
      <div className="pane-wrapper">
        <div className="left-pane">
          <div className="tw-font-semibold tw-text-black">Your Skills</div>
          <div className="section-description">
            This will help startups hone in on your strengths.
          </div>
        </div>
        <div className="right-pane">
          <div>
            <select>
              {skillsFromApi?.map((skill) => {
                return <option value={skill._id}>{skill.skill_name}</option>;
              })}
            </select>
          </div>

          <div>
            <input
              type="text"
              placeholder="insert text here"
              value={skills}
              onChange={(e) => {
                setSkills(e.target.value);
                displaySkills(e.target.value);
                // } else {
                //   displaySkills(e.target.value);
              }}
            />
          </div>
          {/* <div>
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
            /> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
}
