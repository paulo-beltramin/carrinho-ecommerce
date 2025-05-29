import { createContext, useState, type ReactNode } from "react";

type ContextProps = {
    cart: cartProps[],
    cartAmount: number
}

type cartProps = {
    id: number,
    title: string,
    cover: string,
    description: string,
    amount: number,
    price: number,
    total: number
}

type childrenProvider = {
    children: ReactNode
}


export const cartContext = createContext({} as ContextProps)

export const cartProvider = ({ children }: childrenProvider) => {

    const [cart, setCart] = useState<cartProps[]>([])

    return (
        <cartContext.Provider value={{ cart, cartAmount: cart.length }}>
            {children}
        </cartContext.Provider>
    )
}