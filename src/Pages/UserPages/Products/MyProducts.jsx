import { useEffect, useState } from "react";
import ProductCard from "../../../Components/SharedComponent/ProductCard";
import useAuth from "../../../hooks/useAuth";

const MyProducts = () => {
  const [products, setProducts] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(
      `https://digitalfurnitureserver.vercel.app/products/email?email=${user?.email}`,{
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          authorization: `barer ${localStorage.getItem("token")}`,
        }
      }
    )
      .then((response) => response.json())
      .then((json) => setProducts(json));
  }, [products, user]);

  return (
    <div>
      <div>
        <p className="text-center text-green-500">Your Added Product length {products.length}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {products &&
            products.map((product) => (
              <ProductCard key={product._id} product={product}></ProductCard>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MyProducts;
