import React, { useState } from 'react'
import Select from 'react-select'
import s from './City.module.css'
// import BigCityWeather from '../BigCityWeather/BigCityWeather'
import CityList from '../../CitiId/city_list'
import { Link } from 'react-router-dom'
import CitySlider from '../../Slider/Slider'
import { FcSearch } from "react-icons/fc";


// компонент для отображения главной страницы
function City({cityId, SetCityId }) {
  
  let [country, SetCountry] = useState('UA') 
  
  let searchCountry = []
   searchCountry = CityList.filter(item => item.country === country )  
   
  // массив для SELECT поиск по городам и странам
  const searchUkrainCity = []
  CityList.map(item => searchUkrainCity.push({value:item.id, label:item.name})) 
  const optionsCity = searchUkrainCity
  const optionsCountry = [
    {
      value: 'UA',
      label: "Украина",
    },
    {
        value: 'RU',
        label: "Россия",
    },
    {
        value: 'FR',
        label: "Франция",
    },
    {
        value: 'DE',
        label: "Германия",
    },
    {
        value: 'IT',
        label: "Италия",
    },
  ]

  // Создание текущей даты
  let date = new Date()
  let currentData = new Intl.DateTimeFormat('ru', {weekday:"long", day:'2-digit', month:'long', year:'numeric' }).format(date);
  
//  стили для Select
const colourStyles= {
  control: (styles) => ({
     ...styles, 
     backgroundColor: 'rgb(207, 229, 255)',
     border: 'none',
     borderRadius: '10px',
     width: '200px',
     fontWeight: 800,
    })
}
  
  
  return (
    <div className={s['city-wrapper']}>
{/* текущая дата */}
      <div className={s.date}>{currentData}</div>


      {/* поиск по странам    */}
      <div className={s['country-wrapper']}>
        <Select  styles={colourStyles} className={s['select-country']} placeholder={'Украина'} options={optionsCountry} onChange={(e) => {
          SetCountry(e.value)
          
          } }/>
      </div>

   <CitySlider searchCountry={searchCountry} SetCityId={SetCityId} />  

{/* Поиск по всем возможным городам */}
      <div className={s['city-wrapper']}>
       <div className={s['select-wrapper']}>
          <Select className={s['select-city']} placeholder={'Введите название города'} options={optionsCity} onChange={(e) => SetCityId(e.value)}/>
          <Link className={s['search-icon']} to={'/weather'}><FcSearch size={'3rem'}/></Link>
        </div>
      </div>
    </div>
  )
}
export default City