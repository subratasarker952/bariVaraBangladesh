const Home = () => {
  return (
    <div className="text-center">
      <section className="bg-blue-500 text-white text-center py-20">
        <h1 className="text-4xl font-bold mb-4">
          Find Your Perfect Rental Home
        </h1>
        <p className="text-xl mb-8">
          Browse through the best rental properties available
        </p>
        <div className="max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Search by location"
            className="p-2 rounded w-full mb-4"
          />
          <button className="bg-white text-blue-500 px-4 py-2 rounded">
            Search
          </button>
        </div>
      </section>
      <section className="py-20">
        <h2 className="text-3xl text-center font-bold mb-8">
          Featured Listings
        </h2>
        <div className="grid grid-cols-3 gap-8">
          {/* PropertyCard component will be used here */}
        </div>
      </section>
      <section className="bg-gray-100 py-20">
        <h2 className="text-3xl text-center font-bold mb-8">
          What Our Customers Say
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Testimonial items */}
        </div>
      </section>
    </div>
  );
};

export default Home;
