import AdminNav from "../../../components/AdminNav";
import { useState, useEffect } from "react";
import "../../User/user.css";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { createProduct } from "../../../util/product";
import { getCategories } from "../../../util/category";
import FileUpload from "../../../components/FileUpload";

const initState = {
  title: "Lorem elit",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  price: "400",
  categories: [],
  category: "",
  shipping: "",
  quantity: "50",
  images: [],
};

const ProductCreate = () => {
  const [values, setValues] = useState(initState);
  const { user } = useSelector((state) => ({ ...state }));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = () =>
    getCategories().then((c) => setValues({ ...values, categories: c.data }));

  const { title, description, price, category, categories, quantity, images } =
    values;

  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct(values, user.token)
      .then((res) => {
        window.alert(`"${res.data.title}" is created`);
        window.location.reload();
      })
      .catch((error) => {
        if (error.response.status === 400) toast.error(error.response.data);
      });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="history-wrapper">
      <div className="history__nav">
        <AdminNav />
      </div>
      <div className="history__content">
        <div className="history__form-wrapper">
          <h1 className="form__header">Create product</h1>
          <form className="form" onSubmit={handleSubmit}>
            <FileUpload
              values={values}
              setValues={setValues}
              setLoading={setLoading}
            />
            <div className="form__input-container">
              <input
                id="title"
                required
                type="text"
                name="title"
                className="form-input"
                value={title}
                onChange={handleChange}
              />
              <span className="form-span"></span>
              <label htmlFor="title" className="form-label">
                Title
              </label>
            </div>
            <div className="form__input-container">
              <input
                id="description"
                required
                type="text"
                name="description"
                className="form-input"
                value={description}
                onChange={handleChange}
              />
              <span className="form-span"></span>
              <label htmlFor="description" className="form-label">
                Description
              </label>
            </div>
            <div className="form__input-container">
              <input
                id="price"
                required
                type="number"
                name="price"
                className="form-input"
                value={price}
                onChange={handleChange}
              />
              <span className="form-span"></span>
              <label htmlFor="price" className="form-label">
                Price
              </label>
            </div>
            <div className="form__input-container">
              <input
                id="quantity"
                required
                type="number"
                name="quantity"
                className="form-input"
                value={quantity}
                onChange={handleChange}
              />
              <span className="form-span"></span>
              <label htmlFor="quantity" className="form-label">
                Quantity
              </label>
            </div>
            <div className="form__input-container">
              <select
                id="category"
                name="category"
                className="form-input"
                onChange={handleChange}
              >
                <option>Please Select</option>
                {categories.length > 0 &&
                  categories.map((c) => (
                    <option key={c._id} value={c._id}>
                      {c.name}
                    </option>
                  ))}
              </select>
              <span className="form-span"></span>
              <label htmlFor="category" className="form-label">
                Category
              </label>
            </div>
            <button className="form__btn" type="submit">
              Save
            </button>
          </form>
          {JSON.stringify(values.images)}
        </div>
      </div>
    </div>
  );
};

export default ProductCreate;
