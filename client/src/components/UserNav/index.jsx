import { Link } from "react-router-dom";
import "./userNav.css";

const UserNav = () => {
  return (
    <nav className="usernav">
      <ul className="usernav__list">
        <li className="usernav__list__item">
          <Link className="usernav__list__item__link" to="/user/history">
            History
          </Link>
        </li>
        <li className="usernav__list__item">
          <Link className="usernav__list__item__link" to="/user/password">
            Password
          </Link>
        </li>
        <li className="usernav__list__item">
          <Link className="usernav__list__item__link" to="/user/wishlist">
            Wishlist
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default UserNav;
