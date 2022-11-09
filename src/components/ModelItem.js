import React from 'react'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../contexts/ShoppingCartContext'


const model_item = ({item}) => {
    const { incrementQuantity } = useShoppingCart()
  return (
    <>
        <div className="col">
            <div className='card'>
                <div className="category-grid-body w-100">
                    <img className='model-item-img' src={item.imageName} alt={item.name} />
                    <ul className='arrivals-menu'>
                        <li><button href="#"><i className="fa-solid fa-heart"></i></button></li>
                        <li><button href="#"><i className="fa-solid fa-shuffle"></i></button></li>
                        <li><button onClick={() => incrementQuantity({articleNumber: item.articleNumber, product: item})} ><i className="fa-solid fa-cart-shopping"></i></button></li>
                    </ul>
                    <NavLink to={`/product/${item.articleNumber}`} className="featured-btn">quick view</NavLink>
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