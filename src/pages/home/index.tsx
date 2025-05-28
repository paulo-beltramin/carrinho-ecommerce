import { useState, useEffect } from "react"

import { api } from "../../Components/Services/api"


type productsProps = {
    id: number,
    cover: string,
    title: string,
    description: string,
    price: number
}


const Home = () => {

    const [products, setProducts] = useState<productsProps[]>([])


    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => {
        const response = api.get('/products')

        setProducts((await response).data)
    }

    return (
        <>
            <main className="w-full max-w-7xl mx-auto">
                <h1 className="text-center mt-10 text-2xl md:text-3xl lg:text-3xl font-bold ">Produtos em destaque</h1>


                <div className=" grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                    {products && products.map((item) => (
                        <>
                            <div className="flex flex-col items-center gap-2 p-4" key={item.id}>

                                <img src={item.cover} alt="" />

                                <p className="text-lg font-bold">
                                    {item.title}
                                </p>

                                <p className="text-base h-8/12">
                                    {item.description}
                                </p>

                                <strong>R$ {item.price}</strong>

                                <button className="bg-zinc-900 text-white py-1 rounded-lg px-4">Adicionar ao carrinho</button>

                            </div>
                        </>
                    ))}
                </div>


            </main>
        </>
    )
}

export default Home