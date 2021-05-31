import AdminNav from "../../../components/AdminNav";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../../User/user.css";
import { toast } from "react-toastify";
import CategoryForm from "../../../components/CategoryForm";
import { useSelector } from "react-redux";
import {
  createCategory,
  getCategories,
  removeCategory,
} from "../../../util/category";
import { MdDelete, MdEdit } from "react-icons/md";

const CategoryCreate = () => {
  const { user } = useSelector((state) => ({ ...state }));
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  const loadCategories = () =>
    getCategories().then((c) => setCategories(c.data));

  useEffect(() => {
    loadCategories();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    createCategory({ name }, user.token)
      .then((res) => {
        setLoading(false);
        setName("");
        toast.success(`"${res.data.name}" is created`);
        loadCategories();
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 400) toast.error(error.response.data);
      });
  };

  const handleRemove = async (slug) => {
    if (window.confirm("Delete category?")) {
      setLoading(true);
      await removeCategory(slug, user.token)
        .then((res) => {
          setLoading(false);
          toast.error(`${res.data.name} deleted`);
          loadCategories();
        })
        .catch((error) => {
          setLoading(false);
          if (error.response.status === 400) toast.error(error.response.data);
        });
    }
  };

  return (
    <div className="history-wrapper">
      <div className="history__nav">
        <AdminNav />
      </div>
      <div className="history__content">
        <div className="history__form-wrapper">
          {loading ? (
            <h1 className="form__header">Loading...</h1>
          ) : (
            <h1 className="form__header">Create category</h1>
          )}
          <CategoryForm
            handleSubmit={handleSubmit}
            name={name}
            setName={setName}
            loading={loading}
          />
          {categories.map((c) => (
            <div className="category" key={c._id}>
              {c.name}
              <div className="category-container">
                <span
                  className="category__wrapper"
                  onClick={() => handleRemove(c.slug)}
                >
                  {<MdDelete className="category__icon" />}
                </span>

                <Link to={`/admin/category/${c.slug}`}>
                  <span className="category__wrapper">{<MdEdit />}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryCreate;
