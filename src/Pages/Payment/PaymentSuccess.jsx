import { useLocation } from "react-router-dom";
import useOrderByTranId from "../../Components/hooks/useOrderByTranId";
import Loading from "../../Components/Shared/Loading/Loading";

const PaymentSuccess = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const tran_id = query.get("tran_id");
  const { orderIsLoading, order } = useOrderByTranId(tran_id);
  if (orderIsLoading) return <Loading></Loading>;
  if(!order) return <p>No order found in this id</p>
  const {
    date,
    amount,
    currency,
    name,
    email,
    paidAt,
    paymentMethod,
    paymentStatus,
    phone,
  } = order;

  return (
    <div className="w-[500px] print:absolute top-0 left-0 right-0 mx-auto text-xl">
      <p className="font-bold text-3xl">Payment Info</p>
      <hr className="my-5 border border-red-500" />
      <div>
        <div className="flex justify-between">
          <p>Date</p>
          <p>{date.split("T")[0]}</p>
        </div>
        <div className="flex justify-between">
          <p>Tran id</p>
          <p>{tran_id}</p>
        </div>
        <div className="flex justify-between">
          <p>Name</p>
          <p>{name}</p>
        </div>
        <div className="flex justify-between">
          <p>Email</p>
          <p>{email}</p>
        </div>
        <div className="flex justify-between">
          <p>Phone</p>
          <p>{phone}</p>
        </div>
        <div className="flex justify-between">
          <p>Currency</p>
          <p>{currency}</p>
        </div>
        <div className="flex justify-between">
          <p>Payment status</p>
          <p>{paymentStatus}</p>
        </div>
        <div className="flex justify-between">
          <p>Payment Method</p>
          <p>{paymentMethod}</p>
        </div>
        <div className="flex justify-between">
          <p>Payment Time</p>
          <p>{paidAt.split("T")[0]}</p>
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
