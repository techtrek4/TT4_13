import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import "../../App.css";

export default function RegisterPage() {
  const [details, setDetails] = useState({
    username: "",
    password: "",
    fullname: "",
    phonenumber: "",
  });

  console.log(details);

  const handleSubmit = (e) => {
    console.log("form submitted");
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDetails({ ...details, [name]: value });
  };

  return (
    <div className="text-center m-5-auto">
      <h2>Create a DBS account</h2>
      <form onSubmit={handleSubmit} action="/home">
        <p>
          <label>Username</label>
          <br />
          <input
            type="text"
            name="username"
            value={details.username}
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
            value={details.password}
            onChange={handleChange}
            required
          />
        </p>
        <p>
          <label>Full name</label>
          <br />
          <input
            type="text"
            name="fullname"
            value={details.fullname}
            onChange={handleChange}
            required
          />
        </p>
        <p>
          <label>Phone number</label>
          <br />
          <input
            type="number"
            name="phonenumber"
            value={details.phonenumber}
            onChange={handleChange}
            required
          />
        </p>
        <p>
          <label>Address</label>
          <br />
          <input
            type="text"
            name="address"
            value={details.address}
            onChange={handleChange}
            required
          />
        </p>
        <p>
          <button className="button" type="submit">
            Register
          </button>
        </p>
      </form>
      <footer>
        <p>
          <Link to="/">Back</Link>
        </p>
      </footer>
    </div>
  );
}
