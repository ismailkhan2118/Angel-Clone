import "./JobsPage.scss";

import { Chips } from "primereact/chips";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import JobsCard from "../components/JobsCard";
import { Button } from "primereact/button";

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
    coimg: "https://cdn.pixabay.com/photo/2013/02/12/09/07/microsoft-80660__340.png",
    coname: "Microsoft ",
    codescription: "We  Are Looking For Candidates who's CGPA >8",
    corole: "Software Enginer",
    colocation: "Mumbai",
    cosalary: "$3000 to 9000$ "
  },
  {
    id: "b",
    coimg: "https://press.aboutamazon.com/system/files-encrypted/nasdaq_kms/inline-images/Amazon-logo.jpg",
    coname: "Amazon ",
    codescription: "We  Are Looking For Candidates who is capable of solving hard problem in < 45 min C",
    corole: "UI/UX Engineer",
    colocation: "Hyderabad",
    cosalary: "$80000 to 90000$  "
  }, {
    id: "c",
    coimg: "https://scontent.fhyd2-2.fna.fbcdn.net/v/t1.6435-9/109764302_3289428621149720_6353557589794353911_n.png?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ah7kPrrR8m0AX-RMkGT&_nc_ht=scontent.fhyd2-2.fna&oh=00_AT9vthwCnQpQJlx5-2PncoI6XRpLh48cKFUdrPWFhET0Dw&oe=62D2F999",
    coname: "Apple",
    codescription: "We  Are Looking For Candidates who are rare and talented in every field",
    corole: "Data Engineer",
    colocation: "Our Wish",
    cosalary: "$13000 to 19000$ "
  }, {
    id: "d",
    coimg: "https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI",
    coname: "NetFlix",
    codescription: "We  Are Looking For Candidates who are  capable of analyzing data of people",
    corole: "Fulltime",
    colocation: "US-San Fransico",
    cosalary: "$30000 to 90000$ "
  }, {
    id: "e",
    coimg: "https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515358_10512.png",
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
            src="https://cdn-icons.flaticon.com/png/512/2516/premium/2516722.png?token=exp=1653922188~hmac=26eb89c7ff5b3841b5ed12949cfc69c2"
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

      {cardArray.map((data) => {
        return (<JobsCard
          key={data.id}
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
