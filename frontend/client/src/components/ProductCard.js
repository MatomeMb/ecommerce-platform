import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="p-4 border rounded shadow-lg">
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="text-gray-600">Price: ${product.price}</p>
      <Link to={`/product/${product._id}`}>
        <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
          View Details
        </button>
      </Link>
    </div>
  );
}

export default ProductCard;
