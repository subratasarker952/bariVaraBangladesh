const property = {
  id: 1,
  title: "Beautiful 3 Bedroom House",
  description:
    "This beautiful house has 3 bedrooms, 2 bathrooms, a spacious living room, and a modern kitchen. It is located in a quiet neighborhood and is perfect for a family. The house also includes a garage and a large backyard.",
  price: 2000,
  images: [
    "https://via.placeholder.com/600x400",
    "https://via.placeholder.com/600x400",
    "https://via.placeholder.com/600x400",
  ],
  amenities: [
    "3 Bedrooms",
    "2 Bathrooms",
    "Fully Furnished",
    "Garage",
    "Large Backyard",
  ],
  location: "123 Main Street, City, Country",
};

const SinglePropertyPage = () => {
  return (
    <div className="max-w-6xl mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">{property.title}</h1>
      <p className="text-gray-700 mb-4">{property.location}</p>
      <p className="text-lg font-bold mb-4">${property.price}/month</p>

      <div className="grid grid-cols-3 gap-4 mb-8">
        {property.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={property.title}
            className="w-full h-64 object-cover rounded"
          />
        ))}
      </div>

      <p className="text-gray-700 mb-8">{property.description}</p>

      <h2 className="text-2xl font-bold mb-4">Amenities</h2>
      <ul className="list-disc list-inside mb-8">
        {property.amenities.map((amenity, index) => (
          <li key={index}>{amenity}</li>
        ))}
      </ul>

      <div className="bg-gray-100 p-6 rounded shadow-md">
        <h3 className="text-xl font-bold mb-4">Contact the Owner</h3>
        <form>
          <input
            type="text"
            placeholder="Your Name"
            className="p-2 rounded w-full mb-4 border"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-2 rounded w-full mb-4 border"
          />
          <textarea
            placeholder="Your Message"
            className="p-2 rounded w-full mb-4 border"
          ></textarea>
          <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default SinglePropertyPage;
