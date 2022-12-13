import React, { useEffect } from 'react'
import { IProductContext, productContext } from '../context/CreateProductContext'
import { Product} from '../models/CreateProductsModel'

const ProductList = () => {
    const { products, getAll, remove } = React.useContext(productContext) as IProductContext

    useEffect(() => {
        getAll()
        
    }, [getAll])

    const removeProduct = (articleNumber: string) => {
      remove(articleNumber)
    }
    

  return (
    <>
    <h3 className="display-6 mb-4">List of products</h3>
    {
        products.map((product:Product) => (<div onClick={() => removeProduct(product.articleNumber)} key={product.articleNumber} className="mb-3">{product.name} {product.category}</div>))
    }
    </>
  )
}

export default ProductList