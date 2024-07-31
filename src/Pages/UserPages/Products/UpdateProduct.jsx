import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const loadedProduct = useLoaderData();
  const navigate = useNavigate();
  const { title, price, description, img } = loadedProduct;
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const price = parseInt(form.price.value);
    const description = form.description.value;
    const img = form.img.value;
    if (!title || !price || !description || !img) {
      toast.error("Please Provide Product Information");
      return;
    }
    const product = {
      title,
      price,
      description,
      img,
    };
    const sure = window.confirm("Are you sure Update Product information?");
    if (sure) {
      fetch(`https://digitalfurnitureserver.vercel.app/products/${loadedProduct?._id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          authorization: `barer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(product),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          if (data.modifiedCount > 0 ||data.matchedCount > 0) {
            toast.success("Product Updated");
            navigate("/dashboard/myProducts");
          }
          else if(data.message){
            toast.error(data.message)
          }
        });
    }
  };
  return (
    <div>
      <div className="my-10">
        <div className="card shrink-0 w-full max-w-lg mx-auto shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleForm}>
            {/* title */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Title</span>
              </label>
              <input
                type="text"
                name="title"
                defaultValue={title}
                placeholder="Product title"
                className="input input-bordered"
                required
              />
            </div>
            {/* price */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Price</span>
              </label>
              <input
                type="text"
                name="price"
                defaultValue={price}
                placeholder="Product Price"
                className="input input-bordered"
                required
              />
            </div>
            {/* description */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Description</span>
              </label>
              <input
                type="text"
                name="description"
                defaultValue={description}
                placeholder="Product Description"
                className="input input-bordered"
                required
              />
            </div>
            {/* img */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Image</span>
              </label>
              <input
                type="text"
                name="img"
                defaultValue={img}
                placeholder="Product Image Url"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">
                Update Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
