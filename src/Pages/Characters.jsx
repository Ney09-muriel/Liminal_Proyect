import Cardscharacters from "../Components/Cardscharacters";
import "../Stylesheets/Characters.css";

const charactersData = [
  {
    id: 1,
    nombre: "Ofelia",
    descripcion: "Una niña de mirada curiosa y corazón valiente que se adentra en el mundo del laberinto.",
    imagen: "/Ofelia.png",
  },
  {
    id: 2,
    nombre: "El Fauno",
    descripcion: "Guardián milenario del laberinto, custodio de secretos antiguos y pruebas olvidadas.",
    imagen: "/Fauno.png",
  },
  {
    id: 3,
    nombre: "Capitán Vidal",
    descripcion: "Un oficial despiadado cuya crueldad representa los verdaderos monstruos del mundo real.",
    imagen: "/Vidal.png",
  },
];

const Characters = () => {
  return (
    <section id="personajes" className="characters-section">
      <div className="container">
        <h2 className="characters-title">PERSONAJES</h2>
        <div className="row justify-content-center">
          {charactersData.map((character) => (
            <div key={character.id} className="col-12 col-md-4">
              <Cardscharacters
                nombre={character.nombre}
                descripcion={character.descripcion}
                imagen={character.imagen}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Characters;