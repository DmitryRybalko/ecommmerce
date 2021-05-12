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
import ResetPassword from "./pages/Auth/ResetPassword";
import SignIn from "./pages/Auth/SignIn";
import CompleteSignUp from "./pages/Auth/SignUp/CompleteSignUp";
import { auth } from "./util/firebaseConfig";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            email: user.email,
            token: idTokenResult.token,
          },
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
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/signup" component={SignUp}></Route>
        <Route exact path="/signin" component={SignIn}></Route>
        <Route exact path="/signup/complete" component={CompleteSignUp}></Route>
        <Route exact path="/resetPassword" component={ResetPassword}></Route>
        <Route exact path="/shop" component={Shop}></Route>
        <Route exact path="/contact" component={ContactUs}></Route>
        <Route exact path="/about" component={AboutUs}></Route>
      </Switch>
    </div>
  );
}

export default App;
