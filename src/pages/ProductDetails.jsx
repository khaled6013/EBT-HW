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
        <h1 className="text-3xl font-bold mb-6">{singleProduct.title}</h1>
        <img src={singleProduct.thumbnail} alt={singleProduct.title} />
        <p>{singleProduct.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;