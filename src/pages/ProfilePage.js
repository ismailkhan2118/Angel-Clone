import "primeicons/primeicons.css";
import "./ProfilePage.scss";
import React from "react";
import { useState } from "react";

import { InputText } from "primereact/inputtext";

import { Calendar } from "primereact/calendar";

import { InputTextarea } from "primereact/inputtextarea";

import { Chips } from "primereact/chips";
import { Dropdown } from "primereact/dropdown";

export default function ProfilePage() {
    const [name, setName] = useState("");

    const experience = [
        { label: "0", value: "" },
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" },
        { label: "4+", value: "4+" },
    ];

    const [exp, setExp] = useState(experience);
    const primaryRoleSelectItems = [
        {
            label: "Engineering",
            code: "ENG",
            items: [
                { label: "Software Engineer", value: "SE" },
                { label: "Mobile Developer", value: "MOBDEV" },
                { label: "Android Developer", value: "ANDDEV" },
                { label: "iOS Developer", value: "IOS" },
                { label: "Frontend Engineer", value: "FREDEV" },
                { label: "Backend Engineer", value: "BCKDEV" },
                { label: "FullStack Engineer", value: "FSTCKENG" },
                { label: "DevOps", value: "DEVOP" },
            ],
        },
        {
            label: "Designer",
            code: "DSGNR",
            items: [
                { label: "UI/UX Designer", value: "UIUX" },
                { label: "Graphic Designer", value: "GRPDSGNR" },
                { label: "Product Designer", value: "PRDDSGNR" },
            ],
        },
        {
            label: "Operations",
            code: "OPRTNS",
            items: [
                { label: "Finance/Accounting", value: "FIN" },
                { label: "H.R", value: "HR" },
                { label: "Customer Service", value: "CSTMSRV" },
                { label: "Operations Manager", value: "OPMNGR" },
            ],
        },
    ];

    const [primaryrole, setPrimaryRole] = useState(primaryRoleSelectItems);
    const [secroles, setSecRoles] = useState([]);
    const [bio, setBio] = useState("");
    const [lnkid, setLnkid] = useState("");
    const [gthbid, setGthbid] = useState("");
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
            <h1>Edit your AngelClone Profile</h1>

            <form>
                <div>
                    <label htmlFor="Location" className="txt">
                        Where are you based
                    </label>
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
                    <label htmlFor="Experience" className="txt">
                        Experience
                    </label>
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
                    <label htmlFor="Primary-Role" className="txt">
                        Select your Primary Role
                    </label>
                    <div>
                        <Dropdown
                            value={primaryrole}
                            options={primaryRoleSelectItems}
                            onChange={(e) => setPrimaryRole(e.value)}
                            optionLabel="label"
                            optionGroupLabel="label"
                            optionGroupChildren="items"
                        />
                    </div>
                </div>
                <div>
                    <label className="txt">open to the Following Roles:</label>
                    <Dropdown
                        value={secroles}
                        options={primaryRoleSelectItems}
                        onChange={(e) => setSecRoles([...secroles, e.target.value])}
                        optionLabel="label"
                        optionGroupLabel="label"
                        optionGroupChildren="items"
                    />
                </div>
                {console.log(secroles)}
                <div>
                    {secroles.map((e) => {
                        <Chips
                            className="txt"
                            value={secroles}
                            onChange={(e) => setSecRoles(e.value)}
                        ></Chips>;
                    })}
                    <Chips
                        className="txt"
                        value={secroles}
                        onChange={(e) => setSecRoles(e.value)}
                    ></Chips>
                </div>
                <div>
                    <h3 className="txt">your Bio</h3>
                </div>
                <div>
                    <InputTextarea
                        rows={5}
                        cols={35}
                        value={bio}
                        placeholder="bio"
                        onChange={(e) => setBio(e.target.value)}
                        autoResize
                    />
                </div>
                <hr></hr>
                <h2 className="txt">Social Profiles</h2>

                <div>
                    <i className="pi pi-linkedin"></i>
                    <label htmlFor="lnkid" className="txt">
                        Linked in
                    </label>
                </div>
                <div>
                    <InputTextarea
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
                <hr></hr>
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
                        id="prevcmpnytitle"
                        name="prevcmpnytitle"
                        value={prevcmpnyinfo.title}
                        onChange={(e) =>
                            setPrecmpnyinfo({ ...prevcmpnyinfo, title: e.target.value })
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
                        id="strtcal"
                        name="strtcal"
                        value={prevcmpnyinfo.startDate}
                        onChange={(e) =>
                            setPrecmpnyinfo({ ...prevcmpnyinfo, startDate: e.value })
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
                        rows={5}
                        cols={35}
                        value={prevcmpnyinfo.description}
                        placeholder="Description"
                        onChange={(e) =>
                            setPrecmpnyinfo({ ...prevcmpnyinfo, description: e.target.value })
                        }
                        autoResize
                    />
                </div>
                <div>
                    <label htmlFor="skilsusd">Skills developed</label>
                </div>
                <div>
                    <Chips
                        className="txt"
                        value={prevcmpnyinfo.skillsUsed}
                        onChange={(e) =>
                            setPrecmpnyinfo({ ...prevcmpnyinfo, skillsUsed: e.target.value })
                        }
                    ></Chips>
                </div>
                {console.log(prevcmpnyinfo.description)}
                {console.log(prevcmpnyinfo.skillsUsed)}

                {name}
            </form>
        </div>
    );
}