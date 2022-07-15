import React, { useEffect, useState } from "react";
import "./LoginPageForm.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { loginAction } from "../store/auth-state";
import { useDispatch, useSelector } from "react-redux";

function LoginPageForm(props) {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const userData = useSelector((state) => state.auth);

	useEffect(() => {
		let auth_data = localStorage.getItem("user_data");
		if (auth_data) {
			auth_data = JSON.parse(auth_data);
			if (auth_data.isAuthenticated) {
				navigate("/home/profile");
			}
		} else if (!userData.pending && userData.isAuthenticated) {
			localStorage.setItem("user_data", JSON.stringify(userData));
			navigate("/home/profile");
		}
	}, [userData]);

	const loginHandler = () => {
		dispatch(
			loginAction({
				email: email,
				password: password,
			})
		);
	};

	return (
		<div className="login-page-form-container">
			<div className="login-h1-div">
				<img
					src={
						"https://angel.co/assets/shared/angellist_logo_hand-242554a1b6fa9f574f4ee1488f18d011b3066c90989f8320c15961aedaada679.svg"
					}
					alt="anglelistlogo"
				/>
				<h1 className="login-h1">Login</h1>
				<p>Find the job made for you !</p>
			</div>
			<div className="login-input-div">
				<input
					className="login-input"
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				></input>
				<input
					className="login-input"
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				></input>
				<button className="login-btn" onClick={loginHandler}>
					Login
				</button>
			</div>
			<div className="login-signup-div">
				<p>
					<b>Not Registerd ? </b>{" "}
				</p>
				<NavLink to="/signup">Create an Account</NavLink>
			</div>
		</div>
	);
}

export default LoginPageForm;
