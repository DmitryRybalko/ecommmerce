import React from "react";
import { FaLinkedin, FaTwitter, FaFacebookSquare } from "react-icons/fa";

const TeamMember = ({ photo, name, position, text }) => {
  return (
    <div className="team-members__member">
      <div className="member__photo">
        <img className="member__photo__img" src={photo} alt={name} />
      </div>
      <div className="member__info">
        <h3 className="member__name">{name}</h3>
        <h4 className="member__position">{position}</h4>
        <p className="member__text text">{text}</p>
        <div className="member__sm">
          <a
            className="sm__link"
            href="https://www.facebook.com/"
            target="_blank"
          >
            <FaFacebookSquare className="sm__link__icon" />
          </a>
          <a
            className="sm__link"
            href="https://twitter.com/home"
            target="_blank"
          >
            <FaTwitter className="sm__link__icon" />
          </a>
          <a
            className="sm__link"
            href="https://www.linkedin.com/"
            target="_blank"
          >
            <FaLinkedin className="sm__link__icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
