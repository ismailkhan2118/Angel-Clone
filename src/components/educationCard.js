import React from 'react';
import "./educationCard.scss"

function EducationCard(props) {
  return (
    <div>
      <div className="edu-card">
        <div>{props.edu}</div>
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

    </div>
  );
}

export default EducationCard;