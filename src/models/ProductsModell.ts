export interface Product {
    map(arg0: (Products: Product) => JSX.Element): unknown
    articleNumber: string
    name: string
    category: string
    price: number 
    imageName: string
}
export interface ProductRequest {
    articleNumber: string
    name: string
    category: string
    price: number 
    imageName: string
}