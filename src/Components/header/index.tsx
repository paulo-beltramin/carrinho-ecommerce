import { FaCartPlus } from "react-icons/fa"
const Header = () => {
  return (
    <div>
      <header className=" p-2 bg-gray-500">
        <div className=" flex justify-between items-center max-w-3xl w-full mx-auto">
          <div className="flex  ">
            <h1 className="text-3xl text-amber-400 font-extrabold">Paulão</h1>
            <span className="text-3xl text-green-400 font-bold">Shopping</span>
          </div>
          <p className="flex gap-1"><FaCartPlus size={28} color="yellow" />
            <span className="font-extrabold text-2xl  px-1 -right-1.5 rounded-4xl">
              <p className="bg-amber-500 px-1 rounded-lg ">
                2
              </p>
            </span>
          </p>

        </div>


      </header>
    </div>
  )
}

export default Header