import ProductCardUser from "../Components/HomePageCom/ProductCardUser";

const Products = ({ products }) => {
  return (
    <div>
      <h2 className="text-3xl text-green-400 my-10">Featured Products </h2>
      <div className="flex gap-3 flex-wrap">
        {products && products.map((p) => (
          <ProductCardUser key={p._id} product={p}></ProductCardUser>
        ))}
      </div>
    </div>
  );
};

export default Products;
