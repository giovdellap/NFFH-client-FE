import { BaseStore } from "../connections/connectionTypes";

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