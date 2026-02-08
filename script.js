const apiKey = "0db7244a64ac418a84b63732262801";

function getWeather() {
    const city = document.getElementById("cityInput").value || "London";
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherDiv = document.getElementById("weatherResult");

            weatherDiv.innerHTML = `
                <h2>${data.location.name}, ${data.location.country}</h2>
                <img src="https:${data.current.condition.icon}" alt="weather icon">
                <p><strong>${data.current.temp_c}°C</strong></p>
                <p>${data.current.condition.text}</p>
                <p>💧 Humidity: ${data.current.humidity}%</p>
                <p>💨 Wind: ${data.current.wind_kph} km/h</p>
            `;
        })
        .catch(error => {
            alert("City not found!");
            console.error(error);
        });
}

