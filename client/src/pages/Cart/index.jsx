import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./cart.css";

const Cart = () => {
  const { cart, user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cart</h2>
    </div>
  );
};

export default Cart;
