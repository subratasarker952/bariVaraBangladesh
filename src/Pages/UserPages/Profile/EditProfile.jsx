import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";

const EditProfile = () => {
  const { user } = useAuth();
  const [img, setImg] = useState("");
  const loadedUser = useLoaderData();
  const navigate = useNavigate();

  const handleImgUpload = async (e) => {
    const imgFile = e.target.files[0];
    const formData = new FormData();
    formData.append("image", imgFile);
    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=2b8e612910de513b98a70f8ee1891574`,
      {
        method: "POST",
        body: formData,
      }
    );
    const result = await response.json();
    setImg(result.data.url);
  };

  const handleForm = async (e) => {
    e.preventDefault();
    if (!img) {
      setImg("https://i.ibb.co/dP5hNpk/download.png");
    }
    const form = e.target;
    const displayName = form.displayName.value;
    const age = parseInt(form.age.value);
    const description = form.description.value;

    if (!displayName || !age) {
      toast.error("Please Provide Your Information");
      return;
    }
    const userObj = {
      displayName,
      age,
      description,
      img,
    };
    const sure = window.confirm("Are you sure Update Product information?");
    if (sure) {
      fetch(
        `https://digitalfurnitureserver.vercel.app/users/${loadedUser?._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify(userObj),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.modifiedCount > 0 || data.matchedCount > 0) {
            toast.success("User Updated");
            navigate("/dashboard/profile");
          }
        });
    }
  };
  return (
    <div>
      <div className="my-10">
        <div className="card shrink-0 w-full max-w-lg mx-auto shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleForm}>
            {/* img File */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Select A Picture</span>
              </label>
              <input type="file" onChange={handleImgUpload} className="" />
            </div>
            {/* email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={loadedUser?.email}
                className="input input-bordered"
                required
                readOnly
              />
            </div>

            {/* name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">DisplayName</span>
              </label>
              <input
                type="text"
                name="displayName"
                defaultValue={
                  loadedUser?.displayName || user?.displayName || ""
                }
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>

            {/* age */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your age (years)</span>
              </label>
              <input
                type="text"
                name="age"
                defaultValue={loadedUser?.age}
                placeholder="Your age"
                className="input input-bordered"
              />
            </div>
            {/* description */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">About Yourself</span>
              </label>
              <textarea
                type="text"
                name="description"
                defaultValue={loadedUser?.description}
                placeholder="About Yourself"
                className="input h-20 input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
