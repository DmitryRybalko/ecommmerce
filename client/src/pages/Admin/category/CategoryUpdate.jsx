import AdminNav from "../../../components/AdminNav";
import { useState, useEffect } from "react";
import "../../User/user.css";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import CategoryForm from "../../../components/CategoryForm";
import { getCategory, updateCategory } from "../../../util/category";

const CategoryUpdate = ({ history, match }) => {
  const { user } = useSelector((state) => ({ ...state }));
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const loadCategory = () =>
    getCategory(match.params.slug).then((c) => setName(c.data.name));

  useEffect(() => {
    loadCategory();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    updateCategory(match.params.slug, { name }, user.token)
      .then((res) => {
        setLoading(false);
        setName("");
        toast.success(`"${res.data.name}" is updated`);
        history.push("/admin/category");
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 400) toast.error(error.response.data);
      });
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
            <h1 className="form__header">Update category</h1>
          )}
          <CategoryForm
            handleSubmit={handleSubmit}
            name={name}
            setName={setName}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryUpdate;
