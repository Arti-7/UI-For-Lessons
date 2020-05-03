import React from "react";
import MaterialTable from "material-table";
import tableIcons from "./TableIcons";
import { Post } from "../requests/PostCourses";
import { Put } from "../requests/PutCourses";
import { Delete } from "../requests/DeleteRequest";

export default class MaterialTableDemo extends React.Component {
  state = {
    columns: [
      { title: "Name", field: "name" },
      { title: "Description", field: "description" },
      { title: "Total Hours", field: "hoursTotal", type: "numeric" },
    ],
    data: [],
    update: false,
  };

  Get = () => {
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
        this.setState({
          data: data.payload.filter((course) => {
            return course.active;
          }),
        });
        console.log(this.state.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.Get();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.data !== prevState.data && prevState.update) {
      this.Get();
      this.setState({ update: false });
    }
  }

  render() {
    return (
      <MaterialTable
        icons={tableIcons}
        title="Courses List"
        columns={this.state.columns}
        data={this.state.data}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                const name = newData.name;
                const description = newData.description;
                const hoursTotal = newData.hoursTotal;
                Post(name, description, hoursTotal);
                this.setState((prevState) => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
                this.setState({
                  update: true,
                });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                const name = newData.name;
                const description = newData.description;
                const hoursTotal = newData.hoursTotal;
                const id = newData.id;
                Put(name, description, hoursTotal, id);
                if (oldData) {
                  this.setState((prevState) => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),

          onRowDelete: (oldData, prevState) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                const name = oldData.name;
                const description = oldData.description;
                const hoursTotal = oldData.hoursTotal;
                const id = oldData.id;
                console.log(name, description, hoursTotal, id);
                Delete(name, description, hoursTotal, id);
                this.setState((prevState) => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 600);
            }),
        }}
      />
    );
  }
}
