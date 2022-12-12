import { createContext, useContext, useState } from "react";
import { Product, ProductRequest, } from '../models/ProductsModel'
import { IProductProviderProps } from "../models/ProductProviderProps";

export interface IProductContext {
  product: Product
  setProduct: React.Dispatch<React.SetStateAction<Product>>
  productRequest: ProductRequest
  setProductRequest: React.Dispatch<React.SetStateAction<ProductRequest>>
  products: Product[]
  create: (e: React.FormEvent<ProductRequest>) => void
  get: (id: number) => void
  getAll: () => void
  update: (id:number, e: React.FormEvent<Product>) => void
  remove: (id:number) => void 


}

export  const productContext = createContext<IProductContext | null>(null)
export const useProductContext = () => { return useContext(productContext)}


const ProductProvider = ({children} : IProductProviderProps ) => {
  const baseUrl = 'http://localhost:5000/api/product'
  const product_default: Product= {
    articleNumber: '', name: '', category: '', price: 0, imageName: '',
    map: function (arg0: (Products: Product) => JSX.Element): unknown {
      throw new Error("Function not implemented.");
    }
  }
  const producRequest_default: ProductRequest = { articleNumber: '',  name: '', category: '', price: 0, imageName: '' }

  const [product, setProduct] = useState<Product>(product_default)
  const [ productRequest, setProductRequest] = useState<ProductRequest>(producRequest_default)
  const [products, setProducts] = useState<Product[]>([])

  const create = async (e: React.FormEvent<ProductRequest>) => {
    e.preventDefault()

    const result = await fetch(`${baseUrl}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productRequest)
    })
    if (result.status === 201) {
      setProductRequest(producRequest_default)
    }

  }
  const get = async (id: number) => {
    const result = await fetch(`${baseUrl}/${id}`)
    if (result.status === 200)
    setProduct(await result.json())
  }
  const getAll = async () => {
    const result = await fetch(`${baseUrl}`)
    if (result.status === 200)
    setProducts(await result.json())
  } 
  
  const update = async (id:number, e: React.FormEvent<Product>) => {
    e.preventDefault()

    const result = await fetch(`${baseUrl}/${id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
    if (result.status === 200) 
      setProduct(await result.json())


  }
  const remove = async (id:number) => {
    const result = await fetch(`${baseUrl}/${id}`, {
      method: 'delete'
    })
    if (result.status === 204) 
      setProduct(product_default)
  }

  return (
    <productContext.Provider value={{ product, setProduct, productRequest, setProductRequest, products, create, get, getAll, update, remove }}>
        {children}
    </productContext.Provider>
  )
}


export default ProductProvider