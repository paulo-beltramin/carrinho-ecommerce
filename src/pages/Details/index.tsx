import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import type { productsProps } from "../home"
import { api } from "../../Components/Services/api"
import { cartContext } from "../../Components/Context/cartContext"


export const Details = () => {
    const [products, setProducts] = useState<productsProps>()
    const { id } = useParams()
    const { addItem } = useContext(cartContext)

    useEffect(() => {
        const getProducts = async () => {
            const response = await api.get(`/products/${id}`)

            setProducts(response.data)
        }
        getProducts()
    }, [])

    const addCart = (product: productsProps) => {
        addItem(product)
    }



    return (
        <div>
            {products && (
                <section className=" lg:flex justify-center items-center mx-auto mt-8">
                    <img src={products.cover} alt="imagem do produto"
                        className="w-full lg:w-2/4" />

                    <div className="flex flex-col w-full px-4 lg:[600px]">
                        <p className="text-base pb-4">
                            {products.description}
                        </p>

                        <strong className="text-lg">{products.price.toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL"
                        })}</strong>
                        <button onClick={() => addCart(products)}
                            className="bg-zinc-900 text-white px-3 py-1 mt-7 mb-12 
                        cursor-pointer">
                            Adicionar ao carrinho
                        </button>
                    </div>

                </section>
            )}
        </div>
    )
}
