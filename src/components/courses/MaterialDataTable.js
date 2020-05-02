import React from 'react';
import MaterialTable from 'material-table';
import tableIcons from './tableIcons';
import {Post} from "../requests/postCourses";
import {Get} from "../requests/getCourses";
import {Put} from "../requests/putCourses";
import {Delete} from "../requests/deleteRequest";


export default function MaterialTableDemo(props) {
 
    const [state, setState] = React.useState({
      columns: [
        { title: 'Name', field: 'name' },
        { title: 'Description', field: 'description' },
        { title: 'Total Hours', field: 'hoursTotal', type: 'numeric' },
      ],
      data: [],
      
    });


    return (
      <MaterialTable
       icons={tableIcons}
        title="Courses List"
        columns={state.columns}
        data={props.dataApi}
        editable={{
       
            onRowAdd: 
            (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                const name = newData.name;
                const description = newData.description;
                const hoursTotal = newData.hoursTotal
                Post(name,description,hoursTotal)
                window.location='/Dashboard';
                return { ...prevState, data };
              });
            }, 600);
          }),
          onRowUpdate: 
          (newData, oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                const name = newData.name;
                const description = newData.description;
                const hoursTotal = newData.hoursTotal;
                const id = newData.id;
                Put(name,description,hoursTotal,id);
                window.location='/Dashboard';
                if (oldData) {
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;                   
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),

            
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                const name = oldData.name;
                const description = oldData.description;
                const hoursTotal = oldData.hoursTotal;
                const id = oldData.id;
                Delete(name,description,hoursTotal,id);
                // window.location='/Dashboard';
                setState((prevState) => {
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