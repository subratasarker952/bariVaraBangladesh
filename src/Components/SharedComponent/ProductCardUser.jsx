import { Link } from "react-router-dom";

const ProductCardUser = ({ product }) => {
  const { _id, title, price, description, img } = product;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="">
          <img
            src={img}
            alt={title}
            className="rounded-xl w-[250px] h-[250px]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <h2 className="card-title">{price}</h2>
          <p>
            {description.length > 50
              ? description.slice(0, 49) + ".."
              : description}
          </p>
          <div className="w-full">
            <Link
              to={`/products/${_id}`}
              className="btn w-full bg-green-500 text-white"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardUser;
