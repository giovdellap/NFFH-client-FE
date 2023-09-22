import { Product } from "../connections/connectionTypes";

export interface CartProduct {
    product: Product;
    quantity: number;
}