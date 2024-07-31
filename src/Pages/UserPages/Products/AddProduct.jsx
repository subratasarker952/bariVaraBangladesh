import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";

const AddProduct = () => {
  const { user } = useAuth();
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const price = parseInt(form.price.value);
    const description = form.description.value;
    const img = form.img.value;
    const category = form.category.value;
    if (!title || !price || !description || !img || !category) {
      toast.error("Please Provide Product Information");
      return;
    }
    const product = {
      title,
      price,
      description,
      img,
      category,
      authorEmail:user?.email
    };
    const sure = window.confirm("Are you sure Product save to db?");
    if (sure) {
      fetch("https://digitalfurnitureserver.vercel.app/products", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          authorization: `barer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(product),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.insertedId) {
            toast.success("Product Added");
            form.reset();
          } else if (data.message) {
            toast.error(data.message);
          }
        });
    }
  };
  return (
    <div>
      <div className="mx-auto flex justify-center items-center">
        <div className="card shrink-0 w-full max-w-lg mx-auto shadow-2xl bg-base-100">
          <h2 className=" mt-2 text-3xl text-center">Add Product</h2>
          <form className="card-body" onSubmit={handleForm}>
            {/* title */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Title</span>
              </label>
              <input
                type="text"
                name="title"
                defaultValue=""
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
                defaultValue=""
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
                defaultValue=""
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
                defaultValue=""
                placeholder="Product Image Url"
                className="input input-bordered"
                required
              />
            </div>
            {/* category */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                className="input capitalize input-bordered"
                name="category"
                id="category"
              >
                <option value="table">table</option>
                <option value="chair">chair</option>
                <option value="sofa">sofa</option>
                <option value="bed">bed</option>
              </select>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
