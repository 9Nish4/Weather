const weatherApi = {
    key: "1cd1118aba310b1005cd2a852b583141",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather?", 
}

const searchInputBox = document.getElementById('search');

// Event Listener Function on keypress
searchInputBox.addEventListener('keypress', (event) => {
    
    if(event.keyCode == 13) {
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.getElementById('weatherDetails').style.display = "block";
    }

});

// Get Weather Report
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}

// Show Weather Report
function showWeatherReport(weather){
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById('temprature');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

   
    let weatherType = document.getElementById('weatherType');
    weatherType.innerText = `${weather.weather[0].main}`;


  
}

