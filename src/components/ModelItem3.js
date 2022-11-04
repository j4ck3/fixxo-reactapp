import React from 'react'


const model_item3 = () => {
  return (
    <>
        <div className="category-grid-body w-100">
            <ul className="arrivals-menu">
                <li><button href="#"><i className="fa-solid fa-heart"></i></button></li>
                <li><button href="#"><i className="fa-solid fa-shuffle"></i></button></li>
                <li><button href="#"><i className="fa-solid fa-cart-shopping"></i></button></li>
            </ul>
            <a className="featured-btn" href="#">quick view</a>
        </div>
        <div className="featured-grid-info">
            <h4>Category</h4>
            <h3>Jacket</h3>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <p>$45</p>
        </div>
    </>
  )
}

export default model_item3