import React, { useState } from 'react';
import CreateProducts from '../components/CreateProducts';
import ProductProvider from '../context/CreateProductContext';
import UpdateProduct from '../components/UpdateProduct';
import ProductList from '../components/ProductList';
import MainMenuSection from '../sections/MainMenuSection';
// import { ProductList } from './models/CreateProductsModel';

// const [productList, setProductList] = useState<string>('')
// // const [productsList, setProductsList] = useState<ProductList[]>([])

// const handleSubmit = (e: React.FormEvent ) => {
  
//   e.preventDefault()

//     // setProductsList(currentProductsList => [...currentProductsList, { articleNumber: Date.now(), text: productList, isCompleted: false }])
//     setProductList ('')
// }

function CreateProductsWiew() {
  return (
    <ProductProvider>
      <div className="container mt-5">
        < MainMenuSection />
        < CreateProducts/>
        <UpdateProduct />
        <ProductList />


      </div>

    </ProductProvider>
  
  );
}

export default CreateProductsWiew;