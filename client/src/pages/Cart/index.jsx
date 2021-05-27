import { useSelector, useDispatch } from "react-redux";
import Hero from "../../components/Hero";
import ProductCardCheckout from "../../components/Card/ProductCardCheckout";
import heroImg from "../../assets/about/about-hero.jpg";
import { Link } from "react-router-dom";
import "./cart.css";

const Cart = () => {
  const { cart, user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const getTotal = () => {
    return cart.reduce((curVal, nextVal) => {
      return curVal + nextVal.count * nextVal.price;
    }, 0);
  };
  const saveOrderToDb = () => {};

  return (
    <div className="cart-wrapper">
      <Hero header={"Cart"} image={heroImg} />
      <div className="cart-container">
        <div className="cart__products-wrapper">
          {!cart.length ? (
            <h4>Cart is empty.</h4>
          ) : (
            <table className="products__table">
              <thead className="table__head">
                <tr className="table__row">
                  <th className="table__heading">Image</th>
                  <th className="table__heading">Product</th>
                  <th className="table__heading">Price</th>
                  <th className="table__heading">Quantity</th>
                  <th className="table__heading">Remove</th>
                </tr>
              </thead>
              {cart.map((p) => (
                <ProductCardCheckout key={p._id} p={p} />
              ))}
            </table>
          )}
        </div>
        <div className="cart__total-wrapper">
          <h3 className="total__header">Cart totals</h3>
          <div className="total__container">
            <p className="total__text">Total:</p>
            <p className="total__text">${getTotal()}</p>
          </div>
          {user ? (
            <button
              disabled={!cart.length}
              onClick={saveOrderToDb}
              className="total__btn"
            >
              Proceed to Checkout
            </button>
          ) : (
            <button className="total__btn">
              <Link
                className="total__link"
                to={{
                  pathname: "/signin",
                  state: { from: "cart" },
                }}
              >
                Log In to Checkout
              </Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
