import "primeicons/primeicons.css";

import "./ProfilePage.scss";
import React from "react";
import { useState } from "react";

import { primaryRoleSelectItems } from "../data/JobRoles";
import { experience } from "../data/JobRoles";

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
		<div className="profile-container">
			<div className="main-container">
				<h1>Edit your Unicorn List Profile</h1>

				<form>
					<div>
						<h1>{user}</h1>
					</div>

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
											<label htmlFor="Location" className="txt">
												Where are you based
											</label>
											<div>
												<InputText
													className="input-container"
													id="Location"
													name="Location"
													value={name}
													onChange={(e) => setName(e.target.value)}
												/>
											</div>
										</div>
										<div>
											<label htmlFor="Experience" className="txt">
												Experience
											</label>
											<div>
												<Dropdown
													className="input-container"
													value={exp}
													options={experience}
													onChange={(e) => setExp(e.value)}
													placeholder="Experience"
												/>
											</div>
										</div>
										<div>
											<label htmlFor="Primary-Role" className="txt">
												Select your Primary Role
											</label>
											<div>
												<Dropdown
													className="input-container"
													value={primaryrole}
													options={primaryRoleSelectItems}
													onChange={(e) => setPrimaryRole(e.value)}
													optionLabel="label"
													optionGroupLabel="label"
													optionGroupChildren="items"
												/>
											</div>
										</div>

										<div className="tw-mt-4">
											<label className="txt">open to the Following Roles:</label>
											<div>
												<Chips
													className="chips-input"
													value={secroles}
													onChange={(e) => setSecRoles(e.value)}
												></Chips>
											</div>

											<div>
												<Dropdown
													className="input-container"
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
											<h3 className="txt">your Bio</h3>
										</div>
										<div>
											<InputTextarea
												className="input-container"
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
								<h2 className="txt">Social Profiles</h2>

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
							</section>
							<hr></hr>
							<section>
								<Card>
									<div>
										<h2 className="txt">Your Work Experience</h2>
									</div>
									<div>
										<label htmlFor="prevcmpnyname" className="txt">
											Company Name
										</label>
									</div>
									<div>
										<InputText
											// className="input-container"
											className="p-float-label"
											id="prevcmpnyname"
											name="prevcmpnyname"
											value={prevcmpnyinfo.companyName}
											onChange={(e) => setPrecmpnyinfo(e.target.value)}
										/>
									</div>
									<div>
										<label htmlFor="prevcmpnytitle" className="txt">
											Title
										</label>
									</div>
									<div>
										<InputText
											className="input-container"
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
										<label htmlFor="strtcal" className="txt">
											Start Date
										</label>
									</div>
									<div>
										<Calendar
											className="input-container"
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
										<label htmlFor="endcal" className="txt">
											End Date
										</label>
									</div>
									<div>
										<Calendar
											className="input-container"
											id="endcal"
											name="endcal"
											value={prevcmpnyinfo.endDate}
											onChange={(e) =>
												setPrecmpnyinfo({ ...prevcmpnyinfo, endDate: e.value })
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
										<label htmlFor="crntlywrkhere">currentlyWorkHere</label>
									</div>
									{console.log(prevcmpnyinfo.currentlyWorkHere)}
									<div>
										<label htmlFor="descr">Description</label>
									</div>
									<div>
										<InputTextarea
											className="input-container"
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
											className="input-container"
											value={prevcmpnyinfo.skillsUsed}
											onChange={(e) =>
												setPrecmpnyinfo({
													...prevcmpnyinfo,
													skillsUsed: e.target.value,
												})
											}
										></Chips>
									</div>
									<Button
										label="Cancel"
										className="p-button-secondary"
										style={{ marginLeft: "5em" }}
									/>
									<Button label="Save" style={{ marginLeft: "4em" }} />
								</Card>
							</section>
							<section>
								<Card>
									<div>
										<label htmlFor="Edu">Education</label>
									</div>
									<div>
										<span>
											<InputText
												className="input-container"
												id="Edu"
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
										<label htmlFor="graddt">Graduation</label>
									</div>
									<div>
										<Calendar
											className="input-container"
											id="endgraddt"
											name="endgraddt"
											value={graddt}
											onChange={(e) => setGraddt(e.target.value)}
										></Calendar>
									</div>
									<div>
										<label>Degree and Major</label>
									</div>
								</Card>
							</section>

							{console.log(prevcmpnyinfo.description)}
							{console.log(prevcmpnyinfo.skillsUsed)}

							{name}
						</TabPanel>
					</TabView>
				</form>
			</div>
		</div>
	);
}
