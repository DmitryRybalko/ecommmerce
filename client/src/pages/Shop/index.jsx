import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import ProductCard from "../../components/Card/ProductCard";
import { useEffect, useState } from "react";
import { getProductsPagination } from "../../util/product";
import HeroImage from "../../assets/contact/hero-image.jpg";
import "./shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const loadAllProducts = () => {
    getProductsPagination("createdAt", "desc", page)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    loadAllProducts();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [page]);

  const nextPage = (direction) => {
    if (direction === "Next" && products.length > 5) {
      setPage(page + 1);
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else if (direction === "Prev" && page > 1) {
      setPage(page - 1);
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="shop-wrapper">
        <Hero
          image={HeroImage}
          header={"Take your adventure to the next level."}
        />
        <div className="products-container">
          {products.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
        <div className="pagination">
          <button onClick={() => nextPage("Prev")} className="pagination__btn">
            Prev
          </button>
          <button onClick={() => nextPage("Next")} className="pagination__btn">
            Next
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
