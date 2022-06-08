import React, { useState } from "react";
import "./Overview.scss";

export default function Overview() {
  const [profilename, setProfilename] = useState("Mr.Mohammad");
  const [country, setCountry] = useState("India");
  return (
    <main>
      <div className="main-container">
        <section className="profile-details">
          <div className="img-style2">
            <img
              src="https://data.whicdn.com/images/305312729/original.jpg?t=1515972463"
              alt="image not found"
            />
          </div>
          <div>{profilename}</div>
          <div></div>
        </section>
      </div>
    </main>
  );
}
