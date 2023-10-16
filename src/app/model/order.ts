import { BaseStore } from "../connections/connectionTypes";
import { CartProduct } from "./cart";

export interface OrderPartPage {
    seller: BaseStore,
    total: number
}

export interface OrderPage {
    parts: OrderPartPage[],
    commission: number,
    pickup: Date,
    total: number,
    completed: boolean
}

export interface Order {
    products: CartProduct[],
    commission: number,
    pickup: Date,
    total: number,
    accepted: boolean,
    withdrawn: boolean
}