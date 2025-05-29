import { useState, useEffect } from "react"
import { useContext } from "react"

import  cartContext from "../../Components/Context/cartContext"
import { api } from "../../Components/Services/api"


export type productsProps = {
    id: number,
    cover: string,
    title: string,
    description: string,
    price: number
}


const Home = () => {


    const [products, setProducts] = useState<productsProps[]>([])

    const { addItem } = useContext(cartContext)



    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => {
        const response = api.get('/products')

        setProducts((await response).data)
    }

    const handleAddItem = (items: productsProps) => {

       addItem(items)
    }
    return (
        <>
            <main className="w-full max-w-7xl mx-auto">
                <h1 className="text-center mt-10 text-2xl md:text-3xl lg:text-3xl font-bold ">Produtos em destaque</h1>


                <div className=" grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
                    {products.map((item) => (
                        <div key={item.id}>
                            <div className="flex flex-col items-center h-full  p-4" >

                                <img src={item.cover} alt="" />

                                <p className="text-lg font-bold">
                                    {item.title}
                                </p>

                                <strong>R$ {item.price}</strong>

                                <button className="bg-zinc-900 cursor-pointer text-white py-1 rounded-lg px-4 mb-7"
                                    onClick={() => handleAddItem(item)}
                                >Adicionar ao carrinho</button>

                            </div>
                        </div>
                    ))}
                </div>


            </main>
        </>
    )
}

export default Home