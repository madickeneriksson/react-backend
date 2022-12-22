import React from 'react'
import ProductCard from '../components/ProductCard'
import { ProductItem } from '../models/ProductItemModel'

interface ExtraPriceSectionType {
  title: string
  items: ProductItem[]
}


const ExtraPriceSection: React.FC<ExtraPriceSectionType>  = ({title, items =[]}) => {


  return (
    <div className="__flashsales container">
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

</div>

 
  )
}

export default ExtraPriceSection