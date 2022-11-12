import React from 'react'
import { useShoppingCart } from '../contexts/ShoppingCartContext'

const ShoppingCartItem = ({item}) => {

  const { incrementQuantity, decrementQuantity, removeItem } = useShoppingCart()
  return (
    <div className='cartitem'>
      <div className='cartitem-image'>
        <img src={item.product.imageName} alt={item.product.name} />
      </div>
      <div className='cartitem-info'>
        <div className='cartitem-name'>{item.product.name}</div>
        <div className='cartitem-qty'>
          <button className='cart-btn' onClick={() => decrementQuantity(item)}><i class="fa-solid fa-minus"></i></button>
          <span>{item.quantity}</span>
          <button className='cart-btn' onClick={() => incrementQuantity(item)}><i class="fa-solid fa-plus"></i></button>
          <button className='cart-btn' onClick={() => removeItem(item)}><i class="fa-solid fa-trash-can"></i></button>
        </div>
      </div>
      <div className='item-price'>
        <div>${item.product.price * item.quantity}</div>
      </div>

    </div>
  )
}

export default ShoppingCartItem