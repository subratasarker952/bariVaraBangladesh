import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { title, img } = category;
  return (
    <Link to={`/products/categories/${title}`} className="">
      <div className="card bg-base-100 hover:bg-slate-500 hover:text-white shadow-xl relative">
        <figure className="rounded-lg">
          <img className="w-[250px] h-[250px] p-3 " src={img} alt={title} />
        </figure>
        <div className="capitalize text-2xl p-2">
          <h1>{title}</h1>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
