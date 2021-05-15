import AdminNav from "../../components/AdminNav";
import "../User/user.css";

const AdminDashboard = () => {
  return (
    <div className="history-wrapper">
      <div className="history__nav">
        <AdminNav />
      </div>
      <div className="history__content">
        <h2 className="history__header">Admin dashboard</h2>
      </div>
    </div>
  );
};

export default AdminDashboard;
