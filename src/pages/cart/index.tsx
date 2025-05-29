import { useContext } from "react"
import { cartContext } from "../../Components/Context/cartContext"


const Cart = () => {

  const { cart,total } = useContext(cartContext)

  return (
    <div className="w-full max-w-7xl mx-auto px-4">

      <p className="text-center mt-10 mb-8 text-xl md:text-2xl lg:text-3xl font-bold">
        Meu carrinho
      </p>

      {cart.map((item) => (
        <section className="grid lg:flex md:grid-cols md:gap-y-4  justify-between items-center border-b-2 w-full" key={item.id}>
          <div className="w-32">
            <img src={item.cover} alt="imagem do produto" />
          </div>

          <div>
            <strong> {item.price.toLocaleString("pt-br", {
              style: 'currency',
              currency: 'BRL'
            })}</strong>
          </div>

          <div className="flex gap-4 items-center">
            <button className="bg-zinc-600 px-4 rounded font-extrabold text-white cursor-pointer">
              -
            </button>

            <p>
              {item.amount}
            </p>

            <button className="bg-zinc-600 px-4 rounded font-extrabold text-white cursor-pointer">
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
        </section>
      ))}

      <div className="mt-4 font-medium">
        <p>
          Total: {total}
        </p>
      </div>

    </div>
  )
}

export default Cart