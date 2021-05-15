import UserNav from "../../components/UserNav";
import "./user.css";
const History = () => {
  return (
    <div className="history-wrapper">
      <div className="history__nav">
        <UserNav />
      </div>
      <div className="history__content">
        <h2 className="history__header">user history page</h2>
      </div>
    </div>
  );
};

export default History;
