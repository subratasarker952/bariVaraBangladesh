import { Link } from "react-router-dom";

const PaymentFail = () => {
  return (
    <div>
      <p>Payment Fail</p>
      <Link className="btn" to={"/user/orders"}>
        Go to Order Page
      </Link>
    </div>
  );
};

export default PaymentFail;
