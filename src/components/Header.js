import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout } from "../store/auth-state";

import "./Header.scss";
function Header() {

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const userData = useSelector(state => state.auth)

	const logoutUser = () => {
		localStorage.removeItem('user_data')
		dispatch(logout());
	}

	useEffect(() => {
		console.log(userData);
		if (!userData.isAuthenticated) {
			navigate('/')
		}
	}, [userData])

	return (
		<div className="header-div">
			<div className="header-content-div">
				<div className="angel-list-img-div">
					<img className="angel-list-img" src="https://angel.co/images/logo/AngelList_Black_Lockup.png" alt="angleimg" />
				</div>
				<div className="drop-down-img">
					<select>
						<option value="Ready To interview" selected>Ready To interview  </option>
						<option>Open To Offer</option>
						<option>Close To Offers</option>
					</select>
					<button onClick={logoutUser}>Logout</button>
					<div className="img-div">
						<img alt="kakashi" className="header-img" src="https://everydaypower.com/wp-content/uploads/2021/04/50-Kakashi-Quotes-From-The-Popular-Manga-Character.jpg" /></div>
				</div>
			</div>
		</div >
	)

}
export default Header;
