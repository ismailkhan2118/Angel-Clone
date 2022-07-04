import React from "react";
import "./CompanyCard.scss";

export default function CompanyCard(props) {
  // const {
  //   companyName,
  //   title,
  //   startDate,
  //   endDate,
  //   currentlyWorkHere,
  //   description,
  //   typeOfPosition,
  //   workedOn,
  //   skillsUsed,
  // } = props;
  const startDt = props.companyInfo.startDate;
  const endDt = props.companyInfo.endDate;
  console.log(props.companyInfo.companyName);
  const a = "Present";

  return (
    <div>
      <div>{props.companyInfo.title}</div>
      <div style={{ color: "#0A6CFF" }}>{props.companyInfo.companyName}</div>
      <div style={{ color: "#717584" }}>
        {new Date(startDt).toDateString()} {" to "}
        {props.companyInfo.currentlyWorkHere === true
          ? a
          : new Date(endDt).toDateString()}
      </div>
      {console.log(props.companyInfo.currentlyWorkHere)}
      <div>{props.companyInfo.description}</div>
      <div>{props.companyInfo.companyId}</div>
    </div>
  );
}
