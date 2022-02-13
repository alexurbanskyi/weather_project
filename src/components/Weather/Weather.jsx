import React from 'react'
import CityCurrentWeather from '../CityCurrentWeather/CityCurrentWeather'


function Weather({cityId, weatherData, SetWeatherData}) {
  return (
    <div>
     <p> Сдесь будет текущая погода dbdgbgdgbdg</p>    
     <CityCurrentWeather cityId={cityId} weatherData={weatherData} SetWeatherData={SetWeatherData}/>
    </div>
  )
}

export default Weather