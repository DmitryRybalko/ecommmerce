import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { auth } from "../../../util/firebaseConfig";
import { useSelector } from "react-redux";

const SignUp = ({ history }) => {
  const [email, setEmail] = useState("");

  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.token) history.push("/");
  }, [user, history]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      //url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      url: "http://localhost:3000/signup/complete",
      handleCodeInApp: true,
    };

    await auth.sendSignInLinkToEmail(email, config);
    toast.success(`We sent you an email to ${email}.`);

    window.localStorage.setItem("userEmail", email);
    setEmail("");
  };

  return (
    <div className="signIn-wrapper">
      <h1 className="form__header">Get started with us today!</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__input-container">
          <input
            id="email"
            required
            type="email"
            name="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="form-span"></span>
          <label htmlFor="email" className="form-label">
            Email
          </label>
        </div>
        <button className="form__btn" type="submit">
          Sign Up
        </button>
        <span className="form__login">
          <p className="form__login-text">
            Already have an account? Login{" "}
            <Link className="form-link" to="/signin">
              here
            </Link>
          </p>
        </span>
      </form>
    </div>
  );
};

export default SignUp;
