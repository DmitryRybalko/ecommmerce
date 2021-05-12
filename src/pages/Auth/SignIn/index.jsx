import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { auth, googleAuthProvider } from "../../../util/firebaseConfig";

const SignIn = ({ history }) => {
  let dispatch = useDispatch();

  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.token) history.push("/");
  }, [user, history]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const googleLogIn = async () => {
    auth
      .signInWithPopup(googleAuthProvider)
      .then(async (result) => {
        const { user } = result;
        const idTokenResult = await user.getIdTokenResult();
        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            email: user.email,
            token: idTokenResult.token,
          },
        });
        history.push("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      const { user } = result;
      const idTokenResult = await user.getIdTokenResult();
      dispatch({
        type: "LOGGED_IN_USER",
        payload: {
          email: user.email,
          token: idTokenResult.token,
        },
      });
      history.push("/");
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="signIn-wrapper">
      {loading ? (
        <h1 className="form__header">Loading...</h1>
      ) : (
        <h1 className="form__header">Sign in</h1>
      )}
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__input-container">
          <input
            id="email"
            type="email"
            required
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
        <div className="form__input-container">
          <input
            id="password"
            required
            type="password"
            name="password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="form-span"></span>
          <label htmlFor="password" className="form-label">
            Password
          </label>
        </div>
        <button className="form__btn" type="submit">
          Sign In
        </button>
        <button
          onClick={googleLogIn}
          className="form__btn form__btn-google"
          type="submit"
        >
          Sign In with Google
        </button>
        <Link className="forgot-psw-link" to="/resetPassword">
          Forgot your password?
        </Link>
      </form>
    </div>
  );
};

export default SignIn;
