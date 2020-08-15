

const api = {
    key:"80da49836e91556e9c33d68907149426",
    base: "https://api.openweathermap.org/data/2.5/"
}


const searchButton = document.getElementById("search-button")
searchButton.addEventListener("click", function() {
    let inputBox = document.getElementById("input-box")
    
    if(inputBox.value == "") {
        alert("Please enter a location for weather...  ")
    }
    else {
        getWeatherReport(inputBox.value)
    }
});




function getWeatherReport(city) {
    fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json()
    })
    .then(displayResults)
}

function displayResults(weather) {
   
    let cityName = document.getElementById("city")
    cityName.innerText = weather.name
    
    let changeTemperature = document.getElementById("Temperature")
    changeTemperature.innerText = weather.main.temp;
   
    let situation = document.getElementById('situation');
    situation.innerText = weather.weather[0].main;

    let situationImage = '';
    if(weather.weather[0].main == "Haze") {
        situationImage = document.getElementsByTagName("img")[0].setAttribute("src", "https://openweathermap.org/img/wn/02d@2x.png")
    }
    else if(weather.weather[0].main =="Rain") {
        situationImage = document.getElementsByTagName("img")[0].setAttribute("src", "https://icon-library.com/images/raining-icon/raining-icon-1.jpg")
    }
    else if(weather.weather[0].main == "Winter") {
        situationImage =document.getElementsByTagName("img")[0].setAttribute("src", "https://i.pinimg.com/originals/a7/e3/2d/a7e32d46f3534528608d88e4a9043721.png")
    }
    else if(weather.weather[0].main == "Drizzle") {
        situationImage = document.getElementsByTagName("img")[0].setAttribute("src", "https://image.flaticon.com/icons/svg/1113/1113868.svg")
    }
}




