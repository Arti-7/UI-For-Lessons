import React from "react";
import MaterialTableDemo from "./MaterialDataTable";


export default class CoursesList extends React.Component {
  state = {
    dataApi: [],
    gotList: false,
  };

  handleEdit = (event) => {};

  componentDidMount() {
    const myHeaders = new Headers();
    myHeaders.append("tenant", "uitest");
    myHeaders.append("Content-Type", "application/json;charset=UTF-8");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
      credentials: "include",
    };

    fetch("https://api.esch.pl/api/courses", requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ dataApi: data.payload });
        console.log(this.state.dataApi);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <MaterialTableDemo dataApi={this.state.dataApi} />
      </div>
    );
  }
}
