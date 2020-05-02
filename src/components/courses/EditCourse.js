import React from "react";
import Post from "../requests/postCourses";
import { Redirect } from "react-router-dom";

export default class EditCourse extends React.Component {
  state = {
    course: { name: "", description: "", hoursTotal: "", id: null },
  };

  handleEditSaving = (event) => {
    event.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("tenant", "uitest");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      active: true,
      createdDate: new Date().toLocaleTimeString(),
      deleted: false,
      description: document.getElementById("description").value,
      hoursTotal: document.getElementById("hoursTotal").value,
      id: this.state.course.id,
      lastUpdatedDate: new Date().toLocaleTimeString(),
      name: document.getElementById("name").value,
      studyPlanId: null,
    });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
      credentials: "include",
    };

    fetch("https://api.esch.pl/api/courses", requestOptions)
      .then((response) =>
        response.ok
          ? (window.location = "/Dashboard")
          : console.log("not edited")
      )
      .catch((error) => console.log("error", error));
  };

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

    fetch(
      "https://api.esch.pl/api/courses/" + this.props.match.params.id,
      requestOptions
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ course: data.payload });
        console.log(this.state.course);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handlePost}>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label>Course Name</label>
              <input
                type="text"
                field="name"
                className="form-control"
                id="name"
                defaultValue={this.state.course.name}
                required
              />
            </div>
            <div class="form-group col-md-6">
              <label>Total Hours</label>
              <input
                type="numeric"
                field="hoursTotal"
                id="hoursTotal"
                className="form-control"
                defaultValue={this.state.course.hoursTotal}
                required
              />
            </div>
          </div>
          <div class="form-group">
            <label>Description</label>
            <input
              type="text"
              className="form-control"
              field="description"
              id="description"
              defaultValue={this.state.course.description}
              onInput
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleEditSaving}
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}
