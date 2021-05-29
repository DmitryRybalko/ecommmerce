import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { MdDelete } from "react-icons/md";

const ProductCardCheckout = ({ p }) => {
  const dispatch = useDispatch();
  const { title, count, price, images, _id, quantity } = p;

  const handleRemove = () => {
    let cart = [];
    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      cart.map((product, i) => {
        if (product._id === _id) {
          cart.splice(i, 1);
        }
      });
      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
  };

  const handleQuantityChange = (e) => {
    let count = e.target.value < 1 ? 1 : e.target.value;
    if (count > quantity) {
      toast.error(`Max available quantity ${quantity}`);
      return;
    }
    let cart = [];
    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      cart.map((product, i) => {
        if (product._id === _id) {
          cart[i].count = count;
        }
      });
      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
  };

  return (
    <tbody className="table__body">
      <tr className="table__row">
        {images.length ? (
          <td className="table__data">
            <img
              style={{ width: "100px", height: "auto" }}
              className="data__img"
              src={images[0].url}
              alt={title}
            />
          </td>
        ) : (
          ""
        )}
        <td className="table__data">{title}</td>
        <td className="table__data">${price}</td>
        <td className="table__data">
          <input
            id="quantity"
            required
            type="number"
            name="quantity"
            className="form-input"
            style={{ width: "60px", backgroundColor: "white" }}
            value={count}
            onChange={handleQuantityChange}
          />
        </td>
        <td className="table__data">
          <div className="delete-icon-container">
            <MdDelete onClick={handleRemove} className="delete_icon" />
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default ProductCardCheckout;
