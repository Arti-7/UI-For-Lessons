import React from "react";
import axios from "axios";
import MaterialTableDemo from "./MaterialDataTable";

export default class Courses extends React.Component {
  state = {
    dataFromApi: [],
  dataForCourses:[],
  };

  componentDidMount() {

    const auth = {
      "email": 'uitest@admin.ad',
      "password": 'uitest'
    }
    const headers = {
        "tenant": 'uitest',
        "withCredentials": "true",
        "Content-Type": "application/json;charset=UTF-8"
        }

      axios.get( 'https://api.esch.pl/api/courses',headers)
      .then((res) => {
                console.log(res)})
                .catch (error => {
                    console.log(error)
                })


  }


  render() {

    return(
    <MaterialTableDemo/>
  )
}
}