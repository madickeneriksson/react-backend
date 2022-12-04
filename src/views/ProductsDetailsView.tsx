import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ProductDetails from '../sections/ProductDetails'
import { ProductContextType, useProductContext } from '../context/ProductContexts'

const ProductsDetailsView: React.FC = () => {
    const {id} = useParams<string>()
    const ProductContexts = useProductContext() as ProductContextType

    useEffect(() => {
        ProductContexts.get(id)
    }, [])

    document.title = ' Product Details - Fixxo.'

    return (
    <>
        <MainMenuSection />
        <BreadcrumbSection currentPage={ProductContexts.product.name} />
        <div className="container d-flex justify-content-center align-items-center" style= { { height: "500px" } }>
      <h1>Product Details</h1>
      </div>
         <ProductDetails item={ProductContexts.product} /> 
    </>
  )
}

export default ProductsDetailsView