async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'befce4e7633906123aacce318b8be0ab'; // Substitua pela sua chave de API do OpenWeatherMap

    try {
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}`);

        c;
        const data = await response.json();




        const weatherInfo = document.getElementById('weather-info');
        const cityName = data.name;
        const temperature = data.main.temp + '°C';
        const description = data.weather[0].description;
        const humidity = data.main.humidity + '%';
        const wind = data.wind.speed + ' m/s';




        const weatherHTML = `
        <p><strong>Cidade:</strong> ${cityName}</p>
        <p><strong>Temperatura:</strong> ${temperature}</p>
        <p><strong>Descrição:</strong> ${description}</p>
        <p><strong>Umidade:</strong> ${humidity}</p>
        <p><strong>Vento:</strong> ${wind}</p>
      `;

        weatherInfo.


            innerHTML = weatherHTML;
    } catch (error) {
        console.error('Erro ao obter dados da API:', error);
    }
}
