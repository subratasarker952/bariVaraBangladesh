import { useEffect, useState } from "react";
import axios from "axios";

const MyProperty = ({ user }) => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(`/api/properties?owner=${user.email}`);
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, [user.email]);

  const handleEdit = (id) => {
    console.log("Edit Button Click" + id);
  };

  const handleDelete = (id) => {
    console.log("delete Button Click" + id);
  };

  const handlePay = (id) => {
    console.log("Pay Button Click" + id);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">My Properties</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Type</th>
            <th className="py-2 px-4 border-b">Payment Status</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property) => (
            <tr key={property._id}>
              <td className="py-2 px-4 border-b">{property.title}</td>
              <td className="py-2 px-4 border-b">{property.type}</td>
              <td className="py-2 px-4 border-b">{property.paymentStatus}</td>
              <td className="py-2 px-4 border-b">{property.publicStatus}</td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => handleEdit(property._id)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(property._id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mr-2"
                >
                  Delete
                </button>
                {property.paymentStatus === "due" && (
                  <button
                    onClick={() => handlePay(property._id)}
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded"
                  >
                    Pay For Public
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyProperty;
