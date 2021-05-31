import { Link, withRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import firebase from "firebase";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./navbar.css";
import cartIcon from "../../assets/cart.svg";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const dispatch = useDispatch();
  let history = useHistory();
  const { user, cart } = useSelector((state) => ({ ...state }));
  const logOut = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOG_OUT",
      payload: null,
    });
    history.push("/signin");
  };

  const toggleNavbar = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    history.listen(() => {
      setShowMenu(false);
    });
  });

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
              <Link to="/signin" className="login signIn ">
                Sign In
              </Link>
              <Link to="/signup" className="login ">
                Sign Up
              </Link>
            </>
          )}
          {user && (
            <>
              {user && user.role === "subscriber" && (
                <Link to="/user/history" className="login ">
                  User
                </Link>
              )}

              {user && user.role === "admin" && (
                <Link to="/admin/dashboard" className="login ">
                  Admin
                </Link>
              )}

              <Link onClick={logOut} to="/signup" className="login ">
                Log Out
              </Link>
            </>
          )}
        </div>
        <div className="cart-icon-wrapper">
          <Link to="/cart" className="cart-link">
            <img className="cart-icon" src={cartIcon} alt="cart" />
            {cart && cart.length > 0 ? <div className="cart-circle"></div> : ""}
          </Link>
        </div>
        <div onClick={() => setShowMenu(!showMenu)} className="menu-wrapper">
          <div className="menu-line menu-line1"></div>
          <div className="menu-line menu-line2"></div>
          <div className="menu-line menu-line3"></div>
        </div>
      </div>
      <div
        onClick={toggleNavbar}
        className="menu-toggle"
        id={showMenu ? "menu-toggle-active" : ""}
      >
        <div className="menu-toggle__container">
          <Link to="/shop" className="list-menu__item mobile-menu-link">
            Shop
          </Link>
          <Link to="/contact" className="list-menu__item mobile-menu-link">
            Contact Us
          </Link>
          <Link to="/about" className="list-menu__item mobile-menu-link">
            About Us
          </Link>
          {!user && (
            <>
              <Link to="/signin" className="mobile-menu-link">
                Sign In
              </Link>
              <Link to="/signup" className="mobile-menu-link">
                Sign Up
              </Link>
            </>
          )}
          {user && (
            <>
              {user && user.role === "subscriber" && (
                <Link to="/user/history" className="mobile-menu-link">
                  User
                </Link>
              )}

              {user && user.role === "admin" && (
                <Link to="/admin/dashboard" className="mobile-menu-link">
                  Admin
                </Link>
              )}

              <Link onClick={logOut} to="/signup" className="mobile-menu-link">
                Log Out
              </Link>
            </>
          )}
          <a
            href="https://www.facebook.com/"
            className="menu-link"
            target="_blank"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/"
            className="menu-link"
            target="_blank"
          >
            Instagram
          </a>
          <a href="https://twitter.com/" className="menu-link" target="_blank">
            Twitter
          </a>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
