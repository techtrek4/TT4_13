import React from "react";
import { Link } from "react-router-dom";

import "../../App.css";
import BackgroundImage from "../../assets/images/bg.png";

export default function LandingPage() {
  return (
    <>
      <div className="text-center">
        <h1>Welcome to DBS App</h1>
        <div>
          <Link to="/login">
            <button className="button">Log In</button>
          </Link>
          <Link to="/register">
            <button className="button" id="reg_btn">
              Register
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
