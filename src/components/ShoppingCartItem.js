import React from 'react'
import { useShoppingCart } from '../contexts/ShoppingCartContext'

const ShoppingCartItem = ({item}) => {

  const { incrementQuantity, decrementQuantity, removeItem } = useShoppingCart
  return (
    <div className='cartitem-item'>
      <div className='cartitem-image'>
        <img src={item.product.imageName} alt={item.product.name} />
      </div>
      <div className='cartitem-info'>
        <div className='cartitem-info-name'>{item.product.name}</div>
        <div className='cartitem-qty'>
          <button onClick={() => incrementQuantity(item)}>+</button>
          <span>{item.quantity}</span>
          <button onClick={() => decrementQuantity(item)}>-</button>
        </div>
      </div>
      <div className='item-price'>
        <div>{item.product.price * item.quantity}</div>
        <button onClick={() => removeItem(item.articleNumebr)}><i class="fa-regular fa-trash-can"></i></button>
      </div>
    </div>
  )
}

export default ShoppingCartItem