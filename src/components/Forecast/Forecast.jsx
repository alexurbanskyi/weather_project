import React from 'react'
import s from './Forecast.module.css'
import ChangeColor from '../../utilits/ChangeColor'

function Forecast({fiveDaysData}) {
 if (Object.keys(fiveDaysData).length === 0 ) return  (<p>LOOOOOOAD!!!!</p>)
  console.log(fiveDaysData)
 let arrData = fiveDaysData.arr
 console.log(arrData)
       
  return (
    <div className={s['forecast-wrapper']}>
      <div className={s['city-name']}>{fiveDaysData.name}</div>
      <div className={s['forecast-title']}>прогноз погоды на 5 дней </div>
      <div className={s['card-wrapper']}>
      {arrData.map(item => 
      <div className={s.card} key={item.dt_txt}>
        <p className={s['forecast-date']}> {item.dt_txt.slice(0,10)} </p>
        <p className={s['forecast-time']}>{item.dt_txt.slice(10)} </p>
        
        <div className={s['temp-wrapper']}>
          {<img className={s.icon} src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="logo" />}
          <p className={s.temp}><span style={{color: ChangeColor(item.main.temp) }}>{Math.round(item.main.temp)}</span>&deg;C</p>
        </div>
      </div>)}
      </div>
    </div>
  )
}

export default Forecast