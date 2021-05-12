import Hero from "../../components/Hero";
import Perk from "../../components/Perk";
import { useState } from "react";
import heroImg from "../../assets/contact/hero-image.jpg";
import { RiTimeFill, RiPhoneFill, RiMapPin2Fill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { database } from "../../util/firebaseConfig";
import { toast } from "react-toastify";
import "./contact.css";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    database
      .collection("contacts")
      .add({
        name,
        email,
        message,
      })
      .then(() => {
        toast.success("Message has been submitted");
      })
      .catch((error) => {
        toast.error(error.message);
      });
    setName("");
    setEmail("");
    setMessage("");
  };
  console.log(process.env.REACT_APP_GOOGLE_MAPS);

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
      <section className="contact-section">
        <div className="contact-section__map-container">
          <iframe
            className="map"
            title="map"
            width="600"
            height="550"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ-fiqg0w7qF0RliFHSx3V-bw&key=${process.env.REACT_APP_GOOGLE_MAPS}`}
          ></iframe>
        </div>
        <div className="contact-section__form-container">
          <h1 className="form__header">Contact Us</h1>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form__input-container">
              <input
                id="name"
                type="text"
                required
                name="name"
                className="form-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span className="form-span"></span>
              <label htmlFor="name" className="form-label">
                Name
              </label>
            </div>
            <div className="form__input-container">
              <input
                id="email"
                type="email"
                required
                name="email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="form-span"></span>
              <label htmlFor="email" className="form-label">
                Email
              </label>
            </div>
            <div className="form__input-container">
              <textarea
                id="message"
                type="text"
                required
                name="message"
                className="form-input"
                value={message}
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button className="form__btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
