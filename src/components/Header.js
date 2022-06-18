import React from "react";

import "./Header.scss";
function Header() {
  return (
    <div className="header-div">
      <div className="header-content-div">
        <div className="angel-list-img-div">
          <img
            className="angel-list-img"
            src="https://angel.co/images/logo/AngelList_Black_Lockup.png"
            alt="angleimg"
          />
        </div>
        <div className="drop-down-img">
          <select>
            <option value="Ready To interview" selected>
              Ready To interview{" "}
            </option>
            <option>Open To Offer</option>
            <option>Close To Offers</option>
          </select>
          <div className="img-div">
            <img
              alt="kakashi"
              classname="header-img"
              src="https://everydaypower.com/wp-content/uploads/2021/04/50-Kakashi-Quotes-From-The-Popular-Manga-Character.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
