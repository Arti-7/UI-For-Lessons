export const Put = (name, description, hoursTotal, id) => {
  var myHeaders = new Headers();
  myHeaders.append("tenant", "uitest");
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    active: true,
    deleted: false,
    description: description,
    hoursTotal: hoursTotal,
    id: id,
    lastUpdatedDate: new Date().toLocaleTimeString(),
    name: name,
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
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

export default Put;
