const apiKey = "1e47e755714de8858e65c1f992db107b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


async function checkWeather(city){
    const response = await fetch(apiUrl + city + "&appid="+apiKey)
    var data = await response.json()

    console.log(data)

 document.querySelector(".cityy").innerHTML = data.name
 document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C°F"
 document.querySelector(".humidity").innerHTML = data.main.humidity
 document.querySelector(".wind").innerHTML = data.wind.speed +"Km / hr"

 if(data.weather[0].main == 'Clouds'){
    icon.src ="img/clouds.png"
 }
 else if(data.weather[0].main == 'Clear'){
    icon.src="img/clear.png"
 }
 else if(data.weather[0].main == 'Rain'){
    icon.src = "img/rain.png"
 }
 else if(data.weather[0].main == 'Drizzle'){
    icon.src = "img/drizzle.png"
 }
 else if(data.weather[0].main == 'Mist'){
    icon.src = "img/mist.png"
 }
}
 var cityname = document.querySelector(".city")
 var citybutton = document.querySelector(".butt")
 var icon = document.querySelector(".weather-icon")
 citybutton.addEventListener('click', ()=>{
    checkWeather(cityname.value)
 })