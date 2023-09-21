/**
 * LOGIN
 */

import { HomepageCard } from "../model/homepage"

export interface LoginRequest {
    email: string,
    password: string
}

export interface LoginResponse {
    token: string,
    success: boolean,
    name: string
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
    stores: BaseStore[],
    page: number,
    total: number //number of pages
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

