import Features from "../../Components/HomePageCom/Features";
import Testimonials from "../../Components/HomePageCom/Testimonials";

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
      <Testimonials />
      <Features />
    </div>
  );
};

export default Home;
