import { useEffect, useState } from "react";
import PropertyCard from "../../Components/HomePageCom/PropertyCard";
import {
  districtsData,
  divisionsData,
  postOfficesData,
  upaZilasData,
} from "../../../public/bangladeshAddress";
import { rentalTypes } from "../../../public/RentalTypes";
import axios from "axios";

const ListingsPage = () => {
  const [properties, setProperties] = useState([]);
  const [filters, setFilters] = useState({
    division: "",
    district: "",
    upazila: "",
    postOffice: "",
    type: "",
  });

  const fetchProperties = async () => {
    try {
      const response = await axios.get("http://localhost:3000/properties", {
        params: filters,
      });
      setProperties(response.data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, [filters]);


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
      division: division?.name || "",
      district: "",
      upazila: "",
      postOffice: "",
      type: "",
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
      district: district?.name || "",
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

  return (
    <div className="flex flex-col justify-between min-h-[700px]">
      <div className="">
        <div>
          <div className="flex justify-center items-center p-4">
            <div className="flex flex-wrap gap-2">
              <div className="mb-4 flex justify-center items-center gap-2">
                <label className="font-bold text-gray-700">Division</label>
                <select
                  className="p-2 border rounded min-w-[150px]"
                  onChange={handleDivisionChange}
                  value={selectedDivision}
                  name="division"
                >
                  <option value="">All Division</option>
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
                  name="district"
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
                    .filter(
                      (upazila) => upazila.district_id === selectedDistrict
                    )
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
          <h2 className="text-2xl text-center">
            Search Result:- {properties.length}
          </h2>
        </div>
      </div>

      <section className="py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8">
          {properties?.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ListingsPage;
