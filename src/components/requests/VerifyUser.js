const verifyUserStatus = () => {
  const token = localStorage.getItem("token");

  if (token && token.length > 0) {
    var myHeaders = new Headers();
    myHeaders.append("tenant", "uitest");
    myHeaders.append("Content-Type", "application/json;charset=UTF-8");
    myHeaders.append("x-access-token", token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
      credentials: "include",
    };

    fetch("https://api.esch.pl/api/auth/getUserData", requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("token", data.payload.accessToken);
      })
      .catch((error) => {
        console.log(error);
      });

    return localStorage.getItem("token");
  }
};
export default verifyUserStatus;
