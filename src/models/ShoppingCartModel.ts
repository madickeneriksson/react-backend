import { ProductItem } from "./productModell"

export interface CartItem {
    articleNumber: string
    product: ProductItem
    quantity: number
}