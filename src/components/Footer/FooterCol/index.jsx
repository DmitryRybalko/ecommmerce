import "./footerCol.css";

const FooterCol = ({ header, link1, link2, link3, info }) => {
  return (
    <div className="footer-col">
      <h3 className="footer-col__header">{header}</h3>
      {link1}
      {link2}
      {link3}
      <p className="footer-col__text-info">{info}</p>
    </div>
  );
};

export default FooterCol;
