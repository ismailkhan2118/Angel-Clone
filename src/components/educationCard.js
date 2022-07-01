import React from "react";
import "./EducationCard.scss";

function educationCard(props) {
  // const { edu, ugMajor, degree, gpa, maxGpa, saveEdu } = props;

  return (
    <div className="edu-card">
      <div>
        <div>{props.edu}</div>
        <div>
          {props.ugMajor},{props.degree}
        </div>

        <div>
          {props.gpa}/{props.maxGpa} GPA
        </div>

        <div style={{ color: "#717584" }}>{props.graddt}</div>
        <div>{props.saveEdu}</div>
      </div>
    </div>
  );
}

export default educationCard;
