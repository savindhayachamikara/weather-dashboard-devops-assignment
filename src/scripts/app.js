const searchInput = document.getElementById("cityInput");
const searchButton = document.getElementById("searchButton");
const weatherContainer = document.getElementById("weatherResult");
const forecastContainer = document.getElementById("forecast");

const searchForm = document.querySelector("form");

if (searchForm) {
    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();

        

        const city = searchInput.value.trim();

        if (!city) {
            showError("Please enter a city name.");
            return;
        }

        getWeather(city);
    });
} else {
    console.error("Search form was not found.");
}

async function getWeather(city) {
    weatherContainer.innerHTML = `
        <div class="message">
            Loading weather for ${city}...
        </div>
    `;

    forecastContainer.innerHTML = "";

    try {
        if (typeof API_KEY === "undefined" || !API_KEY) {
            throw new Error("OpenWeatherMap API key is not configured.");
        }

        const currentUrl =
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            encodeURIComponent(city) +
            "&appid=" +
            API_KEY +
            "&units=metric";

        const forecastUrl =
            "https://api.openweathermap.org/data/2.5/forecast?q=" +
            encodeURIComponent(city) +
            "&appid=" +
            API_KEY +
            "&units=metric";

        const weatherResponse = await fetch(currentUrl);
        const forecastResponse = await fetch(forecastUrl);

        if (!weatherResponse.ok) {
            throw new Error(
                "Weather request failed. HTTP status: " +
                weatherResponse.status
            );
        }

        if (!forecastResponse.ok) {
            throw new Error(
                "Forecast request failed. HTTP status: " +
                forecastResponse.status
            );
        }

        const weatherData = await weatherResponse.json();
        const forecastData = await forecastResponse.json();

        displayWeather(weatherData);
        displayForecast(forecastData);

    } catch (error) {
        console.error("Weather API error:", error);
        showError(error.message);
    }
}

function displayWeather(data) {
    const temperature = Math.round(data.main.temp);
    const feelsLike = Math.round(data.main.feels_like);
    const humidity = data.main.humidity;
    const wind = data.wind.speed;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;

    weatherContainer.innerHTML = `
        <div class="weather-card">
            <h2>${data.name}, ${data.sys.country}</h2>

            <img
                src="https://openweathermap.org/img/wn/${icon}@2x.png"
                alt="${description}"
            >

            <h3>${temperature}°C</h3>

            <p>${capitalize(description)}</p>

            <div class="weather-details">
                <p>Feels Like: ${feelsLike}°C</p>
                <p>Humidity: ${humidity}%</p>
                <p>Wind: ${wind} m/s</p>
            </div>
        </div>
    `;
}

function displayForecast(data) {
    const days = [];

    data.list.forEach(function (item) {
        const date = new Date(item.dt * 1000);

        const day = date.toLocaleDateString("en-US", {
            weekday: "short"
        });

        if (
            !days.some(function (existingDay) {
                return existingDay.day === day;
            })
        ) {
            days.push({
                day: day,
                item: item
            });
        }
    });

    const fiveDays = days.slice(0, 5);

    forecastContainer.innerHTML = fiveDays
        .map(function (forecast) {
            const item = forecast.item;
            const temperature = Math.round(item.main.temp);
            const description = item.weather[0].description;
            const icon = item.weather[0].icon;

            return `
                <div class="forecast-card">
                    <h3>${forecast.day}</h3>

                    <img
                        src="https://openweathermap.org/img/wn/${icon}@2x.png"
                        alt="${description}"
                    >

                    <h4>${temperature}°C</h4>

                    <p>${capitalize(description)}</p>
                </div>
            `;
        })
        .join("");
}

function showError(message) {
    weatherContainer.innerHTML = `
        <div class="error-message">
            ${message}
        </div>
    `;

    forecastContainer.innerHTML = "";
}

function capitalize(text) {
    if (!text) {
        return "";
    }

    return text.charAt(0).toUpperCase() + text.slice(1);
}