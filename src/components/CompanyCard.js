import React from "react";
import "./CompanyCard.scss";

export default function CompanyCard(...props) {
  const {
    companyName,
    title,
    startDate,
    endDate,
    currentlyWorkHere,
    description,
    typeOfPosition,
    workedOn,
    skillsUsed,
  } = props;
  console.log(companyName);

  return <div></div>;
}
