import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error("Error fetching product:", error));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-lg text-gray-700">Price: ${product.price}</p>
      <p className="mt-2">{product.description}</p>
    </div>
  );
}

export default ProductDetails;
