import axios from "axios";

const DemoComponent = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.files[0];
    // console.log(name, images);
    const formData = new FormData();
    formData.append("name", name);
    formData.append(`images`, image);

    try {
      const response = await axios.post(
        "http://localhost:3000/imageUpload",
        formData
      );

      if (response.status === 200) {
        alert("Property created successfully");
      } else {
        alert("Failed to create property");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Failed to create property");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} encType="multipart/form-data" method="post">
        <div className="form-group w-62">
          <input
            type="file"
            className="form-control-file"
            name="image"
          />
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            name="name"
          />
          <input
            type="submit"
            value="Get me the stats!"
            className="btn btn-default"
          />
        </div>
      </form>
    </div>
  );
};

export default DemoComponent;
