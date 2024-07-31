import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { _id, title, description, img } = blog;

  return (
  
      <div className="card bg-base-100 shadow-xl">
        <figure className="w-full">
          <img src={img} alt={title} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{description.length>50 ? description.slice(0,49)+"...":description }</p>
          <div className="w-full">
            <Link
              to={`/blogs/${_id}`}
              className="btn w-full hover:text-black bg-green-500 text-white"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
  )
};

export default BlogCard;
