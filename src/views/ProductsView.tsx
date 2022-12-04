import React, { useContext, useEffect } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ProductGridSection from '../sections/ProductGridSection'
import {  ProductContextType, useProductContext } from '../context/ProductContexts'



const ProductsView: React.FC = () => {
  document.title = ' Product View - Fixxo.'

  const {products, getProducts} = useProductContext() as ProductContextType

  useEffect(() => {
    getProducts () 
  }, [])
  
  
  return (
    <>
     < MainMenuSection />
     < BreadcrumbSection currentPage="Products" />
     < ProductGridSection title="Products" items={products} />

     <FooterSection />
  
    </>
  )
}

export default ProductsView