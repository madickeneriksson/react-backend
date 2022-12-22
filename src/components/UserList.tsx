import React, { useEffect } from 'react'
import { IProductContext, productContext } from '../context/CreateProductContext'
import { Product} from '../models/ProductsModell'

const UserList = () => {
    const { product, getAll } = React.useContext(productContext) as IProductContext

    useEffect(() => {
        getAll()
        
    }, [getAll])
    

  return (
    <>
    <h3 className="display-6 mb-4">List of users</h3>
    {
        // product.map((Products:Product) => (<div key={product.articleNumber} className="mb-3">{product.name} {product.category}</div>))
    }
    </>
  )
}

export default UserList