import { Link } from "react-router-dom";
import firebase from "firebase";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./navbar.css";
import cartIcon from "../../assets/cart.svg";

const Navbar = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const { user } = useSelector((state) => ({ ...state }));
  const logOut = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOG_OUT",
      payload: null,
    });
    history.push("/signin");
  };

  return (
    <nav className="nav">
      <div className="nav__logo-wrapper">
        <div className="logo-circle"></div>
        <div className="logo-circle"></div>
        <div className="logo-container">
          <Link to="/" className="logo">
            Backpacks
          </Link>
        </div>
      </div>
      <ul className="nav__list-menu">
        <li className="list-menu__item-container">
          <Link to="/shop" className="list-menu__item-link">
            Shop
          </Link>
        </li>
        <li className="list-menu__item-container">
          <Link to="/contact" className="list-menu__item-link">
            Contact Us
          </Link>
        </li>
        <li className="list-menu__item-container">
          <Link to="/about" className="list-menu__item-link">
            About Us
          </Link>
        </li>
      </ul>
      <div className="nav__items-wrapper">
        <div className="login-container">
          {!user && (
            <>
              <Link to="/signin" className="login signIn">
                Sign In
              </Link>
              <Link to="/signup" className="login">
                Sign Up
              </Link>
            </>
          )}
          {user && (
            <>
              {user && user.role === "subscriber" && (
                <Link to="/user/history" className="login">
                  User
                </Link>
              )}

              {user && user.role === "admin" && (
                <Link to="/admin/dashboard" className="login">
                  Admin
                </Link>
              )}

              <Link onClick={logOut} to="/signup" className="login">
                Log Out
              </Link>
            </>
          )}
        </div>
        <img className="cart-icon" src={cartIcon} alt="cart" />
        <div className="menu-wrapper">
          <div className="menu-line menu-line1"></div>
          <div className="menu-line menu-line2"></div>
          <div className="menu-line menu-line3"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
