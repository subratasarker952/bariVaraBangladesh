import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import {
  divisionsData,
  districtsData,
  upaZilasData,
  postOfficesData,
} from "../../../../public/bangladeshAddress";
import { houseRentalTypes } from "../../../../public/RentalTypes";

const AddEditListingPage = () => {
  const { user } = useAuth();
  const [property, setProperty] = useState({
    title: "",
    description: "",
    price: "",
    division: "",
    district: "",
    upazila: "",
    postOffice: "",
    state: "",
    type: "",
    images: [],
    amenities: "",
    owner: user?.email || "",
  });
  const [divisions, setDivisions] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);
  const [postOffices, setPostOffices] = useState([]);

  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedUpazila, setSelectedUpazila] = useState("");
  const [selectedPostOffice, setSelectedPostOffice] = useState("");

  useEffect(() => {
    setDivisions(divisionsData);
    setDistricts(districtsData);
    setUpazilas(upaZilasData);
    setPostOffices(postOfficesData);
  }, [divisions, districts, upazilas, postOffices]);

  const handleDivisionChange = (event) => {
    const divisionId = event.target.value;
    setSelectedDivision(divisionId);
    const division = divisions.find((division) => division.id == divisionId);
    const filteredDistricts = districts.filter(
      (district) => district.division_id === divisionId
    );
    setDistricts(filteredDistricts);

    setSelectedDistrict("");
    setSelectedUpazila("");
    setSelectedPostOffice("");
    setUpazilas([]);
    setPostOffices([]);

    setProperty({
      ...property,
      division: division.name,
    });
  };

  const handleDistrictChange = (event) => {
    const districtId = event.target.value;
    setSelectedDistrict(districtId);

    const district = districts.find((district) => district.id == districtId);
    const filteredUpazilas = upazilas.filter(
      (upazila) => upazila.district_id === districtId
    );
    setUpazilas(filteredUpazilas);

    setSelectedUpazila("");
    setSelectedPostOffice("");
    setPostOffices([]);
    setProperty({
      ...property,
      district: district.name,
    });
  };

  const handleUpazilaChange = (event) => {
    const upazilaName = event.target.value;
    setSelectedUpazila(upazilaName);

    const filteredPostOffices = postOffices.filter(
      (postOffice) =>
        postOffice.district_id === selectedDistrict &&
        postOffice.division_id === selectedDivision
    );
    setPostOffices(filteredPostOffices);

    setSelectedPostOffice("");

    setProperty({ ...property, upazila: upazilaName });
  };

  const handlePostOfficeChange = (event) => {
    setSelectedPostOffice(event.target.value);
    setProperty({ ...property, postOffice: event.target.value });
  };

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
    formData.append("division", property.division);
    formData.append("district", property.district);
    formData.append("upazila", property.upazila);
    formData.append("postOffice", property.postOffice);
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
  console.log(property);

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
          <label className="block text-gray-700">Images (Maximum 5 images)</label>
          <input
            type="file"
            multiple
            
            max={5}
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
        <div className="mb-4">
          <label className="font-bold text-gray-700">Type</label>
          <select
            className="p-2 border rounded min-w-[150px]"
            name="type"
            value={property.type}
            onChange={handleChange}
          >
            <option value="">Select Type</option>
            {houseRentalTypes.map((rentalType) => (
              <option
                key={rentalType.id}
                value={rentalType.type}
                title={rentalType.description}
                className="capitalize"
              >
                {rentalType.type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <div className="flex justify-between gap-4">
            <div className="mb-4">
              <label className="block text-gray-700">Division</label>
              <select
                className="p-2 border rounded w-[200px]"
                name="division"
                onChange={handleDivisionChange}
                value={selectedDivision}
              >
                <option value="">Select Division</option>
                {divisions.map((division) => (
                  <option key={division.id} value={division.id}>
                    {division.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">District</label>
              <select
                className="p-2 border rounded w-[200px]"
                onChange={handleDistrictChange}
                value={selectedDistrict}
              >
                <option value="">Select District</option>
                {districts
                  .filter(
                    (district) => district.division_id === selectedDivision
                  )
                  .map((district) => (
                    <option key={district.id} value={district.id}>
                      {district.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="flex justify-between gap-4">
            <div className="mb-4">
              <label className="block text-gray-700">Upazila</label>
              <select
                className="p-2 border rounded w-[200px]"
                onChange={handleUpazilaChange}
                value={selectedUpazila}
              >
                <option value="">Select Upazila</option>
                {upazilas
                  .filter((upazila) => upazila.district_id === selectedDistrict)
                  .map((upazila) => (
                    <option key={upazila.id} value={upazila.name}>
                      {upazila.name}
                    </option>
                  ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Post Office</label>

              <select
                className="p-2 border rounded w-[200px]"
                onChange={handlePostOfficeChange}
                value={selectedPostOffice}
              >
                <option value="">Select Post Office</option>
                {postOffices
                  .filter(
                    (postOffice) =>
                      postOffice.district_id === selectedDistrict &&
                      postOffice.division_id === selectedDivision
                  )
                  .map((postOffice) => (
                    <option
                      key={postOffice.postOffice}
                      value={postOffice.postOffice}
                    >
                      {postOffice.postOffice}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">State</label>
          <input
            type="text"
            name="state"
            value={property.state}
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
