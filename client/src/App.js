import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import SignUp from "./pages/Auth/SignUp";
import Shop from "./pages/Shop";
import ContactUs from "./pages/Contact";
import AboutUs from "./pages/About";
import History from "./pages/User/History";
import UserRoute from "./components/Routes/UserRoute";
import ResetPassword from "./pages/Auth/ResetPassword";
import SignIn from "./pages/Auth/SignIn";
import CompleteSignUp from "./pages/Auth/SignUp/CompleteSignUp";
import { auth } from "./util/firebaseConfig";
import { currentUser } from "./util/auth";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        currentUser(idTokenResult.token)
          .then((res) => {
            dispatch({
              type: "LOGGED_IN_USER",
              payload: {
                name: res.data.name,
                email: res.data.email,
                token: idTokenResult.token,
                role: res.data.role,
                _id: res.data._id,
              },
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
    return () => unsubscribe();
  });

  return (
    <div className="App">
      <Navbar />
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup/complete" component={CompleteSignUp} />
        <Route exact path="/resetPassword" component={ResetPassword} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/contact" component={ContactUs} />
        <UserRoute exact path="/user/history" component={History} />
        <Route exact path="/about" component={AboutUs} />
      </Switch>
    </div>
  );
}

export default App;
