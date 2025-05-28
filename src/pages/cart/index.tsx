
const Cart = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">

      <p className="text-center mt-10 mb-8 text-xl md:text-2xl lg:text-3xl font-bold">
        Meu carrinho
      </p>

      <section className="grid lg:flex md:grid-cols md:gap-y-4  justify-between items-center border-b-2 w-full">
        <div className="w-32">
          <img src="https://reidocelular.com.br/wp-content/uploads/2024/08/Sem-2024-11-09T112938.999.png" alt="imagem do produto" />
        </div>

        <div>
          <strong>R$1,000</strong>
        </div>

        <div className="flex gap-4 items-center">
          <button className="bg-zinc-600 px-4 rounded font-extrabold text-white cursor-pointer">
            -
          </button>

          <p>
            1
          </p>

          <button className="bg-zinc-600 px-4 rounded font-extrabold text-white cursor-pointer">
            +
          </button>
        </div>

        <div>
          <strong>
            Subtotal:R$ 1,000
          </strong>
        </div>
      </section>

      <div className="mt-4 font-medium">
        <p>
          Total: R$ 1.000
        </p>
      </div>

    </div>
  )
}

export default Cart