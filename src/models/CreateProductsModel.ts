// Hämta
export interface Product {
    tag: string
    articleNumber: string
    description?: string
    name: string
    category: string
    price: number
    imageName: string
}
// Skapa 

export interface ProductRequest {
    tag: string
    name: string
    articleNumber: string
    description?: string
    category: string
    price: number
    imageName: string
}
