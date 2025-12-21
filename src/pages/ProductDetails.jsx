import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  // const totalPages = Math.ceil(data.length / itemsPerPage);

  const getProductDetails = () => {
    axios.get(`https://dummyjson.com/products/${id}`).then((res) => {
      setSingleProduct(res.data);
    });
  };

  useEffect(() => {
    getProductDetails();
  }, [id]);

  return (
    <div className="py-20">
      <div className="w-10/12 mx-auto">
        <img src={singleProduct.thumbnail} />
        <p>${singleProduct.price}</p>
        <div className="flex items-center gap-2 my-2">
          <p className="flex items-center">
            Rating:
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`w-4 h-4 ml-1 ${index < Math.round(singleProduct.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.869 1.4-8.168L.132 9.21l8.2-1.192L12 .587z" />
              </svg>
            ))}
            <span className="ml-2">({singleProduct.rating})</span>
          </p>
        </div>
        <h1 className="text-[23px] font-bold mb-6">{singleProduct.title}</h1>
        <p className="text-[16px] w-150">{singleProduct.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;