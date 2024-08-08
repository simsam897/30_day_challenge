const cityInput = document.querySelector(".city-input");
const searchBtn = document.querySelector(".search-btn");
const weatherCard = document.querySelector(".weather-cards");

const currenWeather = document.querySelector(".current_weather");

const locatioBtn = document.querySelector(".location-btn");

const API_KEY = "f8fb358bd56854dc3dea221279d8b2ce";

const createWeatherCard = (cityName, weatherItem, index) => {
  if (index === 0) {
    return `<div class="current_weather">
          <div class="details">
            <h2>${cityName}(${weatherItem.dt_txt.split(" ")[0]})</h2>
            <h4>Temperature: ${(weatherItem.main.temp - 273.15).toFixed(
              2
            )}°C</h4>
            <h4>Wind:${weatherItem.wind.speed}m/s</h4>
            <h4>Humidity: ${weatherItem.main.humidity}%</h4>

            <div class="icon">
            <img src="https://openweathermap.org/img/wn/${
              weatherItem.weather[0].icon
            }@4x.png" alt="weather-icon">
            <h4>${weatherItem.weather[0].description}</h4>
          </div>
          </div>

        </div>`;
  } else {
    return `<div class="card">
            <h3>(${weatherItem.dt_txt.split(" ")[0]})</h3>
            <img src="https://openweathermap.org/img/wn/${
              weatherItem.weather[0].icon
            }@2x.png" alt="weather-icon">
            <h4>Temperature: ${(weatherItem.main.temp - 273.15).toFixed(
              2
            )}°C</h4>
            <h4>Wind: ${weatherItem.wind.speed} m/s</h4>
            <h4>Humidity: ${weatherItem.main.humidity}%</h4>
          </div>`;
  }
};

const getWeatherDetails = (cityName, lat, lon) => {
  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  fetch(weatherApiUrl)
    .then((res) => res.json())
    .then((data) => {
      const uniqueForecastDays = [];

      const fiveDaysWeather = data.list.filter((forecast) => {
        const forecastDate = new Date(forecast.dt_txt).getDate();
        if (!uniqueForecastDays.includes(forecastDate)) {
          uniqueForecastDays.push(forecastDate);
          return true;
        }
        return false;
      });
      //   Clear previous data
      cityInput.value = "";
      currenWeather.innerHTML = "";

      weatherCard.innerHTML = "";
      fiveDaysWeather.forEach((weatherItem, index) => {
        if (index === 0) {
          currenWeather.insertAdjacentHTML(
            "beforeend",
            createWeatherCard(cityName, weatherItem, index)
          );
        } else {
          weatherCard.insertAdjacentHTML(
            "beforeend",
            createWeatherCard(cityName, weatherItem, index)
          );
        }
      });
    })
    .catch(() => {
      alert("Error while fetching weather forecast");
    });
};

const getCityCoordinates = () => {
  const cityName = cityInput.value.trim();
  if (!cityName) {
    return;
  }
  const apiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`;

  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      if (!data.length) return alert(`No coordinates found for ${cityName}`);
      const { name, lat, lon } = data[0];
      getWeatherDetails(name, lat, lon);
    })
    .catch(() => {
      alert("Error while fetching data");
    });
};

const getUserCoordinates = () => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      const REVERSE_GEOCODING_URL = `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${API_KEY}`;

      fetch(REVERSE_GEOCODING_URL)
        .then((res) => res.json())
        .then((data) => {
          const { name } = data[0];
          getWeatherDetails(name, latitude, longitude);
        })
        .catch(() => {
          alert("Error while fetching city");
        });
    },
    (error) => {
      if (error.code === error.PERMISSION_DENIED) {
        alert(
          "geolocation request denied, please reset location permission to grant access agian"
        );
      }
    }
  );
};

searchBtn.addEventListener("click", getCityCoordinates);
locatioBtn.addEventListener("click", getUserCoordinates);

cityInput.addEventListener(
  "keyup",
  (e) => e.key === "Enter" && getCityCoordinates()
);
