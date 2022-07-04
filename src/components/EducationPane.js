import React from "react";
import "./EducationPane.scss";

function EducationPane(props) {
  const { edu, ugMajor, degree, gpa, maxGpa, saveEdu, graddt } = props;

  return (
    <div className="edu-card">
      <div>
        <div>{edu}</div>
        <div>
          {ugMajor},{degree}
        </div>

        <div>
          {gpa}/{maxGpa} GPA
        </div>

        <div style={{ color: "#717584" }}>{graddt}</div>
        <div>{saveEdu}</div>
      </div>
    </div>
  );
}

export default EducationPane;
