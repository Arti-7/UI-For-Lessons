import React from "react";
import axios from "axios";
import { useCookies } from 'react-cookie';
import Cookies from 'js-cookie';
import MaterialTableDemo from "./MaterialDataTable";

export default class Courses extends React.Component {

  state = {
    token: localStorage.token
  };


  login = (event) => {
    event.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("tenant", "uitest");
    myHeaders.append("Content-Type", "application/json;charset=UTF-8");
    myHeaders.append('Authorization', "access_token" )
    

    var raw = JSON.stringify({
      email: "uitest@admin.ad",
      password: "uitest"
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
    .then((response) => {Cookies.set('access_token', response.headers['x-access-token'])})
    .catch((error) => {console.log(error)});


    fetch("https://api.esch.pl/api/courses", requestOptions)
    .then(data => {localStorage.setItem("token", data.accessToken)})
    .then(response =>{console.log(response)})
    .catch((error) => {console.log(error)});

  }




    post = (event) => {
      event.preventDefault();

      var myHeaders = new Headers();
      myHeaders.append("tenant", "uitest");
      myHeaders.append("Content-Type", "application/json;charset=UTF-8");
  
  
      var raw = JSON.stringify({
        email: "uitest@admin.ad",
        password: "uitest"
      });

      var row = {
      name:"test",
      description:"testing",
      hoursTotal: 8.0,
    }

    var ruw = JSON.stringify({
      name:"test",
      description:"testing",
      hoursTotal: 8.0,
    })

    let time = new Date().toLocaleTimeString()
    
    var exam = JSON.stringify({
      active: true,
createdDate: new Date().toLocaleTimeString(),
deleted: false,
description: "11",
hoursTotal: 111,
// id: 145,
lastUpdatedDate: new Date().toLocaleTimeString(),
name: "IveDoneIt!!",
studyPlanId: null,
    })
  
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: exam,
        redirect: "follow",
        credentials: "include",
      };
  
      fetch("https://api.esch.pl/api/courses", requestOptions)
      .then(data => {localStorage.setItem("token", data.accessToken)})
      .then(response =>{console.log(response)})
      .catch((error) => {console.log(error)});
    }







    get = (event) => {
      event.preventDefault();

      var myHeaders = new Headers();
      myHeaders.append("tenant", "uitest");
      myHeaders.append("Content-Type", "application/json;charset=UTF-8");
  
  
      var raw = JSON.stringify({
        email: "uitest@admin.ad",
        password: "uitest"
      });

      var row = {
      name:"test",
      description:"testing",
      hoursTotal: 8.0,
    }

    var ruw = JSON.stringify({
      name:"test",
      description:"testing",
      hoursTotal: 8.0,
    })

    let time = new Date().toLocaleTimeString()
    
    var exam = JSON.stringify({
      active: true,
createdDate: new Date().toLocaleTimeString(),
deleted: false,
description: "11",
hoursTotal: 111,
// id: 145,
lastUpdatedDate: new Date().toLocaleTimeString(),
name: "IveDoneIt!!",
studyPlanId: null,
    })
  
      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        // body: exam,
        redirect: "follow",
        credentials: "include",
      };
  
      fetch("https://api.esch.pl/api/courses", requestOptions)
      .then(data => {localStorage.setItem("token", data.accessToken)})
      .then(response =>{console.log(response)})
      .catch((error) => {console.log(error)});
    }



    put = (event) => {
      event.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("tenant", "uitest");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      active: true,
createdDate: new Date().toLocaleTimeString(),
deleted: false,
description: "upgraded successfully",
hoursTotal: 111,
id: 24,
lastUpdatedDate: new Date().toLocaleTimeString(),
name: "IveDoneIt!!",
studyPlanId: null,
    });
    
    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
      credentials: 'include'
    };
    
    fetch("https://api.esch.pl/api/courses", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }






























  render() {
    return(
      <div>
    <MaterialTableDemo/>
    </div>
  )
}}
