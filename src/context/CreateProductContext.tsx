import { createContext, useContext, useState } from "react";
import { Product, ProductRequest, } from '../models/CreateProductsModel'
import { IProductProviderProps } from "../models/CreateProductProviderProps";

export interface IProductContext {
  product: Product
  setProduct: React.Dispatch<React.SetStateAction<Product>>
  productRequest: ProductRequest
  setProductRequest: React.Dispatch<React.SetStateAction<ProductRequest>>
  products: Product[]
  create: (e: React.FormEvent) => void
  get: (articleNumber:string) => void
  getAll: () => void
  update: (e: React.FormEvent) => void
  remove: (articleNumber:string) => void 


}

export  const productContext = createContext<IProductContext | null>(null)
export const useProductContext = () => { return useContext(productContext)}


const ProductProvider = ({children} : IProductProviderProps ) => {
  const baseUrl:string = 'http://localhost:5000/api/products'
  const product_default: Product = { tag: '', articleNumber: '', name: '', category: '', price: 0, imageName: '',}
  const productRequest_default: ProductRequest = { tag:'', articleNumber: '',  name: '', category: '', price: 0, imageName: ''}

  const [product, setProduct] = useState<Product>(product_default)
  const [ productRequest, setProductRequest] = useState<ProductRequest>(productRequest_default)
  const [products, setProducts] = useState<Product[]>([])

  const create = async (e: React.FormEvent) => {
    e.preventDefault()

    const result = await fetch(`${baseUrl}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productRequest)
    })
    if (result.status === 201) {
      setProductRequest(productRequest_default)
    }

  }
  const get = async (articleNumber:string) => {
    const result = await fetch(`${baseUrl}/${articleNumber}`)
    if (result.status === 200)
    setProduct(await result.json())
  }
  const getAll = async () => {
    const result = await fetch(`${baseUrl}`)
    if (result.status === 200)
    setProducts(await result.json())
  } 
  
  const update = async (e: React.FormEvent) => {
    e.preventDefault()

    const result = await fetch(`${baseUrl}/`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
    if (result.status === 200) 
      setProduct(await result.json())


  }
  const remove = async (articleNumber:string) => {
    const result = await fetch(`${baseUrl}/${articleNumber}`, {
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