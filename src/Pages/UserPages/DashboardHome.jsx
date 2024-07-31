import { useEffect, useState } from "react";

const DashboardHome = () => {
  const [states, setStates] = useState({});
  useEffect(() => {
    fetch(`https://digitalfurnitureserver.vercel.app/states`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        authorization: `barer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((json) => setStates(json));
  }, [states]);

  return (
    <div className="">
      <div className="my-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
          <div className="h-[200px] rounded-lg p-5 shadow-xl bg-white text-3xl flex justify-between items-center w-full">
            <p className="text-center"> Total BLog:- {states.blogs || 0}</p>
          </div>
          <div className="h-[200px] rounded-lg p-5 shadow-xl bg-white text-3xl flex justify-between items-center w-full">
            <p className="text-center"> Total User:- {states.users || 0}</p>
          </div>
          <div className="h-[200px] rounded-lg p-5 shadow-xl bg-white text-3xl flex justify-between items-center w-full">
            <p className="text-center">
              {" "}
              Total Product:- {states.products || 0}
            </p>
          </div>
          <div className="h-[200px] rounded-lg p-5 shadow-xl bg-white text-3xl flex justify-between items-center w-full">
            <p className="text-center"> Total Review:- {states.reviews || 0}</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default DashboardHome;
