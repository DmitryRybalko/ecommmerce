import Hero from "../../components/Hero";
import Perk from "../../components/Perk";
import heroImg from "../../assets/contact/hero-image.jpg";
import { RiTimeFill, RiPhoneFill, RiMapPin2Fill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import "./contact.css";

const ContactUs = () => {
  return (
    <div className="contact-wrapper">
      <Hero
        image={heroImg}
        header={"Contact Us"}
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing elitelit dolor sit amet."
        }
      />
      <div className="perks-wrapper">
        <Perk
          header={"Physical Address"}
          text={"Ulitsa Lenina, 11, Irkutsk"}
          icon={<RiMapPin2Fill className="perk__icon" />}
        />
        <Perk
          header={"Work Hours"}
          text={"Mon. to Fri.: 8am - 6pm."}
          icon={<RiTimeFill className="perk__icon" />}
        />
        <Perk
          header={"Email Address"}
          text={"priem@bgu.ru"}
          icon={<MdEmail className="perk__icon" />}
        />
        <Perk
          header={"Phone Number"}
          text={"8 (3952) 5-0000-5"}
          icon={<RiPhoneFill className="perk__icon" />}
        />
      </div>
    </div>
  );
};

export default ContactUs;
