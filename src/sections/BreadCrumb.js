import React from 'react'
import { NavLink } from 'react-router-dom'

const BreadCrumb = ({currentPage}) => {
  return (
    <div className='container-xxl'>
      <div className='d-flex align-items-center mt-5'>
        <ul className='breadcrumb'>
          <NavLink className='home' to='/'><i className='fa-solid fa-house'></i>Home</NavLink>
          <li className='current-page'>{currentPage}</li>
        </ul>
      </div>
    </div>
  )
}

export default BreadCrumb