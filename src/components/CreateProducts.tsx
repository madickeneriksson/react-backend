import React from 'react'
import  { IProductContext, productContext } from '../context/CreateProductContext';



const CreateProducts = () => {
  const { productRequest, setProductRequest, create} = React.useContext(productContext) as IProductContext

  

  return (
    <form onSubmit={create} className="d-grid mb-5">
      <input value={productRequest.name} onChange={(e) => setProductRequest({...productRequest, name: e.target.value})}type="text" className="form-controlpy-2 mb-3" placeholder="Enter name" />
      <input value={productRequest.articleNumber} onChange={(e) => setProductRequest({...productRequest, articleNumber: e.target.value})} type="text" className="form-controlpy-2 mb-3" placeholder="Enter articlenumber" />
      <input value={productRequest.category} onChange={(e) => setProductRequest({...productRequest, category: e.target.value})} type="text" className="form-controlpy-2 mb-3" placeholder="Enter category" />
      <input value={productRequest.description} onChange={(e) => setProductRequest({...productRequest, description: e.target.value})} type="text" className="form-controlpy-2 mb-3" placeholder="Enter description" />
      <input value={productRequest.price} onChange={(e) => setProductRequest({...productRequest, price: e.target.valueAsNumber})}type="number" className="form-controlpy-2 mb-3" placeholder="Enter price" />
      <input value={productRequest.imageName} onChange={(e) => setProductRequest({...productRequest, imageName: e.target.value})} type="text" className="form-controlpy-2 mb-3" placeholder="Enter img url" />
      <button type="submit" className="btn btn-success">Create Product</button>
    </form>
  )
}

export default CreateProducts