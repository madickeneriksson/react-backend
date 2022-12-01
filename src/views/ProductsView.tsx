import React, { useContext } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ProductGridSection from '../sections/ProductGridSection'
import { ProductContext } from '../context/ProductContexts'



const ProductsView: React.FC = () => {
  window.top.document.title = 'Products - Fixxo.'
  const products = useContext(ProductContext);
  
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