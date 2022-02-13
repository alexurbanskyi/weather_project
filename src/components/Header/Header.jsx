import React from "react";
import style from './Header.module.css'
import './Header.css'
import logo_icon from '../../img/logo.png'
import { NavLink } from "react-router-dom";

const HEADER_LIST = [
   {hashtag: '/', menuName: 'Города'},
   {hashtag: '/weather', menuName: 'Погода'},
   {hashtag: '/forecast', menuName: 'Прогноз'},
   {hashtag: '/graph', menuName: 'График'},
   
]

function Header(){
   return(
      <div className={style.header}>
         <div className={style.logo}>
            <img className={style['logo-img']} src={logo_icon} alt="logo" />
            <p className={style.title}>
               UrbanWeather
            </p>
         </div>
         <nav className={style.nav}>
            <ul className={style['nav-list']}>
              {HEADER_LIST.map(item => <li key={item.hashtag}><NavLink className={style.link} to={item.hashtag}>{item.menuName}</NavLink></li>)}
            </ul>
         </nav>
      </div>
   );
}
export default Header;
