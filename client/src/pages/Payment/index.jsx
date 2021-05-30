import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import StripeCheckout from "../../components/StripeCheckout";
import "./stripe.css";

const promise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
const Payment = () => {
  return (
    <div className="payment">
      <div className="payment-container">
        <h2 className="payment-header">Complete your purchase</h2>
        <Elements stripe={promise}>
          <StripeCheckout />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
