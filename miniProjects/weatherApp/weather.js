const apiKey = "2f238a3b35fc4c57806130755240608";
const base = "http://api.weatherapi.com/v1/forecast.json";

const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", () => {
  const city = document.getElementById("city-input").value;
  const forecastUrl = `${base}?key=${apiKey}&q=${city}&days=5`;

  fetch(`${forecastUrl}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("City not found");
      }
      return res.json();
    })
    .then((data) => {
      // Current weather data
      const cityName = data.location.name;
      const temperature = data.current.temp_c;
      const condition = data.current.condition.text;
      const iconUrl = data.current.condition.icon;

      document.getElementById("city-name").textContent = cityName;
      document.getElementById("temperature").textContent = temperature + "°C";
      document.getElementById("condition").textContent = condition;
      document.getElementById("weather-icon").src = `https:${iconUrl}`;

      // 5-day forecast data
      for (let i = 0; i < 5; i++) {
        const day = i + 1;
        const forecastDay = data.forecast.forecastday[i];

        document.getElementById(`day${day}-temp`).textContent =
          forecastDay.day.avgtemp_c + "°C";
        document.getElementById(`day${day}-condition`).textContent =
          forecastDay.day.condition.text;
        document.getElementById(`day${day}-icon`).src = `https:${forecastDay.day.condition.icon}`;
      }

      document.getElementById("error-message").textContent = "";
    })
    .catch((error) => {
      document.getElementById("error-message").textContent = error.message;
    });
});
