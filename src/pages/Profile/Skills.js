import React from "react";
import { useState } from "react";
import { Chips } from "primereact/chips";

export default function Skills() {
  const [skills, setSkills] = useState("");
  return (
    <div>
      <div className="pane-wrapper">
        <div className="left-pane">
          <div className="tw-font-semibold tw-text-black">Your Skills</div>
          <div classname="section-description">
            This will help startups hone in on your strengths.
          </div>
        </div>
        <div className="right-pane">
          <Chips value={skills} onChange={(e) => setSkills(e.value)}></Chips>
        </div>
      </div>
    </div>
  );
}
