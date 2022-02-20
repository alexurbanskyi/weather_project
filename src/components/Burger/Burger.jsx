import React from 'react'
import './Burger.css'

function Burger({show, SetShow}) {
  
  return (
    <div onClick={() => {
      !show ? SetShow(true) : SetShow(false)
      
    }} className={ !show ? 'burger' : ['burger', 'close'].join(' ')}>
       <span></span>
   </div>
  )
}

export default Burger