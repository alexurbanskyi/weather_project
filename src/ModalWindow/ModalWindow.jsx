import React from 'react'
import { Link } from 'react-router-dom'
import './ModalWindow.css'

function ModalWindow({show, SetShow}) {
  return (
    <div className={ !show ? 'modal-close' :  'modal-show'}>
      <div className='link-block'>
        <Link className='modal-link' onClick={()=>SetShow(false)} to='/' >Поиск</Link>
        <Link className='modal-link' onClick={()=>SetShow(false)} to='/weather'>Погода</Link>
        <Link className='modal-link' onClick={()=>SetShow(false)} to='/forecast' >Прогноз</Link>
        <Link className='modal-link' onClick={()=>SetShow(false)} to='/graph' >График</Link>
      </div>
   </div>
  )
}

export default ModalWindow