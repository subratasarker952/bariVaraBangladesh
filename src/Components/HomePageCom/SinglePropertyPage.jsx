import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const SinglePropertyPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState({});
  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/properties/${id}`,
          {
            headers: {
              authorization: `barer ${localStorage.getItem("token")}`,
            },
          }
        );
        setProperty(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperty();
  }, [id]);

  return (
    <div className="max-w-6xl mx-auto py-8 capitalize">
      <h1 className="text-4xl font-bold mb-4">{property.title}</h1>
      <div className="font-bold text-xl mb-2">
        <p>
          {property.state && property.state +", "+'' } 

          {property.upazila +
            ", " +
            property.district +
            ", " +
            property.division}
        </p>
      </div>
      <p className="text-lg font-bold mb-4">${property.price}/month</p>

      <div className="grid grid-cols-3 gap-4 mb-8">
        {/* {property.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={property.title}
            className="w-full h-64 object-cover rounded"
          />
        ))} */}
      </div>

      <p className="text-gray-700 mb-8">{property.description}</p>

      <h2 className="text-2xl font-bold mb-4">Amenities</h2>
      <ul className="list-disc list-inside mb-8">
        {property.amenities?.map((amenity, index) => (
          <li key={index}>{amenity} </li>
        ))}
      </ul>

      <div className="bg-gray-100 p-6 rounded shadow-md">
        <h3 className="text-xl font-bold mb-4 text-center">Contact the Owner</h3>
        <div className="flex justify-evenly">
          <p>Phone:- {property.phone}</p>
          <p>WhatsApp:- {property.whatsApp}</p>
          <p>Email:- {property.email}</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePropertyPage;
