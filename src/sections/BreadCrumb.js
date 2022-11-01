import React from 'react'
import { NavLink } from 'react-router-dom'

const BreadCrumb = ({currentPage}) => {
  return (
    <div className="container-xxl">
      <div className="d-flex align-items-center mt-5">
        <ul class="breadcrumb">
          <li className='home'><NavLink to="/"><i className="fa-solid fa-house"></i>Home</NavLink></li>
          <li className='active'>{currentPage}</li>
        </ul>
      </div>
    </div>

/*  <div className="container-xxl">
        <div className="d-flex align-items-center mt-5">
            <ul className="breadcrumb">
                <li className="home"><NavLink to="/"><i className="fa-solid fa-house"></i> Home</NavLink></li>
                <li className="active">Contacts</li>
            </ul>
        </div>
    </div>  */
  )
}

export default BreadCrumb