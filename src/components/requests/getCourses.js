export const Get = () => {
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
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.setState({ data: data.payload });
    })
    .catch((error) => {
      console.log(error);
    });
};

export default Get;
