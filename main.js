let weatherInfo;
window.addEventListener("load", async () => {
    // Fully loaded!
    weatherInfo = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=18.5001200&lon=-69.9885700&units=metric&appid=c36649f3ebb25ae726cc39880cc731d6",
        { 
            'method': "GET",
            'headers': {
                'Host': 'https://serviotquezada.com',
                'User-Agent': 'servioapp/1.0.0',
                'Accept': '*/*',
                'Accept-Encoding': 'gzip, deflate, br',
                'Connection': 'keep-alive'
            }
        }
    ).then( (r)=> r.json())
    //Main Infos
    document.getElementsByClassName("main")[0].innerHTML = `${weatherInfo.main.temp} °C`;
    document.getElementsByClassName("mainsub")[0].innerHTML = `${weatherInfo.name}, ${weatherInfo.sys.country}`;
    //Other Infos
    document.getElementsByClassName("realfeeltext")[0].innerHTML = ` Real Feel<br>${weatherInfo.main.feels_like} °C`;
    document.getElementsByClassName("humiditytext")[0].innerHTML = `Humidity<br>${weatherInfo.main.humidity}%`;
    document.getElementsByClassName("airtext")[0].innerHTML = `Wind<br>${weatherInfo.wind.speed} Km/h`;
});

// "https://api.weatherapi.com/v1/current.json?key=8d3aa3e63fa9456d91b21136231509&q=18.5001200,-69.9885700"
// {
//     'Host': 'https://warped-equinox-757772.postman.co/',
//     'User-Agent': 'PostmanRuntime/7.33.0',
//     'Accept': '*/*',
//     'Accept-Encoding': 'gzip, deflate, br',
//     'Connection': 'keep-alive'
// }