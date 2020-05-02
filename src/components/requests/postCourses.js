export const Post = (name,description,hoursTotal) => {
// console.log(newData)

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
description: description,
hoursTotal: hoursTotal,
lastUpdatedDate: new Date().toLocaleTimeString(),
name: name,
studyPlanId: null,
  })
console.log(exam)
  var examus = {
    active: true,
createdDate: new Date().toLocaleTimeString(),
deleted: false,
lastUpdatedDate: new Date().toLocaleTimeString(),
studyPlanId: null,
  }

  // let obj = JSON.stringify(Object.assign(examus,newData))
  // console.log(obj)

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

  export default Post;
