function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let currentYear = date.getFullYear();
  let currentDay = days[date.getDay()];
  let currentMonth = months[date.getMonth()];
  let currentDate = date.getDate();
  let currentMinutes = date.getMinutes();
  let currentHours = date.getHours();
  let currentSeconds = date.getSeconds();
  let currentMillis = date.getMilliseconds();

  let formattedDate = `${currentDay}, ${currentMonth} ${currentDate}, ${currentYear}, ${currentHours}:${currentMinutes}:${currentSeconds}.${currentMillis}`;
  return formattedDate;
}
let currentTime = new Date();
let dateElement = document.querySelector("h6");
dateElement.innerHTML = formatDate(currentTime);

function showTextInSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");

  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", showTextInSearch);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  console.log(response);
  let city = response.data.name;
  let message = `It is ${temperature} degrees in ${city}`;
  let h1 = document.querySelector("h1");
  h1.innerHTML = message;
}

let apiKey = "ab196fad8e6103c8809bee81310c8ac2";
let units = "metric";
let city = "sydney";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

axios.get(apiUrl).then(showTemperature);
