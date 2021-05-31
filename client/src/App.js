import { useEffect, lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "./util/firebaseConfig";
import { currentUser } from "./util/auth";
import { useDispatch } from "react-redux";
import LoadingSpinner from "./components/LoadingSpinner";

const SignIn = lazy(() => import("./pages/Auth/SignIn"));
const SignUp = lazy(() => import("./pages/Auth/SignUp"));
const Home = lazy(() => import("./pages/Home"));
const Navbar = lazy(() => import("./components/Navbar"));
const Shop = lazy(() => import("./pages/Shop"));
const ContactUs = lazy(() => import("./pages/Contact"));
const AboutUs = lazy(() => import("./pages/About"));
const History = lazy(() => import("./pages/User/History"));
const Password = lazy(() => import("./pages/User/Password"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const CategoryCreate = lazy(() =>
  import("./pages/Admin/category/CategoryCreate")
);
const CategoryUpdate = lazy(() =>
  import("./pages/Admin/category/CategoryUpdate")
);
const ProductCreate = lazy(() => import("./pages/Admin/product/ProductCreate"));
const ProductEdit = lazy(() => import("./pages/Admin/product/ProductEdit"));
const UserRoute = lazy(() => import("./components/Routes/UserRoute"));
const AdminRoute = lazy(() => import("./components/Routes/AdminRoute"));
const ResetPassword = lazy(() => import("./pages/Auth/ResetPassword"));
const Payment = lazy(() => import("./pages/Payment"));
const Product = lazy(() => import("./pages/Product"));
const AdminDashboard = lazy(() => import("./pages/Admin/AdminDashboard"));
const CompleteSignUp = lazy(() => import("./pages/Auth/SignUp/CompleteSignUp"));
const AllProducts = lazy(() => import("./pages/Admin/product/AllProducts"));

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
    <Suspense fallback={<LoadingSpinner />}>
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
          <UserRoute exact path="/user/payment" component={Payment} />
          <UserRoute exact path="/checkout" component={Checkout} />
          <UserRoute exact path="/user/password" component={Password} />
          <AdminRoute
            exact
            path="/admin/dashboard"
            component={AdminDashboard}
          />
          <AdminRoute exact path="/admin/product" component={ProductCreate} />
          <AdminRoute
            exact
            path="/admin/product/:slug"
            component={ProductEdit}
          />
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
    </Suspense>
  );
}

export default App;
