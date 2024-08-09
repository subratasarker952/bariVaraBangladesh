import Features from "../../Components/HomePageCom/Features";
import Hero from "../../Components/HomePageCom/Hero";
import Testimonials from "../../Components/HomePageCom/Testimonials";

const Home = () => {
  return (
    <div className="text-center">
      <Hero />
      <Testimonials />
      <Features />
    </div>
  );
};

export default Home;
