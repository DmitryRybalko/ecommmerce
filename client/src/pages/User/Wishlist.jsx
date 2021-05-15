import UserNav from "../../components/UserNav";
import "../../components/UserNav/userNav.css";
const Wishlist = () => {
  return (
    <div className="history-wrapper">
      <div className="history__nav">
        <UserNav />
      </div>
      <div className="history__content">
        <h2>user wishlist page</h2>
      </div>
    </div>
  );
};

export default Wishlist;
