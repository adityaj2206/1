const apiKey = "517039baf8c1b31935d6338bbf71f57e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function  checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weathericon.src = "images/clouds.png";
    }
    if(data.weather[0].main == "Clear"){
        weathericon.src = "images/clear.png";
    }
    if(data.weather[0].main == "Drizzle"){
        weathericon.src = "images/drizzle.png";
    }
    if(data.weather[0].main == "Rain"){
        weathericon.src = "images/rain.png";
    }
    if(data.weather[0].main == "Mist"){
        weathericon.src = "images/mist.png";
    }
    if(data.weather[0].main == "Snow"){
        weathericon.src = "images/snow.png";
    }

    document.querySelector(".weather").style.display = "block";

    }
    
}

searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
})

