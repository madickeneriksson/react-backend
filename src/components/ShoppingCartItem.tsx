import React from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext'

const ShoppingCartItem = ({item}) => {
    const { incrementQuantity, decrementQuantity, removeItem } = useShoppingCart
  return (
    <div className="shoppingcart-item">
        <div className="item-img">
            <img src={item.product.imageName} alt={item.product.name} />
        </div>
        <div className="item-info">
            <div className="item-info-name">{item.product.name}</div>

            <div className="item-info-quantity">
                <button onClick={() => incrementQuantity(item)}>+</button>
                <span>{item.quantity}</span>
                <button onClick={() => decrementQuantity(item)}>-</button>
            </div>
        </div>
        <div className="item-price">
        <div>{item.product.price  * item.quantity}</div>
        <button onClick={() => removeItem(item.articleNumber)}><i class="fa-regular fa-trash"></i></button>
        </div>
    </div>
  )
}

export default ShoppingCartItem