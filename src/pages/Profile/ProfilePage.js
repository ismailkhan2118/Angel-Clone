import "primeicons/primeicons.css";

import "./ProfilePage.scss";
import React from "react";
import { useState, useEffect } from "react";

import { TabView, TabPanel } from "primereact/tabview";

import Overview from "../Overview";
import About from "./About.js";
import SocialProfiles from "./SocialProfiles";
import WorkExp from "./WorkExp";
import Education from "./Education";
import Skills from "../../components/Skills";
import Achievments from "./Achievments";

export default function ProfilePage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="profile-container">
      <div className="main-container">
        <form onSubmit={handleSubmit}>
          <TabView
            activeIndex={activeIndex}
            onTabChange={(e) => setActiveIndex(e.index)}
            renderActiveOnly="true"
          >
            <TabPanel header="Overview">
              <Overview></Overview>
            </TabPanel>

            <TabPanel header="Profile">
              <section>
                <About></About>
              </section>
              <hr></hr>

              <section>
                <SocialProfiles></SocialProfiles>
              </section>
              <hr></hr>

              <section>
                <WorkExp></WorkExp>
              </section>
              <hr></hr>

              <section>
                <Education></Education>
              </section>
              <hr></hr>

              <section>
                <Skills></Skills>
              </section>
              <hr></hr>

              <section>
                <Achievments></Achievments>
              </section>
            </TabPanel>
          </TabView>
        </form>
      </div>
    </div>
  );
}
