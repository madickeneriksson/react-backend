import { ProductItem } from "./productModel"

export interface CartItem {
    articleNumber: string
    product: ProductItem
    quantity: number
}