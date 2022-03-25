import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";

import "../../App.css";

export default function LoginPage() {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });
  // const history = useHistory();

  const [result, setResult] = useState();

  const handleSubmit = (e) => {
    console.log("form submitted");
    e.preventDefault();
    loginAuth(loginDetails.username, loginDetails.password);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const loginAuth = (username, password) =>
    axios
      .get("http://127.0.0.1:5000/login_auth", {
        params: {
          username: username,
          password: password,
        },
      })
      .then((res) => {
        setResult(res);
      })
      .catch((e) => {
        console.log(e);
      });

  // const authenticate = useQuery(["authenticate", username], () =>
  //   loginAuth(username, password)
  // );
  console.log(result);

  useEffect(() => {
    // console.log(result.response.data.message);
    if (result) {
      if (result.data) {
        if (result.data.message) {
          console.log(result.data.message);
          if ((result.data.message = "success")) {
            // history.push("/home");
          }
        }
      }
    }
  }, [result]);

  return (
    <div className="text-center m-5-auto">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
