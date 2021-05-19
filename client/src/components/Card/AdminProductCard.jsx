import defaultProduct from "../../assets/default.jpg";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";

const AdminProductCard = ({ product, handleRemove }) => {
  const { title, description, images, slug } = product;
  return (
    <div className="product-card-container">
      <div className="product-card__image-container">
        <img
          className="product-card__image"
          src={images && images.length ? images[0].url : defaultProduct}
          alt="product"
        />
      </div>
      <p className="product-card__title">{title}</p>
      <p className="product-card__description">{`${
        description && description.substring(0, 70)
      }...`}</p>
      <div className="product-card__btn-container">
        {/* <button className="product-cart__btn edit">{<MdEdit />}</button> */}
        <Link to={`/admin/product/${slug}`}>
          <MdEdit />
        </Link>
        <button
          onClick={() => handleRemove(slug)}
          className="product-cart__btn delete"
        >
          {<MdDelete />}
        </button>
      </div>
    </div>
  );
};

export default AdminProductCard;
