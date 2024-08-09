import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PaymentSuccess = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const tran_id = query.get("tran_id");

  const [property, setProperty] = useState({});
  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/property/${tran_id}`,
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
  }, [tran_id]);
  const {
    owner,
    phone,
    email,
    whatsApp,
    amount,
    paymentStatus,
    publishStatus,
  } = property;

  return (
    <div className="w-[500px] print:absolute top-0 left-0 right-0 mx-auto text-xl">
      <p className="font-bold text-3xl">Payment Info BariVaraBangladesh</p>
      <hr className="my-5 border border-red-500" />
      <div>
        <div className="flex justify-between">
          <p>Print date</p>
          <p>{Date.now()}</p>
        </div>
        <div className="flex justify-between">
          <p>Tran id</p>
          <p>{tran_id}</p>
        </div>
        <div className="flex justify-between">
          <p>Owner Email</p>
          <p>{owner}</p>
        </div>
        <div className="flex justify-between">
          <p>Email</p>
          <p>{email || ""}</p>
        </div>
        <div className="flex justify-between">
          <p>Phone</p>
          <p>{phone}</p>
        </div>
        <div className="flex justify-between">
          <p>whatsApp</p>
          <p>{whatsApp || ""}</p>
        </div>
        <div className="flex justify-between">
          <p>Currency</p>
          <p>BDT</p>
        </div>
        <div className="flex justify-between">
          <p>Payment status</p>
          <p>{paymentStatus}</p>
        </div>
        <div className="flex justify-between">
          <p>Visibility</p>
          <p>{publishStatus}</p>
        </div>
        <div className="flex justify-between">
          <p>Amount</p>
          <p>{amount} /-</p>
        </div>
      </div>
      <button
        className="btn print:hidden btn-sm block bg-pink-500 w-full"
        onClick={() => window.print()}
      >
        Print
      </button>
    </div>
  );
};

export default PaymentSuccess;
