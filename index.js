

const apikey = "863242cfb2b1d357e6093d9a4df19a4b ";  // url+uri+
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&";

const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch( apiurl + 'q=' + city + `&appid=${apikey}` );
    var data = await response.json();

    console.log(data);

    if(data.name == undefined){
        alert("Data Not Found \nEnter Another City Name");
    }
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"; 
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
   
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";  
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";  
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";  
    }
    else if(data.weather[0].main == "Wind"){
        weatherIcon.src = "images/wind.png";  
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png";  
    }
    else if(data.weather[0].main == "Drizzel"){
        weatherIcon.src = "images/drizzle.png";  
    }
    else{
        weatherIcon.src = "images/clear.png"; 
    }

    document.querySelector(".weather").style.display = "block";
}


searchBox.addEventListener("keypress", (ev)=>{
    if (ev.key === "Enter") {
         checkWeather(searchBox.value);
        // event.preventDefault();
      }
})

// both options are available
searchbtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
}) 


searchBox.addEventListener('input', ()=>{
    if(searchBox.value === 0){
        document.querySelector(".weather").style.display = "none";
    }
})

    searchBox.addEventListener('input', ()=>{
    console.log( searchBox.value);
    if(searchBox.value === ''){
        document.querySelector(".weather").style.display = "none";
    }})

// KeyPoints: ==>
// getElementbyId(): Is compalsory used when we want to declared style(css) using JavaScript of particular that element.




