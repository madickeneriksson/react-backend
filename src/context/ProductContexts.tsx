import {useContext, useState} from 'react'
import { createContext,  } from "react"
import { ProductItem } from '../models/productModel'

interface ProductProviderType {
  children: any
}

export interface ProductContextType {
  product: ProductItem
  products: ProductItem[]
  featured: ProductItem[]
  flashsale: ProductItem[]
  get: (articleNumber:string) => void
  getProducts: (take?:number) => void
  getFeatured: (take?:number) => void
  getFlashsale: (take?:number) => void
}

export const ProductContext = createContext<ProductContextType | null>(null)

export const useProductContext = () => { return useContext(ProductContext)}

  const ProductProvider: React.FC<ProductProviderType> = ({children}) => {
  const baseUrl:string = 'https://win22-webapi.azurewebsites.net/api/products'
  const EMPTY_PRODUCT: ProductItem = { articleNumber: '', name: '', category: '', price:0, imageName: ''}

  const [product, setProduct] = useState<ProductItem>(EMPTY_PRODUCT)
  const [products, setProducts] = useState<ProductItem[]>([])
  const [featured, setFeatured] = useState<ProductItem[]>([])
  const [flashsale, setFlashsale] = useState<ProductItem[]>([])
    

    const get = async (articleNumber:string) => {
    const res = await fetch(baseUrl + `/${articleNumber}`)
        setProduct(await res.json())
      }
  
      const getProducts= async (take:number = 0) => {
        let url = baseUrl
        if (take !==0)
          url = baseUrl + `?take=${take}`

        const res = await fetch(url)
        setProducts(await res.json())
      }
      const getFeatured = async (take:number = 8) => {
        let url = baseUrl + `?tag=featured`
        if (take !==0)
          url += `?&take=${take}`

        const res = await fetch(url)
        setFeatured(await res.json())
      }
      const getFlashsale = async (take:number = 6) => {
        let url = baseUrl + `?tag=flashsale`
        if (take !==0)
          url += `?&take=${take}`

        const res = await fetch(url)
        setFlashsale(await res.json())
      }
  
  
 
    
    return <ProductContext.Provider value={{product, products, featured,flashsale, get, getProducts, getFeatured, getFlashsale }}>
      {children} 
    </ProductContext.Provider>
    }
    
export default ProductProvider


