import { createContext, useState, type ReactNode } from "react";
import type { productsProps } from "../../pages/home";

type ContextProps = {
    cart: cartProps[],
    cartAmount: number,
    addItem: (items: productsProps) => void,
    total: string,
    removeItemCart: (product: productsProps) => void
}

type cartProps = {
    id: number,
    title: string,
    cover: string,
    description: string,
    amount: number,
    price: number,
    subTotal: number,

}

type childrenProvider = {
    children: ReactNode
}


export const cartContext = createContext({} as ContextProps)

export const CartProvider = ({ children }: childrenProvider) => {
    const [cart, setCart] = useState<cartProps[]>([])
    const [total, setTtotal] = useState('')

    const addItem = (items: productsProps) => {

        let cartIndex = cart.findIndex(item => item.id === items.id)

        if (cartIndex !== -1) {

            let cartList = cart
            cartList[cartIndex].amount += 1

            cartList[cartIndex].subTotal = cartList[cartIndex].amount * cartList[cartIndex].price

            setCart(cartList)
            totalPrice(cartList)
            return
        }



        let data = {
            ...items,
            amount: 1,
            subTotal: items.price,

        }

        setCart(item => [...item, data])
        totalPrice([...cart, data])
    }

    const removeItemCart = (product: productsProps) => {

        const itemIndex = cart.findIndex((item) => item.id === product.id)

        if (cart[itemIndex].amount > 1) {
            const cartList = cart;

            cartList[itemIndex].amount = cartList[itemIndex].amount - 1

            cartList[itemIndex].subTotal = cartList[itemIndex].subTotal - cartList[itemIndex].price

            setCart(cartList)
            totalPrice(cartList)
            return
        }

        const removeItem = cart.filter(item => item.id !== product.id)
        setCart(removeItem)
        totalPrice(removeItem)

    }


    const totalPrice = (product: cartProps[]) => {

        const result = product.reduce((acc, obj) => { return acc + obj.subTotal }, 0)

        const resultFormated = result.toLocaleString("pt-br", {
            style: 'currency',
            currency: 'BRL'
        })

        setTtotal(resultFormated)
    }


    return (
        <cartContext.Provider value={{
            cart,
            cartAmount: cart.length,
            addItem,
            total,
            removeItemCart
        }}>
            {children}
        </cartContext.Provider>
    )
}
