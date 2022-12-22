import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ProductDetails from '../sections/ProductDetails'
import { ProductContextType, useProductContext } from '../context/ProductContexts'

const ProductsDetailsView: React.FC = () => {
    const {id} = useParams<string>()
    const productContexts = useProductContext() as ProductContextType

    useEffect(() => {
        productContexts.get(id)
    }, [])

    document.title = ' Product Details - Fixxo.'

    return (
    <>
        <MainMenuSection />
        <BreadcrumbSection currentPage={productContexts.product.name} />
        <div className="container d-flex justify-content-center align-items-center" style= { { height: "500px" } }>
      <h1>Product Details</h1>
      </div>
         <ProductDetails item={productContexts.product} /> 
    </>
  )
}

export default ProductsDetailsView