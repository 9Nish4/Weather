const weatherApi = {
    key: "1cd1118aba310b1005cd2a852b583141",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather?", 
}

const searchInputBox = document.getElementById('search');

searchInputBox.addEventListener('keypress', (event) => {
    
    if(event.keyCode == 13) {
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
    }

});
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}
function showWeatherReport(weather){
    console.log(weather);
}