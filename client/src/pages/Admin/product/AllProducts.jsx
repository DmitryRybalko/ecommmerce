import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AdminNav from "../../../components/AdminNav";
import AdminProductCard from "../../../components/Card/AdminProductCard";
import "../../User/user.css";
import { getProductsByCount, removeProduct } from "../../../util/product";
import { toast } from "react-toastify";
const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadAllProducts();
  }, []);

  const loadAllProducts = () => {
    setLoading(true);
    getProductsByCount(100)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const handleRemove = (slug) => {
    if (window.confirm("Delete this product?")) {
      removeProduct(slug, user.token)
        .then((res) => {
          loadAllProducts();
          toast.error(`${res.data.title} is deleted`);
        })
        .catch((error) => {
          console.log(error);
          if (error.response.status === 404) toast.error(error.response.data);
        });
    }
  };

  return (
    <div className="history-wrapper">
      <div className="history__nav">
        <AdminNav />
      </div>
      <div className="history__content">
        {loading ? (
          <h2 className="history__header">Loading...</h2>
        ) : (
          <h2 className="history__header">Admin Dashboard</h2>
        )}

        <div className="products-wrapper">
          {products.map((product) => (
            <AdminProductCard
              product={product}
              key={product._id}
              handleRemove={handleRemove}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
