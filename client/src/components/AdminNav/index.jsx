import { Link } from "react-router-dom";
import "./adminNav.css";

const AdminNav = () => {
  return (
    <nav className="adminnav">
      <ul className="adminnav__list">
        <li className="adminnav__list__item">
          <Link className="adminnav__list__item__link" to="/admin/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="adminnav__list__item">
          <Link className="adminnav__list__item__link" to="/admin/product">
            Product
          </Link>
        </li>
        <li className="adminnav__list__item">
          <Link className="adminnav__list__item__link" to="/admin/products">
            Products
          </Link>
        </li>
        <li className="adminnav__list__item">
          <Link className="adminnav__list__item__link" to="/admin/category">
            Category
          </Link>
        </li>
        <li className="adminnav__list__item">
          <Link className="adminnav__list__item__link" to="/admin/sub">
            Sub Category
          </Link>
        </li>
        <li className="adminnav__list__item">
          <Link className="adminnav__list__item__link" to="/user/password">
            Password
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNav;
