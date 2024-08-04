import { useEffect, useState } from "react";
import PropertyCard from "../../Components/HomePageCom/PropertyCard";
import {
  districtsData,
  divisionsData,
  postOfficesData,
  upaZilasData,
} from "../../../public/bangladeshAddress";
import { rentalTypes } from "../../../public/RentalTypes";

const sampleProperties = [
  {
    id: 1,
    title: "Beautiful 3 Bedroom House",
    description:
      "This beautiful house has 3 bedrooms, 2 bathrooms, a spacious living room, and a modern kitchen...",
    price: 2000,
    image: "https://via.placeholder.com/400x300",
  },
  {
    id: 2,
    title: "Cozy 2 Bedroom Apartment",
    description:
      "A cozy apartment located in the heart of the city with 2 bedrooms, 1 bathroom, and a balcony...",
    price: 1500,
    image: "https://via.placeholder.com/400x300",
  },
  // Add more sample properties as needed
];

const ListingsPage = () => {
  const [filters, setFilters] = useState({
    division: "",
    district: "",
    upazila: "",
    postOffice: "",
    type: "",
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

    setFilters({
      ...filters,
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
    setFilters({
      ...filters,
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

    setFilters({ ...filters, upazila: upazilaName });
  };

  const handlePostOfficeChange = (event) => {
    setSelectedPostOffice(event.target.value);
    setFilters({ ...filters, postOffice: event.target.value });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleSearch = () => {
    const { division, district, upazila } = filters;
    if (!division) {
      alert("Select A Division Please");
    } else if (!district) {
      alert("Select A District Please");
    } else if (!upazila) {
      alert("Select A Upazila Please");
    } else {
      console.log(filters);
    }
  };

  // const fetchProperties = async () => {
  //   try {
  //     const response = await axios.get("/api/properties/search", {
  //       params: filters,
  //     });
  //     setProperties(response.data);
  //   } catch (error) {
  //     console.error("Error fetching properties:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchProperties();
  // }, [filters]);

  return (
    <div className=" ">
      <div className=" ">
        <div className="flex justify-center items-center p-4">
          <div className="flex flex-wrap gap-4">
            <div className="mb-4 flex justify-center items-center gap-2">
              <label className="font-bold text-gray-700">Division</label>
              <select
                className="p-2 border rounded min-w-[150px]"
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
            <div className="mb-4 flex justify-center items-center gap-2">
              <label className="font-bold text-gray-700">District</label>
              <select
                className="p-2 border rounded min-w-[150px]"
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
            <div className="mb-4 flex justify-center items-center gap-2">
              <label className="font-bold text-gray-700">Upazila</label>
              <select
                className="p-2 border rounded min-w-[150px]"
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

            <div className="mb-4 flex justify-center items-center gap-2">
              <label className="font-bold text-gray-700">Post Office</label>

              <select
                className="p-2 border rounded min-w-[150px]"
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
            <div className="mb-4 flex justify-center items-center gap-2">
              <label className="font-bold text-gray-700">Type</label>

              <select
                className="p-2 border rounded min-w-[150px]"
                name="type"
                value={filters.type}
                onChange={handleChange}
              >
                <option value="">Select Type</option>
                {rentalTypes.map((rentalType) => (
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
          </div>
        </div>
        <div className="max-w-md mx-auto">
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white hover:text-black transition-all duration-300 hover:bg-blue-300 w-full my-2 px-4 py-2 rounded"
          >
            Search
          </button>
        </div>
      </div>

      <section className="py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8">
          {sampleProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ListingsPage;
