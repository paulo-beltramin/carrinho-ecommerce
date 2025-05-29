import { createContext, useState, type ReactNode } from "react";
import type { productsProps } from "../../pages/home";

type ContextProps= {
    cart: cartProps[],
    cartAmount: number,
    addItem:(items:productsProps)=>void;
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


const cartContext = createContext({} as ContextProps)

export const CartProvider = ({ children }: childrenProvider) => {
    const [cart, setCart] = useState<cartProps[]>([])

       const addItem= (items: productsProps)=>{
 
        let cartIndex = cart.findIndex(item => item.id === items.id)

        if (cartIndex !== -1) {

            let cartList = cart
            cartList[cartIndex].amount += 1  

            cartList[cartIndex].total = cartList[cartIndex].amount * cartList[cartIndex].price

            setCart(cartList)
            return
        }

        let data = {
            ...items,
            amount: 1,
            total: items.price
        }

        setCart(item => [...item, data])
    }


    return (
        <cartContext.Provider value={{ cart, cartAmount:cart.length,addItem }}>
            {children}
        </cartContext.Provider>
    )
}
export default cartContext