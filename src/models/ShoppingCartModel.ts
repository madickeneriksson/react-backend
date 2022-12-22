import { ProductItem } from "./ProductItemModel"

export interface CartItem {
    articleNumber: string
    product: ProductItem
    quantity: number
}