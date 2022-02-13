import Select from 'react-select'
import s from './City.module.css'
import BigCityWeather from '../BigCityWeather/BigCityWeather'
import UkraineCity from '../../CitiId/ukraine_city'
import { Link } from 'react-router-dom'


function City({cityId, SetCityId }) {
  
  const searchUkrainCity = []
  UkraineCity.map(item => searchUkrainCity.push({value:item.id, label:item.name})) 
  const options = searchUkrainCity

  let date = new Date()
  let currentData = new Intl.DateTimeFormat('ru', {weekday:"long", day:'2-digit', month:'long', year:'numeric' }).format(date);
  return (
    <div className={s['city-wrapper']}>
      <div className={s.date}>{currentData}</div>
      <div className={s['card-wrapper']}> 
        {UkraineCity.map(item =><div key={item.id}><Link to="/weather"><BigCityWeather SetCityId={SetCityId} id={item.id}/></Link></div>)}
      </div>
      <Select className={s.select} placeholder={'Введите название города'} options={options} onChange={(e) => SetCityId(e.value )}/>
    </div>
  )
}
export default City