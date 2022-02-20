import React from 'react'
import { Link } from 'react-router-dom'
import './ModalWindow.css'

function ModalWindow({show, SetShow}) {
   console.log('from Modal',show)
  return (
    <div className={ show ? 'modal-close' :  'modal-show'}>
      <div className='link-block'>
        <Link className='modal-link' onClick={()=>SetShow(true)} to='/' >Поиск</Link>
        <Link className='modal-link' onClick={()=>SetShow(true)} to='/weather'>Погода</Link>
        <Link className='modal-link' onClick={()=>SetShow(true)} to='/forecast' >Прогноз</Link>
        <Link className='modal-link' onClick={()=>SetShow(true)} to='/graph' >График</Link>
      </div>
   </div>
  )
}

export default ModalWindow