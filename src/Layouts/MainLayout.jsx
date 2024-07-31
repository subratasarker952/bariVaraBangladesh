import { Outlet } from "react-router-dom";
import Footer from "../Components/SharedComponent/Footer";
import Navbar from "../Components/SharedComponent/Navbar";


const MainLayout = () => {
  return (
    <>
      <main className="min-h-screen flex flex-col justify-between relative m-auto max-w-7xl">
        <Navbar />
        <div>
          <Outlet />
        </div>
        <div className="">
          <Footer />
        </div>
      </main>
    </>
  );
};

export default MainLayout;
