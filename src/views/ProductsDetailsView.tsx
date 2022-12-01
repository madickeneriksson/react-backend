import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ProductDetails from '../sections/ProductDetails'

const ProductsDetailsView = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`https://win22-webapi.azurewebsites.net/api/products/${id}`)
            setProduct(await result.json())
        }
        fetchData()
    }, [])

    window.top.document.title = ' Product Details - Fixxo.'

    return (
    <>
        <MainMenuSection />
        <BreadcrumbSection currentPage="Product Details" />
        <div className="container d-flex justify-content-center align-items-center" style= { { height: "500px" } }>
      <h1>Product Details</h1>
      </div>
         <ProductDetails item={product} /> 
    </>
  )
}

export default ProductsDetailsView