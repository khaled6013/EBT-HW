import { useContext, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { apiData } from "./ContextApi";


const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    let data = useContext(apiData);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (value.trim() !== "") {
            const matchedProducts = data.filter((item) =>
                item.title.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredProducts(matchedProducts);
        } else {
            setFilteredProducts([]);
        }
    };

    return (
        <div className="py-4 bg-gray-800 text-white fixed top-0 w-full z-10">
            <div className="w-10/12 mx-auto">
                <div className="flex justify-between items-center relative">
                    <Link to="/" className="text-2xl font-bold">MyStore</Link>

                    <div className="relative">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={handleSearch}
                            className="border w-140 py-3 outline-none px-3 bg-white text-black"
                            placeholder="Search Products"
                        />
                        {searchTerm.trim() !== "" && (
                            <div className="absolute bg-black text-white left-0 top-13 w-140 max-h-60 overflow-y-auto p-5 border border-gray-600 shadow-xl">
                                {filteredProducts.length > 0 ? (
                                    filteredProducts.map((product) => (
                                        <Link to={`/ProductDetails/${product.id}`} key={product.id}>
                                            <div className="flex items-center gap-3 hover:bg-gray-600 border-b border-[#262626] cursor-pointer p-2">

                                                <img src={product.thumbnail} alt="" className="w-10" />
                                                <p className="text-[16px] text-white font-dm">
                                                    {product.title}
                                                </p>
                                            </div>
                                        </Link>
                                    ))
                                ) : (
                                    <p className="text-red-400 text-center font-semibold">
                                        No Product Found
                                    </p>
                                )}
                            </div>
                        )}
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
    );
};

export default Navbar;