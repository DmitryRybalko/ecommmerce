import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { auth } from "../../../util/firebaseConfig";

const CompleteSignUp = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    setEmail(window.localStorage.getItem("userEmail"));
  }, []);

  useEffect(() => {
    if (user && user.token) history.push("/");
  }, [user, history]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //validation
    if (!email || !password) {
      toast.error("Email and password are required");
      return;
    }
    if (password.length < 6) {
      toast.error("Password needs to be 6 characters or more");
      return;
    }

    try {
      const result = await auth.signInWithEmailLink(
        email,
        window.location.href
      );
      if (result.user.emailVerified) {
        window.localStorage.removeItem("userEmail");
        let user = auth.currentUser;
        await user.updatePassword(password);
        //const idTokenResult = await user.getIdTokenResult();

        history.push("/");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="signIn-wrapper">
      <h1 className="form__header">Complete Registration</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__input-container">
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            disabled
            value={email}
          />
        </div>
        <div className="form__input-container">
          <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="form-span"></span>
          <label htmlFor="password" className="form-label">
            Password
          </label>
        </div>
        <button className="form__btn" type="submit">
          Copmlete Registration
        </button>
      </form>
    </div>
  );
};

export default CompleteSignUp;
