import { Link } from "react-router-dom";

const FooterLink = ({ text, where }) => {
  return (
    <Link className="footer-col__link" to={where}>
      {text}
    </Link>
  );
};

export default FooterLink;
