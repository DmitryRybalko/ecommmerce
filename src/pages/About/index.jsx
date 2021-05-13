import Hero from "../../components/Hero";
import Perk from "../../components/Perk";
import TeamMember from "../../components/TeamMember";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { MdHighQuality } from "react-icons/md";
import { RiMedalFill, RiEarthFill } from "react-icons/ri";
import { FaSun } from "react-icons/fa";
import pousereImg from "../../assets/about/posuere.jpg";
import melissa from "../../assets/about/melissa.jpg";
import nicolas from "../../assets/about/nicolas.jpg";
import annette from "../../assets/about/annette.jpg";
import heroImg from "../../assets/about/about-hero.jpg";

const AboutUs = () => {
  return (
    <div className="about-wrapper">
      <Hero
        image={heroImg}
        header={"About Us"}
        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
      />
      <div className="perks-wrapper">
        <Perk
          header={"High Precision"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. "
          }
          icon={<MdHighQuality className="perk__icon" />}
        />
        <Perk
          header={"Award Winning"}
          text={
            " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi . "
          }
          icon={<RiMedalFill className="perk__icon" />}
        />
        <Perk
          header={"Environment Friendly"}
          text={"Duis aute irure dolor in reprehenderit in voluptate velit."}
          icon={<FaSun className="perk__icon" />}
        />
        <Perk
          header={"Worldwide Shipping"}
          text={
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa."
          }
          icon={<RiEarthFill className="perk__icon" />}
        />
      </div>
      <section className="about-section">
        <div className="about-section-container">
          <h2 className="about-section__header header">
            Posuere Maecenas Tincidunt
          </h2>
          <p className="about-section__text text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            nulla veniam. Possimus consectetur dolorem, sit necessitatibus
            tempora.
          </p>
          <p className="about-section__text text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            nulla veniam. Possimus consectetur dolorem, sit necessitatibus
            tempora est distinctio eligendi nulla saepe placeat repellat,
            molestiae voluptas asperiores iste inventore cupiditate.
          </p>
          <Link className="about-section__link" to="/shop">
            See Collection
          </Link>
        </div>
        <div className="about-section-image-container">
          <img
            className="image-container__image"
            src={pousereImg}
            alt="man with a backpack"
          />
        </div>
      </section>
      <section className="about-team">
        <h2 className="about-team__header header">Our Team</h2>
        <p className="about-team__text text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
        <div className="about-team__team-members">
          <TeamMember
            photo={melissa}
            name={"Melissa Peterson"}
            position={"Creative Head"}
            text={
              "Suspendisse potenti nullam ac tortor. Amet aliquam id diam maecenas amet dictum sitamet."
            }
          />
          <TeamMember
            photo={nicolas}
            name={"Nicolas Anderson"}
            position={"Marketing Director"}
            text={
              "Neque gravida in fermentum et sollicitudin ac orci phasellus egestas dignissim suspendisse."
            }
          />
          <TeamMember
            photo={annette}
            name={"Annette Ferintor"}
            position={"Brand Designer"}
            text={
              "Pellentesque eu tincidunt tortor aliquam nulla facilisi cursus sit amet dictum sit amet justo."
            }
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
