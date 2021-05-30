import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPaymentIntent } from "../../util/stripe";
import { createOrder, emptyUserCart } from "../../util/user";

const StripeCheckout = ({ history }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state }));

  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  //const [cartTotal, setCartTotal] = useState(0);

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    createPaymentIntent(user.token)
      .then((res) => {
        setClientSecret(res.data.clientSecret);
        //setCartTotal(res.data.cartTotal);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: e.target.name.value,
        },
      },
    });

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      createOrder(payload, user.token)
        .then((res) => {
          if (res.data.ok) {
            if (typeof window !== "undefined") localStorage.removeItem("cart");
            dispatch({
              type: "ADD_TO_CART",
              payload: [],
            });

            emptyUserCart(user.token);
          }
        })
        .catch((error) => {
          console.log(error);
        });
      setError(null);
      setProcessing(false);
      setSucceeded(true);
    }
  };
  const handleChange = async (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  return (
    <>
      <p className={succeeded ? "result-message" : "result-message hidden"}>
        Payment Successful.
        <Link className="checkout-link" to="/user/history">
          See the details
        </Link>
      </p>
      <form id="payment-form" className="stripe-form" onSubmit={handleSubmit}>
        <CardElement
          id="card-element"
          options={cardStyle}
          onChange={handleChange}
        />
        <button
          className="stripe-button"
          disabled={processing || disabled || succeeded}
        >
          <span id="button-text">
            {processing ? <div className="spinner" id="spinner"></div> : "Pay"}
          </span>
        </button>
        <br />
        {error && <div className="card-error">{error}</div>}
      </form>
    </>
  );
};

export default StripeCheckout;
