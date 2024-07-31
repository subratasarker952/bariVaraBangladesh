import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    fetch(`https://digitalfurnitureserver.vercel.app/products?searchText=${searchText}`)
      .then((response) => response.json())
      .then((json) => setProducts(json));
  }, [searchText]);

  return (
    <div className="min-h-screen">
      <div>
        <div className="max-w-md border border-black mx-auto ">
          <input
          className="w-full border-red-500 p-3 text-xl"
            type="text"
            name="search"
            placeholder="Search Product"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {products &&
          products.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
      </div>
    </div>
  );
};

export default Products;
