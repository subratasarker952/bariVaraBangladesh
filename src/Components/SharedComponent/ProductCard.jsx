import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { _id, title, price, img } = product;
  const handleDelete = (p) => {
    const sure = window.confirm("Are You Sure? Delete " + p?.title);
    if (sure) {
      fetch(`https://digitalfurnitureserver.vercel.app/products/${p?._id}`, {
        method: "DELETE",
        headers:{
          'content-type':"application/json",
          authorization: `barer ${localStorage.getItem("token")}`,
        }
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Item Deleted");
          }
          else if(data.message){
            toast.error(data.message)
          }
        });
    }
  };
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="w-full my-3">
          <img src={img} alt="Shoes"  className="rounded-xl w-[250px] h-[300px]" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <h2 className="card-title">{price}</h2>
          {/* <p>{description}</p> */}
          <div className="card-actions">
            <Link
              to={`/dashboard/myProducts/${_id}`}
              className="btn btn-primary"
            >
              Details
            </Link>
            <Link
              to={`/dashboard/updateProduct/${_id}`}
              className="btn  bg-green-500 text-white"
            >
              Edit
            </Link>
            <button
              className="btn bg-red-500 text-white"
              onClick={() => handleDelete(product)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
