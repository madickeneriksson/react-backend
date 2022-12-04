import React from 'react'
import { ShoppingCartContextType, useShoppingCartContext } from '../context/ShoppingCartContext'
import { CartItem } from '../models/ShoppingCartModel'
import { currencyFormatter } from '../utilities/currencyFormatter'

interface ShoppingCartItemType {
    item: CartItem
}

const ShoppingCartItem: React.FC<ShoppingCartItemType> = ({item}) => {
    const { incrementQuantity, decrementQuantity, remove } = useShoppingCartContext () as ShoppingCartContextType

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
        <div>{currencyFormatter (item.product.price  * item.quantity)}</div>
        <button onClick={() => remove(item.articleNumber)}><i className="fa-regular fa-trash"></i></button>
        </div>
    </div>
  )
}

export default ShoppingCartItem