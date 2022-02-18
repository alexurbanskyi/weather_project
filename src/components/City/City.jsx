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
  
   console.log(country)
  let searchCountry = []
   searchCountry = CityList.filter(item => item.country === country )  
   console.log(searchCountry)
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
        console.log(e.value)
        } }/>
      </div>

   <CitySlider searchCountry={searchCountry} SetCityId={SetCityId} />  

<div className='stt'>fdfdfsd</div>

 {/* Блок вывода карточек больших городов */}
      {/* <div className={s['card-wrapper']}> 
        {searchCountry.map(item =><div key={item.id}><Link to="/weather"><BigCityWeather SetCityId={SetCityId} id={item.id}/></Link></div>)}
      </div> */}
{/* Поиск по всем возможным городам */}
      <div className={s['city-wrapper']}>
       <div className={s['select-wrapper']}>
          <Select className={s['select-city']} placeholder={'Введите название города'} options={optionsCity} onChange={(e) => {SetCityId(e.value)
          console.log(e)
          } }/>
          <Link to={'/weather'}><FcSearch size={'3rem'} onClick={()=>console.log('ICON')}/></Link>
        </div>
      </div>
    </div>
  )
}
export default City