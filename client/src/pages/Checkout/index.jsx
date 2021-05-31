import { saveUserAddress } from "../../util/user";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Checkout = ({ history }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const { user } = useSelector((state) => ({ ...state }));

  const handleSubmit = (e) => {
    e.preventDefault();
    saveUserAddress(user.token, address, name, zip)
      .then((res) => {
        if (res.data.ok) {
          toast.success("Address saved");
          history.push("/user/payment");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    setName("");
    setAddress("");
    setZip("");
  };

  return (
    <div className="checkout__wrapper">
      <div className="checkout__form-container">
        <h1 className="form__header">Checkout</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__input-container">
            <input
              id="name"
              type="text"
              required
              name="name"
              className="form-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span className="form-span"></span>
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
          </div>
          <div className="form__input-container">
            <input
              id="address"
              type="text"
              required
              name="address"
              className="form-input"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <span className="form-span"></span>
            <label htmlFor="address" className="form-label">
              Address
            </label>
          </div>
          <div className="form__input-container">
            <input
              id="zip"
              type="number"
              required
              name="zip"
              className="form-input"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
            <span className="form-span"></span>
            <label htmlFor="address" className="form-label">
              Zip
            </label>
          </div>
          <button className="form__btn" type="submit">
            Place order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
