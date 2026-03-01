const apikey = "4686a449f4af27273ebb67a8d05e11a4";

const weatherDataEl = document.querySelector("#weather-data");

const cityInputEl = document.querySelector("#city-input");

const formEl = document.querySelector("form");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const cityValue = cityInputEl.value;
  getWeatherData(cityValue);
})
async function getWeatherData(cityValue) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`)
        if (!response.ok) { 
            throw new Error("Network response was not ok")
        }
        const data = await response.json()

      const temperature = Math.round(data.main.temp)

      const description = data.weather[0].description

      const icon = data.weather[0].icon

      const details = [
        `Feels like: ${Math.round(data.main.feels_like)}°C`,
        `Humidity: ${data.main.humidity}%`,
        `Wind speed: ${data.wind.speed} m/s`
      ]

      weatherDataEl.querySelector(".icon").innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png" alt="Weather icon">`;

      weatherDataEl.querySelector(".temperature").textContent = `${temperature}°C`;

      weatherDataEl.querySelector(".description").textContent = description;
        
      weatherDataEl.querySelector(".details").innerHTML = details.map(detail => `<div>${detail}</div>`).join("")
      
    } catch (error) {
      weatherDataEl.innerHTML = `
        <div class="error">
          <p>Failed to fetch weather data. Please try again.</p>
        </div>
      `
    }
}
