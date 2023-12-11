function displayCityDataFromDropdownChoice(event) {
  let cityTimeZone = event.target.value;
  let displayedCitiesLocator = document.querySelector(
    "#displayed-cities-container"
  );

  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  if (cityTimeZone.length > 0) {
    let cityName = formatCityNameFromTimeZone(cityTimeZone);

    displayedCitiesLocator.innerHTML = `
      <div class="city-data" id="dropdown-city">
        <div class="left-side">
          <h2 class="displayed-city">
            ${cityName}
          </h2>
          <p class="date">${moment().tz(cityTimeZone).format("MMMM Do, YYYY")}
          </p>
        </div>
        <p class="time">${moment()
          .tz(cityTimeZone)
          .format("h:mm [<small>]A[</small>]")}
        </p>
      </div>
      <button id="reset-cities-btn">Reset Cities</button>
    `;
  } else {
    displayDefaultCityData();
  }

  let resetCitiesBtnLocator = document.querySelector("#reset-cities-btn");
  if (resetCitiesBtnLocator) {
    resetCitiesBtnLocator.addEventListener("click", displayDefaultCityData);
  }
}

function displayDefaultCityData() {
  let displayedCitiesLocator = document.querySelector(
    "#displayed-cities-container"
  );

  displayedCitiesLocator.innerHTML = `
      <div class="city-data" id="london">
      <div class="left-side">
        <h2 class="displayed-city">
          London <span class="city-icon"> 🇬🇧</span>
        </h2>
        <p class="date"></p>
      </div>
      <p class="time"></p>
    </div>

    <div class="city-data" id="new-york">
      <div class="left-side">
        <h2 class="displayed-city">
          New York <span class="city-icon"> 🇺🇸</span>
        </h2>
        <p class="date"></p>
      </div>
      <p class="time"></p>
    </div>
  `;

  // reset the dropdown menu to the default value of "Select a city" so the previous selection by the user is not retained in the dropdown window
  let cityDropDownDefaultValueSelector = (document.querySelector(
    "#city-dropdown"
  ).selectedIndex = "0");
  cityDropDownDefaultValueSelector;
}

function formatCityNameFromTimeZone(timeZone) {
  let cityName = timeZone.split("/")[1].replace("_", " ");

  return cityName;
}

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

  // London

  let londonLocator = document.querySelector("#london");
  if (londonLocator) {
    let londonDateLocator = londonLocator.querySelector(".date");
    let londonTimeLocator = londonLocator.querySelector(".time");
    londonDateLocator.innerHTML = moment()
      .tz("Europe/London")
      .format("MMMM Do, YYYY");
    londonTimeLocator.innerHTML = moment()
      .tz("Europe/London")
      .format("h:mm:ss [<small>]A[</small>]");
  }
}

updateTime();
setInterval(updateTime, 1000);

let cityDropdownLocator = document.querySelector("#city-dropdown");
cityDropdownLocator.addEventListener(
  "change",
  displayCityDataFromDropdownChoice
);
