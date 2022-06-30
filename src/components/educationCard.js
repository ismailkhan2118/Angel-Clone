import React from "react";
import "./EducationCard.scss";

function educationCard(props) {
  const { edu, saveEdu } = props;

  return (
    <div className="edu-card">
      <div>{edu}</div>
      <div>
        {/* <button
          onClick={() => {
            saveEdu(false);
          }}
        >
          {" "}
          Edit
        </button> */}
      </div>
      educationCard
    </div>
  );
}

export default educationCard;
