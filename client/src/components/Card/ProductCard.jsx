import { Link } from "react-router-dom";
//import { useState } from "react";
import { MdShoppingCart, MdRemoveRedEye } from "react-icons/md";
import defaultProduct from "../../assets/default.jpg";
import "./product.css";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  const { user, cart } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const { images, title, description, slug, price } = product;
  //const [cartNotEmpty, setCartNotEmpty] = useState(0);

  const handleAddToCart = () => {
    let cart = [];
    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      cart.push({
        ...product,
        count: 1,
      });
      let unique = _.uniqWith(cart, _.isEqual);
      localStorage.setItem("cart", JSON.stringify(unique));
      dispatch({
        type: "ADD_TO_CART",
        payload: unique,
      });
    }

    //setCartNotEmpty(cartNotEmpty + 1);
  };

  return (
    <div className="product-card-wrapper">
      <div className="product-card__image-wrapper">
        <img
          className="product-card__img"
          src={images && images.length ? images[0].url : defaultProduct}
          alt="product"
        />
      </div>
      <h3 className="product-card__title">{title}</h3>
      <p className="product-card__about">{`${
        description && description.substring(0, 50)
      }...`}</p>
      <div className="product-card__price-container">
        <p className="product-card__price">{price}$</p>
      </div>
      <div className="product-card__button-container">
        <Link className="product-cart__button" to={`/product/${slug}`}>
          <MdRemoveRedEye className="product-cart__button__icon" />
          <p className="btn__text">View Product</p>
        </Link>
        <button onClick={handleAddToCart} className="product-cart__button">
          <MdShoppingCart className="product-cart__button__icon" />
          <p className="btn__text">Add to Cart</p>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
