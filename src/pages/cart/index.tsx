import { useContext } from "react"
import { cartContext } from "../../Components/Context/cartContext"
import { Link } from "react-router-dom"


const Cart = () => {

  const { cart, total, addItem, removeItemCart } = useContext(cartContext)

  return (
    <div className="w-full max-w-7xl mx-auto px-4">

      <p className="text-center mt-10 mb-8 text-xl md:text-2xl lg:text-3xl font-bold">
        Meu carrinho
      </p>

      {cart.length <= 0 ? <>
        <span className="text-center block text-2xl font-bold text-red-600">
          Carrinho vazio
        </span>
        <Link to={'/'} className="flex justify-center">
          <p className="bg-gray-800 text-white text-center px-4 py-1 w-52 mt-7
          rounded ">
            Ir para os produtos
          </p>
        </Link></> :
        <>
          {cart.length > 0 &&
            <>
              {cart.map((item) => (
                <section key={item.id}>
                  <div className="flex flex-col gap-4 lg:flex lg:flex-row lg:justify-between items-center border-b-2 w-full">
                    <img className="w-32  " src={item.cover} alt="imagem do produto" />
                    <strong> {item.price.toLocaleString("pt-br", {
                      style: 'currency',
                      currency: 'BRL'
                    })}</strong>


                    <div className="flex gap-4 items-center">
                      <button onClick={() => removeItemCart(item)} className="bg-zinc-600 px-4 rounded font-extrabold text-white cursor-pointer">
                        -
                      </button>

                      <p>
                        {item.amount}
                      </p>

                      <button onClick={() => addItem(item)} className="bg-zinc-600 px-4 rounded font-extrabold text-white cursor-pointer">
                        +
                      </button>
                    </div>

                    <div>
                      <strong>
                        Subtotal: {item.subTotal.toLocaleString("pt-br", {
                          style: 'currency',
                          currency: 'BRL'
                        })

                        }
                      </strong>
                    </div>
                  </div>
                </section>
              ))}

              <div className="mb-12 mt-7 font-medium pl-4">
                <p>
                  Total: {total}
                </p>
              </div>
            </>
          }
        </>
      }

    </div>
  )
}

export default Cart