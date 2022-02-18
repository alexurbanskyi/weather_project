import React from 'react'
import s from './Loader.module.css'

function Loader() {
  return (
   <div className className="my-win">
     <div className = {s['my-win-int']}></div>
     <div className = {s['my-win-ext']}></div>
   </div>
   )
}

export default Loader