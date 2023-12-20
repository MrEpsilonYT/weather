function getWeather() {
    const apiKey = '48d9f8ab6ae3e2657c1b7247db4ee971';
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

    const city = document.getElementById('cityInput').value;

    if (!city) {
        alert('Please enter a city.');
        return;
    }

    const url = `${apiUrl}?q=${city}&appid=${apiKey}`;

    $.get(url)
        .done(function (data) {
            const temperature = Math.round(data.main.temp - 273.15);
            const description = data.weather[0].description;
            const icon = data.weather[0].icon;

            const weatherData = `
                <h2>${city}</h2>
                <p>${description}</p>
                <p>${temperature}°C</p>
                <img src="https://openweathermap.org/img/w/${icon}.png" alt="Weather Icon">
            `;

            $('#weather-data').html(weatherData);
        })
        .fail(function (error) {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}
