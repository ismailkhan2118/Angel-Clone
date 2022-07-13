import React, { useEffect } from "react";
import { useState } from "react";
import { Chips } from "primereact/chips";
import { Dropdown } from "primereact/dropdown";
import axios from "axios";
import { Environment } from "../environment/environment";
import { InputText } from "primereact/inputtext";
import "./Skills.scss"
// https://angel-clone.herokuapp.com/skillSearch
// POST
// {
// search: "<input>"
// }

export default function Skills() {
	const [searchedSkill, setSearchedSkill] = useState("");
	const [skillsList, setSkillsList] = useState([]);
	const [selectedSkills, setSelectedSkills] = useState([]);

	const [showDropdown, setShowDropdown] = useState(false);

	let user_data = localStorage.getItem("user_data");
	let key = JSON.parse(user_data);

	// const updateDropdown = (name) => {
	// 	return [...dropdownSkills, { label: name, value: name }];
	// };

	const displaySkills = (search) => {
		if (search === "") {
			setShowDropdown(false);
			return;
		}
		setShowDropdown(true);
		axios
			.post(
				Environment.BASE_API_URL + "/skillSearch",
				{
					search: search,
				},
				{
					headers: {
						key: key.user.token,
					},
				}
			)
			.then((res) => {
				setSkillsList(res.data);
			})
			.catch((err) => {
				return console.log(err);
			});
	};

	const onSkillSelect = (e) => {
		setShowDropdown(false);
		setSearchedSkill("");
		const id = e.target.dataset.value;
		const foundItem = skillsList.find((item) => item._id == id);
		if (foundItem && !selectedSkills.includes(foundItem.skill_name)) {
			setSelectedSkills((prev) => [...prev, foundItem.skill_name]);
		}
	}

	const onRemoveSkill = (e) => {
		const removed = e.value[0];
		console.log(removed);
		const newState = [...selectedSkills];
		const removeIndex = selectedSkills.findIndex((item) => item === removed);
		console.log(removeIndex);
		if (removeIndex > -1) {
			newState.splice(removeIndex, 1);
			setSelectedSkills(newState);
		}
	}


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
						<Chips
							value={selectedSkills}
							onRemove={onRemoveSkill}
							placeholder="Selected Skills"
						></Chips>
					</div>

					<div className="skill-search">
						<InputText
							type="text"
							placeholder="Insert text here"
							value={searchedSkill}
							onChange={(e) => {
								setSearchedSkill(e.target.value);
								displaySkills(e.target.value);
							}}
						/>
						{showDropdown ?
							<div className="skill-dd">
								{skillsList?.map((skill) => {
									return <div onClick={onSkillSelect} className="dd-option" data-value={skill._id}>{skill.skill_name}</div>;
								})}
							</div>
							: null}
					</div>
				</div>
			</div>
		</>
	);
}
