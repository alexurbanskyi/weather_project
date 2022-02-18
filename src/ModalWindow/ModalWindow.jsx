import React from 'react'
import './ModalWindow.css'

function ModalWindow({children, show}) {
  return (
   // <div className={!show ? 'modal': ['modal','active'].join(' ')}>
   <div className={!show ? 'modal-close': 'modal-show'}>
   {
    children
   }
   </div>
  )
}

export default ModalWindow