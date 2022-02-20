import React, { useState } from 'react'
import s from './Main.module.css'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import ModalWindow from '../../ModalWindow/ModalWindow'

export default function Main() {
  let [show, SetShow]= useState(false);
  
  return (
  <div className={s['main-wrapper']}>
      <Header show={show} SetShow={SetShow}/>
      <div className={s.outlet}>
        <Outlet/>
      </div>
      <Footer/>

      <ModalWindow show={show} SetShow={SetShow}/>
      
  </div>
  )
}
