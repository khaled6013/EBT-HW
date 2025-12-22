import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="py-4 bg-gray-800 text-white fixed top-0 w-full z-10">
                <div className="w-10/12 mx-auto">
                    <div className="flex justify-between items-center">
                        <Link to="/" className="text-2xl font-bold cursor-pointer">MyStore</Link>
                        <div className="">
                           <input type="text" className="border w-140 py-3 outline-none px-3 bg-white text-black" placeholder="Search Products"/>
                        </div>
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