import React from "react";
import "./ProfilePage.scss";
import { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";

export default function SocialProfiles() {
	const [lnkid, setLnkid] = useState("");
	const [gthbid, setGthbid] = useState("");
	return (
		<div>
			<div className="pane-wrapper">
				<div className="left-pane">
					<div className="tw-font-semibold tw-text-black">Social Profiles</div>
					<div className="section-description">
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
		</div>
	);
}
