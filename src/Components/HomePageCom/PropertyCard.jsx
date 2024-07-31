
const PropertyCard = ({ property }) => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full h-48 object-cover" src={property.image} alt={property.title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{property.title}</div>
          <p className="text-gray-700 text-base">
            {property.description.substring(0, 100)}...
          </p>
        </div>
        <div className="px-6 py-4 flex justify-between items-center">
          <span className="font-bold text-lg">${property.price}/month</span>
          <a href={`/property/${property.id}`} className="text-blue-500 hover:underline">View Details</a>
        </div>
      </div>
    );
  };
  
  export default PropertyCard;