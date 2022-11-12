import React from 'react'
import { useShoppingCart } from '../contexts/ShoppingCartContext'
import ShoppingCartItem from './ShoppingCartItem'

const ShoppingCart = () => {

  const {cartItems} = useShoppingCart()
  return (
    <>
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="shoppingCart" aria-labelledby="shoppingCartLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="shoppingCartLabel">Cart</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          {
            cartItems.map(item => (<ShoppingCartItem key={item.articleNumber} item={item} />))
          }
        </div>
        <button className='checkout-btn'>Proceed to Checkout</button> 
      </div>
    </>
  )
}

export default ShoppingCart