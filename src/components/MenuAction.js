import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuAction = ({linkAdress, faIcon, qty}) => {
  return (
    <> 
    <li className='position-relative'><NavLink to={linkAdress} end><i className={faIcon}></i><span id="counter-1">{qty}</span></NavLink></li>
    </>
  )
}

export default MenuAction