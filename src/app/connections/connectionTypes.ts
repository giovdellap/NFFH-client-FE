/**
 * LOGIN
 */

import { CartProduct } from "../model/cart"
import { HomepageCard } from "../model/homepage"
import { Order } from "../model/order"

export interface LoginRequest {
    email: string,
    password: string
}

export interface RegistrationRequest {
    email: string,
    password: string,
    username: string
}

export interface LoginResponse {
    token: string,
    success: boolean,
    username: string,
    id: string,
    email: string
}

/**
 * HOMEPAGE
 */
export interface HomepageCardResponse {
    cards: HomepageCard[]
}

/**
 * STORES LIST PAGE
 */

export interface StoresListResponse {
    zone: string,
    page: number,
    total: number, //number of pages
    stores: BaseStore[]
}

export interface BaseStore {
    id: string,
    name: string,
    image: string,
    location: string
}

export interface Areas {
    areas: string[]
}

export interface Product {
    id: string, 
    title: string,
    seller: string,
    image: string,
    description: string,
    price: number,
    weight: boolean
}

export interface StoreProducts {
    products: Product[],
    page: number,
    total: number
}

export interface Cart {
    products: CartProduct[]
}

export interface OrderPart {
    seller: string,
    total: number
}

export interface ProductAvailability {
    product: Product,
    available: boolean
}

export interface MyOrders {
    orders: Order[]
}
