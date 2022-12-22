import React from 'react'
import { ProductItem } from '../models/ProductItemModel'



interface ProductDetailsType {
  item: ProductItem

}

const ProductDetails: React.FC<ProductDetailsType> = ({item}) => {
  return (
    <div>
        <h1>{item.name}</h1>
        <p>${item.price}</p>
        <img src={item.imageName} />
        
    </div>
    
  )
}

export default ProductDetails