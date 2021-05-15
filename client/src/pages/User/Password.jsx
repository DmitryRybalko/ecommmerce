import { useState } from "react";
import UserNav from "../../components/UserNav";
import { auth } from "../../util/firebaseConfig";
import { toast } from "react-toastify";

const Password = () => {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setPassword("");

    await auth.currentUser
      .updatePassword(password)
      .then(() => {
        setLoading(false);
        toast.success("Password successfully updated");
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message);
      });
  };

  return (
    <div className="user-container">
      <div className="history-wrapper">
        <div className="history__nav">
          <UserNav />
        </div>
        <div className="history__form-wrapper">
          {loading ? (
            <h1 className="form__header">Loading...</h1>
          ) : (
            <h1 className="form__header">Update Password</h1>
          )}
          <form className="form change-psw-form" onSubmit={handleSubmit}>
            <div className="form__input-container">
              <input
                id="password"
                required
                type="password"
                name="password"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
              <span className="form-span"></span>
              <label htmlFor="password" className="form-label">
                New Password
              </label>
            </div>
            <button
              className="form__btn"
              type="submit"
              disabled={!password || password.length < 6 || loading}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Password;
