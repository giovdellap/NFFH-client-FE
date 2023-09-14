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

