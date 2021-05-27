import { useState, useEffect } from "react";
import { getProduct, getRelatedProduct } from "../../util/product";
import defaultProduct from "../../assets/default.jpg";
import ProductCard from "../../components/Card/ProductCard";
import Footer from "../../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import "./product.css";

const Product = ({ match }) => {
  const [product, setProduct] = useState({});
  const [related, setRelated] = useState([]);
  const { title, description, images, price, category } = product;
  const { slug } = match.params;
  const loadSingleProduct = () => {
    getProduct(slug).then((res) => {
      setProduct(res.data);
      getRelatedProduct(res.data._id)
        .then((res) => {
          setRelated(res.data);
        })
        .catch((error) => console.log(error));
    });
  };
  useEffect(() => {
    loadSingleProduct();
  }, [slug]);

  const { user, cart } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
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
    <>
      <div className="product">
        <div className="product-container">
          <div className="product__img-container">
            <img
              className="product__img"
              src={images && images.length ? images[0].url : defaultProduct}
              alt="product"
            />
          </div>
          <div className="product__info">
            <h2 className="product__header">{title}</h2>
            <p className="product__price">${price}</p>
            <p className="product__description">{description}</p>
            <div className="product__info__actions">
              <button onClick={handleAddToCart} className="actions-btn">
                Add to Card
              </button>
            </div>
            <p className="product__category">
              Category: {category && category.name}
            </p>
          </div>
        </div>
        <div className="product__related">
          <h2 className="product__related__header">Related Products</h2>
          <div className="product__related-wrapper">
            {related.length ? (
              related.map((product) => (
                <ProductCard product={product} key={product._id} />
              ))
            ) : (
              <p>No products found</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
