const API = "d5f763d0081fb539d40c1801d2ced535";
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

function onGeoOk(pos){
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;    
            city.innerText = data.name;
        });
};

function onGeoError(){
    alert("Can't fine you. No weather for u");
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
