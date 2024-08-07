import { Link } from "react-router-dom";

const PaymentCancel = () => {
  return (
    <div>
      <p>PaymentCancel</p>
      <Link className="btn" to={"/user/orders"}>
        Go to Order Page
      </Link>
    </div>
  );
};

export default PaymentCancel;
