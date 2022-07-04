import React from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { useState } from "react";

export default function Achievments() {
  const [achiev, setAcheiv] = useState("");
  return (
    <div>
      <div className="pane-wrapper">
        <div className="left-pane">
          <div className="tw-font-semibold tw-text-black" color="#162040">
            Achievments
          </div>
          <div classname="section-description">
            Sharing more details about yourself will help you stand out more.
          </div>
        </div>
        <div className="right-pane">
          <div className="achiev-span">1000</div>
          <InputTextarea
            rows={8}
            placeholder="It's OK to brag - e.g. I launched 3 successful Facebook
                      apps which in total reached 2M+ users and generated $100k+
                      in revenue. I built everything from the front-end to the
                      back-end and everything in between."
            value={achiev}
            onChange={(e) => {
              setAcheiv(e.target.value);
            }}
          ></InputTextarea>
        </div>
      </div>
    </div>
  );
}
