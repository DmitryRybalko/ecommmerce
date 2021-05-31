import Hero from "../../components/Hero";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import ProductCard from "../../components/Card/ProductCard";
import HeroImage from "../../assets/contact/hero-image.jpg";
import { getProducts } from "../../util/product";
import item1 from "../../assets/home/item1.jpg";
import item2 from "../../assets/home/item2.jpg";
import item3 from "../../assets/home/item3.jpg";
import item4 from "../../assets/home/item4.jpg";
import "./home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    loadAllProducts();
    loadPopularProducts();
  }, []);

  const loadAllProducts = () => {
    getProducts("createdAt", "desc", 3)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loadPopularProducts = () => {
    getProducts("sold", "desc", 3)
      .then((res) => {
        setPopularProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const gradient =
    "linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(1, 1, 1, 1))";

  return (
    <div className="home-wrapper">
      <Hero
        image={HeroImage}
        header={"Lorem ipsum dolor sit, elit."}
        text={
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      />
      <div className="types-wrapper">
        <h2 className="types-wrapper__header">Backpack Types</h2>
        <p className="types-wrapper__text">Molestie ac feugiat sed lectus</p>
      </div>
      <div className="types-wrapper-showcase content-wrapper">
        <div className="showcase__items-container">
          <div className="showcase__item">
            <div
              className="showcase__item__image-container"
              style={{ backgroundImage: `${gradient}, url(${item1})` }}
            ></div>
            <div className="showcase__item__description">
              <h3 className="description__header">Maecenas Ultricies Mieget</h3>
              <p className="description__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate, dolor sit elit.
              </p>
            </div>
          </div>
          <div className="showcase__item">
            <div
              className="showcase__item__image-container"
              style={{ backgroundImage: `${gradient}, url(${item2})` }}
            ></div>
            <div className="showcase__item__description">
              <h3 className="description__header">Laoreet Nonarcu Curabitur</h3>
              <p className="description__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate, dolor sit elit.
              </p>
            </div>
          </div>
          <div className="showcase__item">
            <div
              className="showcase__item__image-container"
              style={{ backgroundImage: `${gradient}, url(${item3})` }}
            ></div>
            <div className="showcase__item__description">
              <h3 className="description__header">Facilis Volutpat Estvelit</h3>
              <p className="description__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate, dolor sit elit.
              </p>
            </div>
          </div>
          <div className="showcase__item">
            <div
              className="showcase__item__image-container"
              style={{ backgroundImage: `${gradient}, url(${item4})` }}
            ></div>
            <div className="showcase__item__description">
              <h3 className="description__header">
                Cursus Metus Aliquam Eleifend
              </h3>
              <p className="description__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate, dolor sit elit.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="new-wrapper content-wrapper">
        <div className="types-wrapper">
          <h2 className="types-wrapper__header">New Arrivals</h2>
          <p className="types-wrapper__text">Molestie ac feugiat sed lectus</p>
        </div>
        <div className="products">
          {products.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      </div>
      <div className="popular-wrapper content-wrapper">
        <div className="types-wrapper">
          <h2 className="types-wrapper__header">Popular</h2>
          <p className="types-wrapper__text">Molestie ac feugiat sed lectus</p>
        </div>
        <div className="products products__popular">
          {popularProducts.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
