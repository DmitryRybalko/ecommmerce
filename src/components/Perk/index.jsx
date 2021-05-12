const Perk = ({ icon, header, text }) => {
  return (
    <div className="perk">
      <div className="perk__icon-container">{icon}</div>
      <h3 className="perk__header">{header}</h3>
      <p className="perk__text">{text}</p>
    </div>
  );
};

export default Perk;
