
import React, { useContext } from 'react'
import ProductCard from '../components/ProductCard'
import { ProductContextType, useProductContext } from '../context/ProductContexts'
import { ProductItem } from '../models/productModell'

interface FlashsaleSectionType {
  title: string
  items: ProductItem[]
}


const FlashsaleSection:React.FC<FlashsaleSectionType> = ({title, items =[]}) => {


  return (
    <section className="__flashsales container">
    <div className="__flashsales-box">
        <div className="__flashsales-body">
        <h1 className="__flashsales-title">2 FOR USD $29</h1>
        <button className="__btn-theme-white">
            <span className="__btn-theme-left-white"></span>
            <span className="__btn-theme-right-white"></span>
           FLASE SALE
        </button>
    </div>
    </div>
    <div className="product-grid">
    <div className="container">
        <h1>{title}</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          
         {
          items.map( product => <ProductCard key={product.articleNumber} item={product} />)
         }
    </div>
</div>
</div>
</section>

  )
}

export default FlashsaleSection