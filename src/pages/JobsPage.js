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

      <JobsCard></JobsCard>
      <JobsCard></JobsCard>
      <JobsCard></JobsCard>
    </div>
  );
}
export default JobsPage;
