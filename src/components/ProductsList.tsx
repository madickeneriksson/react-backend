import React from 'react'
import { ProductList } from '../models/productsListModel'

interface Props {
    items: ProductList[]
}

const ProductsList: React.FC<Props> = ({items}) => {
  return (
    <div className="mt-3">
        <div className="text-muted mb-2"><small>Products:</small></div>
        <div> 
            {
                items.map(item => (<div key={item.id} className="mb-3">{item.text}({item.isCompleted ? "Completed": "Not Completed" }) </div>))
            }
    </div>
    </div>


  )
}

export default ProductsList