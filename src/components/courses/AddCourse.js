import React from "react";

export default class AddCourse extends React.Component {


  // handleData = (event) => {
  //     this.setState({
  //         [event.target.field]: event.target.value

  //     })
  // }

  handlePost = (event) => {
    event.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("tenant", "uitest");
    myHeaders.append("Content-Type", "application/json;charset=UTF-8");

    var exam = JSON.stringify({
      active: true,
      createdDate: new Date().toLocaleTimeString(),
      deleted: false,
      description: document.getElementById("description").value,
      hoursTotal: document.getElementById("hoursTotal").value,
      // id: 145,
      lastUpdatedDate: new Date().toLocaleTimeString(),
      name: document.getElementById("name").value,
      studyPlanId: null,
    });
    console.log(exam);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: exam,
      redirect: "follow",
      credentials: "include",
    };

    fetch("https://api.esch.pl/api/courses", requestOptions)
      .then((data) => {
        localStorage.setItem("token", data.accessToken);
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
       
      });

  };

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
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </form>
      </div>
    );
  }
}
