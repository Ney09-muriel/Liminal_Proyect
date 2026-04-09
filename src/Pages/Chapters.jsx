import Cardschapters from "../Components/Cardschapters";
import "../Stylesheets/Chapters.css";

const chaptersData = [
  {
    id: 1,
    numero: "CAPÍTULO 1",
    titulo: "La Llegada",
    descripcion: "Ofelia llega al molino con su madre y conoce al Capitán Vidal.",
  },
  {
    id: 2,
    numero: "CAPÍTULO 2",
    titulo: "El Laberinto",
    descripcion: "Una noche, un hada guía a Ofelia hacia un antiguo laberinto de piedra.",
  },
  {
    id: 3,
    numero: "CAPÍTULO 3",
    titulo: "La Primera Prueba",
    descripcion: "El fauno encomienda a Ofelia recuperar una llave del interior de un sapo gigante.",
  },
  {
    id: 4,
    numero: "CAPÍTULO 4",
    titulo: "El Hombre Pálido",
    descripcion: "Ofelia debe enfrentar a una criatura terrorífica en un banquete prohibido.",
  },
  {
    id: 5,
    numero: "CAPÍTULO 5",
    titulo: "El Sacrificio",
    descripcion: "La prueba final exige de Ofelia la decisión más difícil de su vida.",
  },
];

const Chapters = () => {
  return (
    <section id="capitulos" className="chapters-section">
      <div className="container">
        <h2 className="chapters-title">CAPÍTULOS</h2>
        <div className="row g-4 justify-content-center">
          {chaptersData.map((chapter) => (
            <div key={chapter.id} className="col-12 col-md-6 col-lg-4">
              <Cardschapters
                numero={chapter.numero}
                titulo={chapter.titulo}
                descripcion={chapter.descripcion}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chapters;