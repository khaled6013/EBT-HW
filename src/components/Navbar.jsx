import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="py-4 bg-gray-800 text-white fixed top-0 w-full z-10">
                <div className="w-10/12 mx-auto">
                    <div className="flex justify-around items-center">
                        <Link to="/" className="text-2xl font-bold cursor-pointer">MyStore</Link>
                        <Link to="/AddToCard" className="relative">
                            <div className="flex gap-3 bg-green-500 p-2 rounded-lg cursor-pointer ">
                                <BsCart3 />
                            </div>
                            <p className="absolute -top-3 -right-3 text-white font-body text-[21px]">2</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar