import React from 'react'
import './Burger.css'

function Burger({show, SetShow}) {
  console.log('show from burger',show)
  return (
    <div onClick={() => {
      !show ? SetShow(true) : SetShow(false)
      console.log(show)
    }} className={ show ? 'burger' : ['burger', 'close'].join(' ')}>
       <span></span>
   </div>
  )
}

export default Burger