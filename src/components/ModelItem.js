import React from 'react'


const model_item = ({item}) => {
  return (
    <>
        <div className="col">
            <div className='card'>
                <div className="featured-body">
                    <img className='model-item-img' src={item.imageName} alt={item.name} />
                    <ul className="arrivals-menu">
                        <li><button href="#"><i className="fa-solid fa-heart"></i></button></li>
                        <li><button href="#"><i className="fa-solid fa-shuffle"></i></button></li>
                        <li><button href="#"><i className="fa-solid fa-cart-shopping"></i></button></li>
                    </ul>
                    <a className="featured-btn" href="#">quick view</a>
                </div>
                <div className="featured-grid-info">
                    <h4>{item.category}</h4>
                    <h3>{item.name}</h3>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <p>${item.price}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default model_item