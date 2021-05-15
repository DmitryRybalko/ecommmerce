import AdminNav from "../../../components/AdminNav";
import "../../User/user.css";

const CategoryCreate = () => {
  return (
    <div className="history-wrapper">
      <div className="history__nav">
        <AdminNav />
      </div>
      <div className="history__content">
        <h2 className="history__header">Category</h2>
      </div>
    </div>
  );
};

export default CategoryCreate;
