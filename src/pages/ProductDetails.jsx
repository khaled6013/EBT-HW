import axios from "axios";
import { useEffect, useState } from "react"; 
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams(); 
  const [singleProduct, setSingleProduct] = useState({});

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
        <h1 className="text-[23px] font-bold mb-6">{singleProduct.title}</h1>
        <p className="text-[16px] w-150">{singleProduct.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;