import { Link, useLoaderData, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";

const Blog = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const blog = useLoaderData();
  const { _id, img, title, description, authorEmail, authorName, createAt } =
    blog;
  const handleDelete = () => {
    const sure = window.confirm("Are You Sure? Delete " + title);
    if (sure) {
      fetch(`https://digitalfurnitureserver.vercel.app/blogs/${_id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          authorization: `barer ${localStorage.getItem("token")}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Item Deleted");
            navigate("/dashboard/blogs");
          } else if (data.message) {
            toast.error(data.message);
          }
        });
    }
  };
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl p-2">
        <figure>
          <img src={img} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="p-3 m-3 text-xl ">
        <div className="card w-full lg:card-side bg-base-100 shadow-xl p-2 flex justify-between">
          <div className="mx-3">
            <p>
              Author:{authorName}, Email:-{authorEmail}, createAt:-{createAt}
            </p>
          </div>
          <div className="mx-3">
            {user?.email === authorEmail && (
              <div className="flex">
                <Link
                  to={`/dashboard/editBlog/${_id}`}
                  className="btn bg-green-500 w-[70px] hover:text-black text-white"
                >
                  Edit
                </Link>
                <button
                  onClick={handleDelete}
                  className="btn bg-red-500 w-[70px] hover:text-black text-white"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
