import { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const AddEditListingPage = () => {
  const { user } = useAuth();
  const [property, setProperty] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    images: [],
    amenities: "",
    owner: user?.email || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty({
      ...property,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setProperty({
      ...property,
      images: files,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", property.title);
    formData.append("description", property.description);
    formData.append("price", property.price);
    formData.append("location", property.location);
    formData.append("amenities", property.amenities);
    formData.append("owner", property.owner);
    property.images.forEach((image, i) => {
      formData.append(`images[${i}]`, image);
    });

    // const response = await fetch("/api/properties", {
    //   method: "POST",
    //   body: formData,
    // });
    // if (response.ok) {
    //   alert("Property created successfully");
    // } else {
    //   alert("Failed to create property");
    // }
  };
  console.log(property)

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-3xl font-bold mb-8">Add New Property</h2>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={property.title}
            onChange={handleChange}
            className="p-2 border rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={property.description}
            onChange={handleChange}
            className="p-2 border rounded w-full"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Price ($/month)</label>
          <input
            type="number"
            name="price"
            value={property.price}
            onChange={handleChange}
            className="p-2 border rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            value={property.location}
            onChange={handleChange}
            className="p-2 border rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Images</label>
          <input
            type="file"
            multiple
            onChange={handleImageChange}
            className="p-2 border rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">
            Amenities (comma separated)
          </label>
          <input
            type="text"
            name="amenities"
            value={property.amenities}
            onChange={handleChange}
            className="p-2 border rounded w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 w-full py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddEditListingPage;
