import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { auth } from "../../../util/firebaseConfig";

const ResetPassword = ({ history }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.token) history.push("/");
  }, [user, history]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const config = {
      //url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      url: "http://localhost:3000/signin",
      handleCodeInApp: true,
    };

    await auth
      .sendPasswordResetEmail(email, config)
      .then(() => {
        setEmail("");
        setLoading(false);
        toast.success("Check your email for password reset link");
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message);
      });
  };
  return (
    <div className="signIn-wrapper">
      {loading ? (
        <h1 className="form__header">Loading...</h1>
      ) : (
        <h1 className="form__header">Reset Password</h1>
      )}
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__input-container">
          <input
            type="email"
            required
            name="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
          <label htmlFor="email" className="form-label">
            Email
          </label>
        </div>
        <button disabled={!email} className="form__btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
