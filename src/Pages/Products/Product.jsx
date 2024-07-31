import { Link, useLoaderData } from "react-router-dom";

const Product = () => {
    const product = useLoaderData();
    const { img, title, description, price, category } =
      product;
     
    return (
      <div>
        <div className="card lg:card-side bg-base-100 shadow-xl p-2">
          <figure>
            <img src={img} className="max-h-[400px]" alt={title} />
          </figure>
          <div className="p-10">
            <h2 className="card-title">{title}</h2>
            <p className=""> {description}</p>
            <h2 className="card-title">Category:- {category}</h2>
            <h2 className="card-title">Price:- {price} /-</h2>
          </div>
        </div>
        <div className="my-10">
        <Link className="btn btn-primary w-full" to={'/products'}>Go To Products Page</Link>
        </div>
      </div>
    );
};

export default Product;