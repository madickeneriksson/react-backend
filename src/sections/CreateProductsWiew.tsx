import React, { useState } from 'react';

import ProductsList from '../components/ProductsList';
import CreateProducts from '../components/CreateProducts';
import UserProvider from '../context/UserContext';
import { ProductList } from '../models/productsListModel';



export const CreateProductsWiew:React.FC = () => {
  const [productList, setProductList] = useState<string>('')
const [productsList, setProductsList] = useState<ProductList[]>([])

const handleSubmit = (e: React.FormEvent ) => {
  e.preventDefault()

    setProductsList(currentProductsList => [...currentProductsList, { id: Date.now(), text: productList, isCompleted: false }])
    setProductList ('')
}
  return (
    <>
    <div className="container mt-3">
      < CreateProducts productList={productList} setProductList={setProductList} handleSubmit={handleSubmit} />
      < ProductsList items={productsList} /> 
    </div>

  </>
  )
}

export default CreateProductsWiew