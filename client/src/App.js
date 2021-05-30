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
import Password from "./pages/User/Password";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import CategoryCreate from "./pages/Admin/category/CategoryCreate";
import CategoryUpdate from "./pages/Admin/category/CategoryUpdate";
import ProductCreate from "./pages/Admin/product/ProductCreate";
import ProductEdit from "./pages/Admin/product/ProductEdit";
import UserRoute from "./components/Routes/UserRoute";
import AdminRoute from "./components/Routes/AdminRoute";
import ResetPassword from "./pages/Auth/ResetPassword";
import SignIn from "./pages/Auth/SignIn";
import Product from "./pages/Product";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CompleteSignUp from "./pages/Auth/SignUp/CompleteSignUp";
import { auth } from "./util/firebaseConfig";
import { currentUser } from "./util/auth";
import AllProducts from "./pages/Admin/product/AllProducts";
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
  }, [dispatch]);

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
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/contact" component={ContactUs} />
        <Route exact path="/product/:slug" component={Product} />
        <UserRoute exact path="/user/history" component={History} />
        <UserRoute exact path="/checkout" component={Checkout} />
        <UserRoute exact path="/user/password" component={Password} />
        <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />
        <AdminRoute exact path="/admin/product" component={ProductCreate} />
        <AdminRoute exact path="/admin/product/:slug" component={ProductEdit} />
        <AdminRoute exact path="/admin/category" component={CategoryCreate} />
        <AdminRoute exact path="/admin/products" component={AllProducts} />
        <AdminRoute
          exact
          path="/admin/category/:slug"
          component={CategoryUpdate}
        />
        <Route exact path="/about" component={AboutUs} />
      </Switch>
    </div>
  );
}

export default App;
