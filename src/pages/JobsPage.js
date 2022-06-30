import "./JobsPage.scss";

import { Chips } from "primereact/chips";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import JobsCard from "../components/JobsCard";
import { Button } from "primereact/button";
import Filterimg from "../assets/filter-img.png"
import Microsoftimg from "../assets/microsoft.png"
import Amazonimg from "../assets/Amazon_icon.png"
import Appleimg from "../assets/apple-black-logo.png"
import Netfliximg from "../assets/netflix.png"
import Googleimg from "../assets/google.png"

import { Dialog } from "primereact/dialog";
import JobsModal from "../components/JobsModal";

function JobsPage() {

  const [displayBasic2, setDisplayBasic2] = useState(false);
  const [value, setValue] = useState([]);
  const [position, setPosition] = useState("center");
  const dialogFuncMap = { displayBasic2: setDisplayBasic2 };
  const [arr, searr] = useState([<JobsCard />])

  const onClick = (name, position) => {
    dialogFuncMap[`${name}`](true);

    if (position) {
      setPosition(position);
    }
  };

  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  };

  const renderFooter = (name) => {
    return (
      <div>
        <Button
          label="No"
          icon="pi pi-times"
          onClick={() => onHide(name)}
          className="p-button-text"
        />
        <Button
          label="Yes"
          icon="pi pi-check"
          onClick={() => onHide(name)}
          autoFocus
        />
      </div>
    );
  };
  const cardArray = [{
    id: "a",
    coimg: `${Microsoftimg}`,
    coname: "Microsoft ",
    codescription: "We  Are Looking For Candidates who's CGPA >8",
    corole: "Software Enginer",
    colocation: "Mumbai",
    cosalary: "$3000 to 9000$ "
  },
  {
    id: "b",
    coimg: `${Amazonimg}`,
    coname: "Amazon ",
    codescription: "We  Are Looking For Candidates who is capable of solving hard problem in < 45 min C",
    corole: "UI/UX Engineer",
    colocation: "Hyderabad",
    cosalary: "$80000 to 90000$  "
  }, {
    id: "c",
    coimg: `${Appleimg}`,

    coname: "Apple",
    codescription: "We  Are Looking For Candidates who are rare and talented in every field",
    corole: "Data Engineer",
    colocation: "Our Wish",
    cosalary: "$13000 to 19000$ "
  }, {
    id: "d",
    coimg: `${Netfliximg}`,

    coname: "NetFlix",
    codescription: "We  Are Looking For Candidates who are  capable of analyzing data of people",
    corole: "Fulltime",
    colocation: "US-San Fransico",
    cosalary: "$30000 to 90000$ "
  }, {
    id: "e",
    coimg: `${Googleimg}`,

    coname: "Gooogle",
    codescription: "We  Are Looking For Candidates who is a solutionist ",
    corole: "Life time",
    colocation: "Remote",
    cosalary: "$3000 to 9000$ "
  }]

  return (
    <div className="jobs-page-container">
      <div className="jobs-h1-div">
        <h1 className="jobs-h1">Search For Jobs</h1>
      </div>
      <nav className="jobs-nav">
        <span>Browse all</span>
        <span>Saved</span>
      </nav>
      <div className="jobs-filters-div">
        <div className="chips">

          <Chips
            className="jobs-title-chip"
            value={value}
            onChange={(e) => setValue(e.value)}
            placeholder="Add a job title"
          ></Chips>


        </div>
        <div
          className="filter-logo-btn"
          onClick={() => onClick("displayBasic2")}
        >
          <img
            className="img-filter"
            src={Filterimg}
            alt="img-filter"
          />

          <button className="filter-btn"> Filters</button>
        </div>
      </div>

      {/* <Button label="Long Content" icon="pi pi-external-link" onClick={() => onClick('displayBasic2')} /> */}
      <Dialog
        dismissableMask={true}
        className="dialog-page"
        header="Apply Filters"
        visible={displayBasic2}
        footer={renderFooter("displayBasic2")}
        onHide={() => onHide("displayBasic2")}
      >
        <JobsModal></JobsModal>
      </Dialog>

      {cardArray.map((data, id) => {
        return (<JobsCard
          key={id}
          coimg={data.coimg}
          coname={data.coname}
          codescription={data.codescription}
          colocation={data.colocation}
          corole={data.corole}
          cosalary={data.cosalary}
        ></JobsCard>)
      })}
    </div>
  );
}
export default JobsPage;
