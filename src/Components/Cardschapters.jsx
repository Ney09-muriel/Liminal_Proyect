import "../Stylesheets/Cardschapters.css";

const Cardschapters = ({ numero, titulo, descripcion }) => {
  return (
    <div className="chapter-card">
      <p className="chapter-number">{numero}</p>
      <h3 className="chapter-title">{titulo}</h3>
      <p className="chapter-desc">{descripcion}</p>
    </div>
  );
};

export default Cardschapters;