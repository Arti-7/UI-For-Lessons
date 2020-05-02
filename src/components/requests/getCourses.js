export const Get = () => {

  const dataFromApi = [];

    var myHeaders = new Headers();
    myHeaders.append("tenant", "uitest");
    myHeaders.append("Content-Type", "application/json;charset=UTF-8");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
      credentials: "include",
    };

    fetch("https://api.esch.pl/api/courses", requestOptions)
    // .then(data => {localStorage.setItem("token", data.accessToken)})
    // .then(data=>{dataFromApi = data})
    // .then((res) => {dataFromApi = res.json})
    .then((response) => {
        return response.json();
      })
      .then((data) => {
          this.State({dataFromApi: data.payload})
          
        })
    .catch((error) => {console.log(error)});

    return dataFromApi;
  }

//   export default Get;