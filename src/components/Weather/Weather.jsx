import React, { useEffect, useState } from 'react'
import ChangeColor from '../../utilits/ChangeColor'
import s from './Weather.module.css'
import tempLogo from '../../img/temp_logo.png'
import Loader from '../Loader/Loader';
import {FcCollapse} from "react-icons/fc";
import { GiWindsock  } from "react-icons/gi";
import { WiHumidity } from "react-icons/wi";
import { BsArrowUp } from "react-icons/bs";

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
      pressure: Math.round(json.main.pressure),
      temp_max: Math.round(json.main.temp_max),
      temp_min: Math.round(json.main.temp_min),
      description: json.weather[0].description,
      icon: json.weather[0].icon,
      windSpeed: Math.round(json.wind.speed),
      windDeg: json.wind.deg
    }
     SetWeatherData(weatherData)
   })
},[cityId])
if (Object.keys(weatherData).length === 0 ) return  <Loader/>

  return (
   
  <div className={s['curreny-weather']}>
      <p className={s['city-name']}>{weatherData.cityName}</p> 
  <div className={s.container}>
      <div className={s['current-wrapper']}>
        <div className={s['head-wrapper']}>
          <div className={s['descript-wraper']}>
          
            <p className={s.descript}>{weatherData.description}</p>
            {<img className={s.icon} src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`} alt="logo" />}
          </div>
          <div className={s['temp-wrapper']}>
            <p className={s.temp}><span style={{color: ChangeColor(weatherData.temp)}}>{weatherData.temp}</span></p>
            <img className={s['temp-logo']} src={tempLogo} alt="temp-logo" />
          </div>
        </div>
        <p className={s.feels}>Ощущается как <span style={{color: ChangeColor(weatherData.feels_like)}}>{weatherData.feels_like}</span> &deg;C</p>
        
        <div className={s['min-max-wrapper']}>
          <div className={s['min-max-block']}>
            <p>MAX</p>
            <FcCollapse size={'2rem'}/>
            <p className={s['min-max-temp']}><span style={{color: ChangeColor(weatherData.temp_max)}}>{weatherData.temp_max}</span> &deg;C</p>
          </div>

          <div className={s['min-max-block']}>
            <p>MIN</p>
            <FcCollapse  className={s.down} size={'2rem'} />
            <p className={s['min-max-temp']}><span style={{color: ChangeColor(weatherData.temp_min)}}>{weatherData.temp_min}</span> &deg;C</p>
          </div>
        </div>
        <div className={s['param-wrapper']}>
          <WiHumidity size={'3rem'}/>
          <p>Влажность <span> {weatherData.humidity }</span> %</p>
        </div>
        <div className={s['param-wrapper']}>
          <GiWindsock size={'3rem'}/>
          <p>Скорость ветра <span> {weatherData.windSpeed} </span> м/с</p>
        </div>
        <div className={s['param-wrapper']}>
          <div>
            <p className={s.north}>N</p>
              <div className={s['wind-deg']}>
                <BsArrowUp  className={s['wind-arrow']} style={{ transform: `rotate(${weatherData.windDeg}deg)`}} size={'2rem'}/>
              </div>
            <p className={s.south}>S</p>
          </div>
       <p>Направление ветра</p>
        </div>
        <p className={s.humidity}>Атмосферное давление <span>{Math.round(weatherData.pressure*0.75)}</span> мм рт. ст.</p>
    </div>
  </div>
</div>
  )
}

export default Weather