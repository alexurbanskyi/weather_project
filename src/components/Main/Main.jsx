import React from 'react'
import s from './Main.module.css'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

export default function Main({show}) {
  
  return (
  <div className={s['main-wrapper']}>
      <Header/>
      <div className={s.outlet}>
        <Outlet/>
      </div>
      <Footer/>
  </div>
  )
}
