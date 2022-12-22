import React from 'react'
import { IProductContext, productContext } from '../context/CreateProductContext'

const UpdateProduct = () => {
    const {product, setProduct, update} = React.useContext(productContext) as IProductContext

    return (
        <form onSubmit={update} className="d-grid mb-5">
            <input type="hidden" value={product.articleNumber} />

          <input value={product.name} onChange={(e) => setProduct({...product, name: e.target.value})} type="text" className="form-controlpy-2 mb-3" placeholder="Enter name" />
          <input value={product.category} onChange={(e) => setProduct({...product, category: e.target.value})} type="text" className="form-controlpy-2 mb-3" placeholder="Enter category" />
          <input value={product.description} onChange={(e) => setProduct({...product, description: e.target.value})} type="text" className="form-controlpy-2 mb-3" placeholder="Enter description" />
          <input value={product.articleNumber} onChange={(e) => setProduct({...product, articleNumber: e.target.value})} type="string" className="form-controlpy-2 mb-3" placeholder="Enter articlenumber" />
          <input value={product.price} onChange={(e) => setProduct({...product, price: e.target.valueAsNumber})} type="number" className="form-controlpy-2 mb-3" placeholder="Enter price" />
          <input value={product.imageName} onChange={(e) => setProduct({...product, imageName: e.target.value})} type="text" className="form-controlpy-2 mb-3" placeholder="Enter img url" />
          <button type="submit" className="btn btn-success">Update product</button>
        </form>
      )
    }

export default UpdateProduct


