import React, { useEffect, useState } from "react";
import "./SignUpForm.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { signupAction } from "../store/auth-state";
import { useDispatch, useSelector } from "react-redux";

function SignUpPageForm(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
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

  const signupHandler = () => {
    dispatch(
      signupAction({
        fullName: fullName,
        email: email,
        password: password,
      })
    );
  };

  return (
    <div className="singupform-container">
      <div className="signup-h1-div">
        <img
          src={
            "https://angel.co/assets/shared/angellist_logo_hand-242554a1b6fa9f574f4ee1488f18d011b3066c90989f8320c15961aedaada679.svg"
          }
          alt="anglelistlogo"
        />
        <h1 className="signup-h1">Create Account</h1>
        <p>Find your next opportunity !</p>
      </div>
      <div className="signup-input-div">
        <label htmlFor="fullname">Full Name</label>
        <input
          id="fullname"
          className="signup-input"
          type="text"
          placeholder=" enter text"
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);
          }}
        ></input>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          className="signup-input"
          type="email"
          placeholder="   Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          className="signup-input"
          type="password"
          placeholder="   Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <button className="signup-btn" onClick={signupHandler}>
          SignUp
        </button>
      </div>
      <div className="login-signup-div">
        <p>
          <b>Already have an Account ? </b>{" "}
        </p>
        <NavLink to="/login">Log in </NavLink>
      </div>
    </div>
  );
}

export default SignUpPageForm;
