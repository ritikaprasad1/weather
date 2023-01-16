const API_KEY="a820421509654eb2bf054217231601"

let search = document.querySelector(".search-btn")
let input = document.querySelector("input")
let h1 = document.querySelector("h1")
let h2 = document.querySelector("h2")

let container = document.querySelector(".card")
let descripton = document.querySelector(".descri")
let humidity = document.querySelector(".humidity")
let wind = document.querySelector(".wind")

async function getWeather(e){
    e.preventDefault()


    const res = await fetch('https://api.weatherapi.com/v1/current.json?key=a820421509654eb2bf054217231601&q=$(input)&aqi=yes')
    const data = await res.json()
    
    let temperature =data.current.temp_c
    let cityName = data.location.name
    let hum = data.current.humidity
    let speed = data.current.wind_kph
    
    h1.innerText = "Weather in" + cityName
    h2.innerText = temperature+"°C"
    humidity.innerText = "Humidity : "+hum+"%"
    wind.innerText ="Wind Speed : "+speed+"km/hr"
    // image.setAttribute("src" , imageUrl)
    
    console.log(data.location.name);


    form.reset()
}


search.addEventListener("submit", getWeather)