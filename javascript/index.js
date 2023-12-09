function updateTime() {
  // New York

  let newYorkLocator = document.querySelector("#new-york");
  if (newYorkLocator) {
    let newYorkDateLocator = newYorkLocator.querySelector(".date");
    let newYorkTimeLocator = newYorkLocator.querySelector(".time");
    newYorkDateLocator.innerHTML = moment()
      .tz("America/New_York")
      .format("MMMM Do, YYYY");
    newYorkTimeLocator.innerHTML = moment()
      .tz("America/New_York")
      .format("h:mm:ss [<small>]A[</small>]");
  }

  // Paris

  let parisLocator = document.querySelector("#paris");
  if (parisLocator) {
    let parisDateLocator = parisLocator.querySelector(".date");
    let parisTimeLocator = parisLocator.querySelector(".time");
    parisDateLocator.innerHTML = moment()
      .tz("Europe/Paris")
      .format("MMMM Do, YYYY");
    parisTimeLocator.innerHTML = moment()
      .tz("Europe/Paris")
      .format("h:mm:ss [<small>]A[</small>]");
  }

  // Sydney
  let sydneyLocator = document.querySelector("#sydney");
  if (sydneyLocator) {
    let sydneyDateLocator = sydneyLocator.querySelector(".date");
    let sydneyTimeLocator = sydneyLocator.querySelector(".time");
    sydneyDateLocator.innerHTML = moment()
      .tz("Australia/Sydney")
      .format("MMMM Do, YYYY");
    sydneyTimeLocator.innerHTML = moment()
      .tz("Australia/Sydney")
      .format("h:mm:ss [<small>]A[</small>]");
  }
}

updateTime();
setInterval(updateTime, 1000);
