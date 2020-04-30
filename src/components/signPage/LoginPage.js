import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "./loginPage.css";

class LoginView extends React.Component {
  login = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);

    var myHeaders = new Headers();
    myHeaders.append("tenant", "uitest");
    myHeaders.append("withCredentials", "true");
    myHeaders.append("Content-Type", "application/json;charset=UTF-8");

    var raw = JSON.stringify({
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://api.esch.pl/api/auth/login", requestOptions)
      .then((response) => {
        response.ok
          ? (window.location = "/Dashboard")
          : (window.location = "/");
      })
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  render() {
    return (
      <div className="loginForm">
        <h1>Login</h1>

        <form name="loginForm" onSubmit={this.login}>
          <div className="form-group">
            <label for="exampleDropdownFormEmail2">Username</label>
            <input
              type="text"
              name="email"
              id="email"
              required
              className="form-control"
              placeholder="Email"

            />
          </div>
          <div className="form-group">
            <label for="exampleDropdownFormPassword2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="form-control"
              placeholder="Password"
              valid="true"
            />
          </div>
          <div className="form-group">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="dropdownCheck2"
              />
              <label className="form-check-label" for="dropdownCheck2">
                Remember me
              </label>
            </div>
          </div>
          <button type="submit" value="Login" className="btn btn-primary">
            Sign in
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginView);
