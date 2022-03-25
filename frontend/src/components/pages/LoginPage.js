import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../App.css";

export default function LoginPage() {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    console.log("form submitted");
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  return (
    <div className="text-center m-5-auto">
      <h2>Login</h2>
      <form action="/home" onSubmit={handleSubmit}>
        <p>
          <label>Username</label>
          <br />
          <input
            type="text"
            name="username"
            value={loginDetails.username}
            onChange={handleChange}
            required
          />
        </p>
        <p>
          <label>Password</label>
          <br />
          <input
            type="password"
            name="password"
            value={loginDetails.password}
            onChange={handleChange}
            required
          />
        </p>
        <p>
          <button className="button" type="submit">
            Login
          </button>
        </p>
      </form>
      <footer>
        <p>
          No account? <Link to="/register">Create an account</Link>.
        </p>
        <p>
          <Link to="/">Back</Link>
        </p>
      </footer>
    </div>
  );
}
