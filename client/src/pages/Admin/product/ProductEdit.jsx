import AdminNav from "../../../components/AdminNav";
import { useState, useEffect } from "react";
import "../../User/user.css";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { getProduct, updateProduct } from "../../../util/product";
import { getCategories } from "../../../util/category";
import FileUpload from "../../../components/FileUpload";
import "../admin.css";

const initState = {
  title: "",
  description: "",
  price: "",
  category: "",
  quantity: "",
  images: [],
};

const ProductEdit = ({ match, history }) => {
  const { user } = useSelector((state) => ({ ...state }));
  const [values, setValues] = useState(initState);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const { slug } = match.params;

  const { title, description, price, category, quantity } = values;

  useEffect(() => {
    loadProduct();
    loadCategories();
  }, []);

  const loadProduct = () => {
    getProduct(slug)
      .then((p) => {
        setValues({ ...values, ...p.data });
      })
      .catch((error) => console.log(error));
  };

  const loadCategories = () =>
    getCategories().then((c) => setCategories(c.data));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    updateProduct(slug, values, user.token)
      .then((res) => {
        setLoading(false);
        toast.success(`${res.data.title} is updated`);
        history.push("/admin/products");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        toast.error(error.response.data);
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
        <div className="history__form-wrapper product-form">
          {loading ? (
            <h1 className="form__header form__header-update-product">
              Loading...
            </h1>
          ) : (
            <h1 className="form__header form__header-update-product">
              Update product
            </h1>
          )}

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
                value={category._id}
              >
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
        </div>
      </div>
    </div>
  );
};

export default ProductEdit;
