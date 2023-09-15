let weatherInfo;
window.addEventListener("load", async () => {
    // Fully loaded!
    console.log("Inicio");
    // await fetch(
    //     "https://api.weatherapi.com/v1/current.json?key=8d3aa3e63fa9456d91b21136231509&q=18.5001200,-69.9885700",
    //     {
    //         method:"GET",
    //         mode:"no-cors"
    //     }
    // ).then( (r)=> console.log(r.json()))
    weatherInfo = {
        "location": {
            "name": "Cristo Rey",
            "region": "Distrito Nacional",
            "country": "Dominican Republic",
            "lat": 18.5,
            "lon": -69.99,
            "tz_id": "America/Santo_Domingo",
            "localtime_epoch": 1694744682,
            "localtime": "2023-09-14 22:24"
        },
        "current": {
            "last_updated_epoch": 1694744100,
            "last_updated": "2023-09-14 22:15",
            "temp_c": 28.0,
            "temp_f": 82.4,
            "is_day": 0,
            "condition": {
                "text": "Partly cloudy",
                "icon": "//cdn.weatherapi.com/weather/64x64/night/116.png",
                "code": 1003
            },
            "wind_mph": 6.9,
            "wind_kph": 11.2,
            "wind_degree": 170,
            "wind_dir": "S",
            "pressure_mb": 1012.0,
            "pressure_in": 29.88,
            "precip_mm": 0.0,
            "precip_in": 0.0,
            "humidity": 94,
            "cloud": 50,
            "feelslike_c": 33.0,
            "feelslike_f": 91.5,
            "vis_km": 10.0,
            "vis_miles": 6.0,
            "uv": 1.0,
            "gust_mph": 3.4,
            "gust_kph": 5.4
        }
    }
    document.getElementsByClassName("main")[0].innerHTML = `${weatherInfo.current.temp_c} °C`;
    document.getElementsByClassName("mainsub")[0].innerHTML = `${weatherInfo.location.region},${weatherInfo.location.country}`;
    document.getElementsByClassName("humiditytext")[0].innerHTML = `Humidity<br>${weatherInfo.current.humidity}%`;
    document.getElementsByClassName("airtext")[0].innerHTML = `Wind<br>${weatherInfo.current.wind_kph}`;
});
