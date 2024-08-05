import { useEffect, useState } from "react";

const DashboardHome = () => {
  const [states, setStates] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/states`, {
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
      <div className="my-10 p-6 ">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
          <div className="h-[200px] rounded-lg p-5 shadow-xl bg-white text-3xl w-full flex justify-center items-center">
            <p className=""> Total Property:- {states.properties || 0}</p>
          </div>
          <div className="h-[200px] rounded-lg p-5 shadow-xl bg-white text-3xl w-full flex justify-center items-center">
            <p className="">Total Users:- {states.users || 0}</p>
          </div>
          <div className="h-[200px] rounded-lg p-5 shadow-xl bg-white text-3xl w-full flex justify-center items-center">
            <p className="">
              Save Property:- {states.products || 0}
            </p>
          </div>
          <div className="h-[200px] rounded-lg p-5 shadow-xl bg-white text-3xl w-full flex justify-center items-center">
            <p className=""> Publish Property:- {states.reviews || 0}</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default DashboardHome;
