import React, { useEffect, useState } from 'react'
import s from './BigCityWeather.module.css'
import ChangeColor from '../../utilits/ChangeColor'

function BigCityWeather({id, SetCityId}){
   let [bigCityData, SetBigCityData] = useState({})
   
     useEffect(() => {
       fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=1626dd61d3c09e3b285d1fb480246f3a&lang=ru`)
       .then(response => response.json())
       .then(json =>{
         
         let weatherData = {
          cityName : json.name,
          temp: Math.round(json.main.temp),
          feels_like: Math.round(json.main.feels_like),
          description: json.weather[0].description,
          icon: json.weather[0].icon,
         }
         
        SetBigCityData(weatherData);
         })
    },[id])
    
    if (Object.keys(bigCityData).length === 0 ) return  (<p>LOOOOOOAD!!!!</p>)

     return(
       <div onClick={() => SetCityId(id)} className={s['city-card']}>
          <p className={s['city-name']}>{bigCityData.cityName}</p>
          <div className={s['temp-wrapper']}>
            <p className={s.temp}><span style={{color: ChangeColor(bigCityData.temp) }}>{bigCityData.temp}</span> &deg;C</p>
            {<img  src={`https://openweathermap.org/img/wn/${bigCityData.icon}@2x.png`} alt="logo" />}
          </div>
          <p className={s.description}>{bigCityData.description}</p>
         <p className={s['feels-like']}>Ощущаеться как <span style={{color: ChangeColor(bigCityData.feels_like) }}>{bigCityData.feels_like}</span> &deg;C</p>
      </div>
     );
   }
   export default BigCityWeather