import "../Stylesheets/Cardscharacters.css";

const Cardscharacters = ({ nombre, descripcion, imagen }) => {
  return (
    <div className="character-card text-center">
      <img src={imagen} alt={nombre} className="character-img" />
      <h3 className="character-name">{nombre}</h3>
      <p className="character-desc">{descripcion}</p>
    </div>
  );
};

export default Cardscharacters;