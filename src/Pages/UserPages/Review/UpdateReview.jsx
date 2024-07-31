import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateReview = () => {
  const loadedReview = useLoaderData();
  const navigate = useNavigate();
  const { _id, description } = loadedReview;
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const description = form.description.value;

    if (!description) {
      toast.error("Please Provide Product Information");
      return;
    }
    const review = {
      description,
    };
    const sure = window.confirm("Are you sure Update Product information?");
    if (sure) {
      fetch(`https://digitalfurnitureserver.vercel.app/reviews/${_id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          authorization: `barer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(review),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.modifiedCount > 0 || data.matchedCount > 0) {
            toast.success("Review Updated");
            navigate("/dashboard/myReviews");
          } else if (data.message) {
            toast.error(data.message);
          }
        });
    }
  };
  return (
    <div>
      <div className="my-10">
        <div className="card shrink-0 w-full max-w-lg mx-auto shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleForm}>
            {/* description */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Review Edit</span>
              </label>
              <textarea
                type="text"
                name="description"
                defaultValue={description}
                placeholder="write a review"
                className="input input-bordered h-[221px]"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button
           
                className="btn btn-primary"
                type="submit"
              >
                Update Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateReview;
