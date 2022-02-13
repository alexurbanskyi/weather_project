import React, { useEffect } from 'react'

function CityCurrentWeather({cityId, weatherData, SetWeatherData}){
   useEffect(() => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=metric&appid=1626dd61d3c09e3b285d1fb480246f3a&lang=ru`)
      .then(response => response.json())
      .then(json =>{
        
        let weatherData = {
         cityName : json.name,
         temp: Math.round(json.main.temp),
         feels_like: Math.round(json.main.feels_like),
         humidity: json.main.humidity,
         pressure: json.main.pressure,
         temp_max: Math.round(json.main.temp_max),
         temp_min: Math.round(json.main.temp_min),
         description: json.weather[0].description,
         icon: json.weather[0].icon,
         windSpeed: Math.round(json.wind.speed)
       }
        SetWeatherData(weatherData)
     })
   },[cityId])
 return(
   <div>
       <p>{weatherData.cityName}</p> 
       <p>{weatherData.temp}</p>
       <p>{weatherData.temp_max}</p>
       <p>{weatherData.temp_min}</p>
       <p>{weatherData.humidity}</p>
       
       {/* <p className={classes['sity-name']}> {data.name}</p>
       <p className={classes.temp}> Температура  <span style={{color: ChangeColor(Math.round(data.main?.temp))}}>{Math.round(data.main?.temp)}</span> &deg;C</p>
       <p className={classes['feel-like']}> Ощущается как  <span style={{color: ChangeColor(Math.round(data.main?.feels_like))}}>{Math.round(data.main?.feels_like)}</span> &deg;C</p>
       {<img className={classes.icon} src={`https://openweathermap.org/img/wn/${icon[0]?.icon}@2x.png`} alt="logo" />}
      <p className={classes.descript}>{icon[0]?.description}</p> */}
   </div>
 );
 }
 export default CityCurrentWeather