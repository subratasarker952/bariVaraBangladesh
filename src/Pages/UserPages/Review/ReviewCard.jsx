import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const ReviewCard = ({ review }) => {
  const { _id,description, img, authorName, authorEmail } = review;


  const handleDelete = (r) => {
    const sure = window.confirm("Are You Sure? Delete " + r?.title);
    if (sure) {
      fetch(`https://digitalfurnitureserver.vercel.app/reviews/${r?._id}`, {
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
      <div className="card bg-base-100 shadow-xl h-[500px]">
        <div className="card-body items-center text-center">
          <p>{description}</p>
          <img src={img} className="w-12 h-12 rounded-full" alt="" />
          <div>
            <p>{authorName}</p>
            <p>{authorEmail}</p>
          </div>
          <div className="card-actions">
            <div className="flex justify-between">
              <Link to={`/dashboard/reviews/update/${_id}`} className="bg-green-500 w-[100px] text-white btn">Edit</Link>
              <button onClick={()=>handleDelete(review)} className="bg-red-500 w-[100px] text-white btn">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
