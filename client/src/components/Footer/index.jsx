import FooterLink from "./FooterLink";
import FooterCol from "./FooterCol";
import { FaTwitter, FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiPhoneFill, RiMapPin2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__layer">
        <div className="footer__layer-container">
          <div className="footer__layer__icons-container">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              {<FaFacebookSquare className="footer__layer__icons__icon" />}
            </a>
            <a href="https://twitter.com/home" target="_blank" rel="noreferrer">
              {<FaTwitter className="footer__layer__icons__icon" />}
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              {<FaInstagram className="footer__layer__icons__icon" />}
            </a>
            <a href="tel:83952500005">
              {<RiPhoneFill className="footer__layer__icons__icon" />}
            </a>
            <a href="mailto:priem@bgu.ru">
              {<MdEmail className="footer__layer__icons__icon" />}
            </a>
          </div>
          <div className="footer__layer-nav">
            <Link to="/shop" className="footer__layer-nav__link">
              Shop
            </Link>

            <Link to="/contact" className="footer__layer-nav__link">
              Contact Us
            </Link>

            <Link to="/about" className="footer__layer-nav__link">
              About Us
            </Link>
          </div>
        </div>
      </div>
      <div className="footer__layer1">
        <div className="footer__layer1-container">
          <FooterCol
            header={"About Us"}
            link1={<FooterLink where={"/shop"} text={"About organization"} />}
            link2={<FooterLink where={"/shop"} text={"Our clients"} />}
            link3={<FooterLink where={"/shop"} text={"Our partners"} />}
          />
          <FooterCol
            header={"Quick Links"}
            link1={<FooterLink where={"/shop"} text={"Introduction"} />}
            link2={<FooterLink where={"/shop"} text={"Organizaion Team"} />}
            link3={<FooterLink where={"/shop"} text={"Press Enquiries"} />}
          />
          <FooterCol
            header={"Important Links"}
            link1={<FooterLink where={"/shop"} text={"Privacy Policy"} />}
            link2={<FooterLink where={"/shop"} text={"Cookies Policy"} />}
            link3={<FooterLink where={"/shop"} text={"Terms & Conditions"} />}
          />
          <FooterCol
            header={"Contact info"}
            info={
              "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
            }
          />
          <FooterCol
            header={"Achievements"}
            info={
              "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
            }
          />
          <FooterCol
            header={"Useful information"}
            info={
              "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
            }
          />
          <FooterCol
            header={"Shipping information"}
            info={
              "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
            }
          />
          <FooterCol
            header={"Customer Service"}
            info={
              "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
            }
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
