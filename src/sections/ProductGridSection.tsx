
import React, { useContext } from 'react'
import ProductCard from '../components/ProductCard'
import {  ProductContextType, useProductContext  } from '../context/ProductContexts'
import { ProductItem } from '../models/productModel'

interface ProductGridSectionType {
  title: string
  items: ProductItem[]
}

const ProductGridSection: React.FC<ProductGridSectionType> = ({title, items =[]}) => {
  // const products = useContext(FlashsaleProductsContext)
 

  return (
    <section className="product-grid">
    <div className="container">
        <h1>{title}</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          
         {
          items.map( product => <ProductCard key={product.articleNumber} item={product} />)
         }
    </div>
</div>
</section>
  )
}

export default ProductGridSection