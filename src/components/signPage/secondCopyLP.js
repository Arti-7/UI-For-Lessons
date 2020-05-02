import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { connect } from "react-redux";
// import { userLoginFetch } from "../redux/actions";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "./loginPage.css";

class CopyLP extends React.Component {

  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.userLoginFetch(this.state.email,this.state.password);
  };

  login = (event) => {
    event.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("tenant", "uitest");
    myHeaders.append("withCredentials", "true");
    myHeaders.append("Content-Type", "application/json;charset=UTF-8");

    var raw = JSON.stringify({
      email: this.state.email,
      password: this.state.password
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
      credentials: "include"
    };

    fetch("https://api.esch.pl/api/auth/login", requestOptions)
    .then(data => {localStorage.setItem("token", data.accessToken)})
    .catch((error) => {console.log(error)});


fetch("https://api.esch.pl/api/auth/login", requestOptions)
      .then((response) => {
        if(response.ok)
        {window.location = "/Dashboard"}
        else {window.location = "/"};
      })
      .catch((error) => console.log("error", error));

}












  //       if (token) {

  //         const form = new FormData(event.target);
  //   const options = {
  //     headers: {
  //       "Content-type": "application/javascript",
  //       "tenant" : "uitest",
  //       "withCredentials" : "true",
  //       // "Authorization" : `Bearer ${this.token}`,
  //       "Authorization": "Basic dWl0ZXN0QGFkbWluLmFkOnVpdGVzdA=="
        
  //   }
  // }
  //   axios.get("https://api.esch.pl/api/courses", form, options)
  //     .then((response) => {
  //       // localStorage.setItem("token", response.data.accessToken);
  //       // this.props.history.push("/");
  //       console.log(response)
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
    
  //   //       var getHeaders = new Headers();
  //   //       // getHeaders.append("tenant", "uitest");
  //   //       // getHeaders.append("withCredentials", "true");
  //   //       getHeaders.append("Content-Type", "application/javascript");
  //   //       // getHeaders.append("Authorization", `Bearer ${this.token}`);
  //   //       getHeaders.append("ETag", "5e764adc-729f");
  //   //       getHeaders.append("Referer", "https://uitest.esch.pl/calendar/")
  //   //       getHeaders.append("Accept-Ranges", "bytes")

      
  //   //       var requestOptionsGet = {
  //   //         method: "GET",
  //   //         headers: getHeaders,
  //   //         redirect: "follow",

  //   //       };
  //   //      fetch("https://api.esch.pl/api/courses", requestOptionsGet)
  //   // .then(response=>{console.log(response)})
  //   // .catch((error) => console.log(error))





  // }}

   
        





















    // fetch("https://api.esch.pl/api/auth/login", requestOptions)
    //   .then((response) => {
    //     if(response.ok)
    //     {window.location = "/Dashboard"}
    //     else {window.location = "/"};
    //   })
    //   .catch((error) => console.log("error", error));

     
      // .then(resp => console.log("response"))
      //   .then(data => {
      //     if (data.message) {
      //     window.location="/Dashboard";
      //     console.log("hm")
      //     } else {
      //       console.log("check")
      //       localStorage.setItem("token", data.jwt)
      //       dispatch(loginUser(data.user))
      //       window.location="/Dashboard"
            
          // }})
          // .catch((error) => console.log("error", error));
 

    







  



























  render() {
    return (
      <div className="loginForm">
        <h1>Login</h1>

        <form name="loginForm" onSubmit={this.login}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="email"
              id="email"
              required
              className="form-control"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
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
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="dropdownCheck2"
              />
              <label className="form-check-label" for="dropdownCheck2" >
                Remember me
              </label>
            </div>
          </div>
          <button type="submit" value="Login" className="btn btn-primary" >
            Sign in
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(CopyLP);
