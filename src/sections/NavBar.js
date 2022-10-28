import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

    const [showMenu, setShowMenu] = useState(false);

        const toggleMenu = () => {
                setShowMenu(!showMenu);
            };

  return (
    <div className="meny">
        <div className="container-xxl">
            <div className="meny-container">
                <menu className="meny-body">
                    <div className="meny-logo">
                        <h1>Fixxo.</h1>
                    </div>
                    <ul className={`meny-link-body ${ showMenu ? "d-flex" : ""}`}>
                        <li><NavLink to="/" end>Home</NavLink></li>
                        <li><NavLink to="/categories" end>Categories</NavLink></li>
                        <li><NavLink to="/product" end>Product</NavLink></li>
                        <li><NavLink to="/contact" end>Contact</NavLink></li>
                    </ul>
                    <ul className="meny-button d-flex">
                        <li><NavLink to="#" end><i className="fa-solid fa-search" ></i></NavLink></li>
                        <li><NavLink to="#" end><i className="fa-solid fa-shuffle"></i></NavLink></li>
                        <li className="position-relative"><NavLink  to="#" end> <i className="fa-solid fa-heart"></i><span id="counter-1">6</span></NavLink></li>
                        <li className="position-relative"><NavLink  to="#" end> <i className="fa-solid fa-bag-shopping"></i><span id="counter-2">9</span></NavLink></li>
                    </ul>
                    <div onClick={toggleMenu} className="meny-btn">
                        <i className={`fa-solid fa-bars ${ showMenu ? "d-none" : ""}`}></i>
                        <i className={`fa-solid fa-xmark ${ showMenu ? "" : "d-none"}`}></i>
                    </div>
                </menu>
            </div>
        </div>
    </div>

  )

}
export default NavBar