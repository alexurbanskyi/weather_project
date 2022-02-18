import React, { useEffect, useState } from 'react'
import ChangeColor from '../../utilits/ChangeColor'
import s from './Weather.module.css'
import './Weather.css'
import tempLogo from '../../img/temp_logo.png'
import Loader from '../Loader/Loader';

function Weather({cityId}) {
let [weatherData, SetWeatherData] = useState({});
 
useEffect(() => {
   fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=metric&appid=191434b87648073ccd31963c4dc456d1&lang=ru`)
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
if (Object.keys(weatherData).length === 0 ) return  <Loader/>

  return (
   
  <div className={s['curreny-weather']}>
      <p className={s['city-name']}>{weatherData.cityName}</p> 
    <div className={s['current-wrapper']}>
      <div className={s['head-wrapper']}>
        <div className={s['descript-wraper']}>
          <p className={s.descript}>{weatherData.description}</p>
          {<img className={s.icon} src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`} alt="logo" />}
        </div>
        <div className={s['temp-wrapper']}>
          <p className={s.temp}><span style={{color: ChangeColor(weatherData.temp)}}>{Math.round(weatherData.temp)}</span></p>
          <img className={s['temp-logo']} src={tempLogo} alt="temp-logo" />
        </div>
      </div>
     
  </div>
  <p className='feels'>Ощущаеться как {weatherData.feels_like}</p>
    
    <p className={s['eee']}>Максимальная Температура{weatherData.temp_max}</p>
    <p>{weatherData.temp_min}</p>
    <p>{weatherData.humidity}</p>
    
    {/* <p className={classes['sity-name']}> {data.name}</p>
    <p className={classes.temp}> Температура  <span style={{color: ChangeColor(Math.round(data.main?.temp))}}>{Math.round(data.main?.temp)}</span> &deg;C</p>
    <p className={classes['feel-like']}> Ощущается как  <span style={{color: ChangeColor(Math.round(data.main?.feels_like))}}>{Math.round(data.main?.feels_like)}</span> &deg;C</p>
    {<img className={classes.icon} src={`https://openweathermap.org/img/wn/${icon[0]?.icon}@2x.png`} alt="logo" />}
   <p className={classes.descript}>{icon[0]?.description}</p> */}
</div>
  )
}

export default Weather