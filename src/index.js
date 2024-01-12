function search(event) {
  event.preventDefault();
  // let searchInputElement = document.querySelector("#search-input");
  // let cityElement = document.querySelector("#current-city");
  // cityElement.innerHTML = searchInputElement.value;
  let cityEntered = document.querySelector("#search-input");
  let cityValue = cityEntered.value;
  console.log(cityValue);

  // change the city and temperature information
  let apiKey = "fc0cfae3b133613dbc3178be6b4c1a4d";

  let getCityCoordinatesAPI = `https://api.openweathermap.org/geo/1.0/direct?q=${cityValue}&limit=1&appid=${apiKey}`;
  console.log(cityValue);
  function getCityWeather(response) {
    let cityName = response.data[0].name;
    let latitude = response.data[0].lat;
    let longitude = response.data[0].lon;

    console.log(`This is the ${latitude} and ${longitude} for ${cityName}`);

    let getCityWeatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

    function displayWeather(response) {
      let temperature = Math.round(response.data.main.temp);
      console.log(temperature);
      let changeTemp = document.querySelector(".current-temperature-value");
      let changeUnit = document.querySelector(".current-temperature-unit");
      let changeCity = document.querySelector("#current-city");
      let changeIcon = document.querySelector(".current-temperature-icon");
      // let icon = response.data.weather[0].icon;

      // changeIcon.textContent = `${icon}`;
      changeCity.textContent = `${cityName}`;
      changeTemp.textContent = `${temperature}`;
      changeUnit.textContent = "°F";
    }
    axios.get(getCityWeatherApi).then(displayWeather);
  }
  axios.get(getCityCoordinatesAPI).then(getCityWeather);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
// searchForm.addEventListener("sumbit", getCityWeather);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

// // change the city and temperature information
// let apiKey = "fc0cfae3b133613dbc3178be6b4c1a4d";
// let cityEntered = document.querySelector("#search-input");
// let cityValue = cityEntered.value;
// // console.log(city);
// // let city = prompt("What City do you need?");
// let getCityCoordinatesAPI = `http://api.openweathermap.org/geo/1.0/direct?q=${cityValue}&limit=1&appid=${apiKey}`;
// console.log(cityValue)
// function getCityWeather(response) {
//   let cityName = response.data[0].name;
//   let latitude = response.data[0].lat;
//   let longitude = response.data[0].lon;

//   console.log(`This is the ${latitude} and ${longitude} for ${cityName}`);

//   let getCityWeatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

//   function displayWeather(response) {
//     let temperature = Math.round(response.data.main.temp);
//     console.log(temperature);
//     let changeTemp = document.querySelector(".current-temperature-value");
//     let changeUnit = document.querySelector(".current-temperature-unit");
//     let changeCity = document.querySelector("#current-city");
//     city = city.toLowerCase();
//     city = city[0].toUpperCase() + city.slice(1);
//     changeCity.textContent = `${city}`;
//     changeTemp.textContent = `${temperature}`;
//     changeUnit.textContent = "°F";
//   }
//   axios.get(getCityWeatherApi).then(displayWeather);
// }
// axios.get(getCityCoordinatesAPI).then(getCityWeather);
