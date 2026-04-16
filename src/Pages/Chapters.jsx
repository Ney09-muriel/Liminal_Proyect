import { useNavigate } from "react-router-dom";
import Cardschapters from "../Components/Cardschapters";
import "../Stylesheets/Chapters.css";

const chaptersData = [
  {
    id: 1,
    numero: "Capítulo I",
    titulo: "La Llegada",
    descripcion: "Ofelia llega al molino con su madre y conoce al Capitán Vidal.",
    video: "/videos/capitulo1.mp4",
    resumen: "En medio de la posguerra, Ofelia y su madre llegan a un molino en el bosque. La niña, fascinada por los cuentos, siente desde el primer momento que ese lugar esconde algo más.",
  },
  {
    id: 2,
    numero: "Capítulo II",
    titulo: "El Laberinto",
    descripcion: "Una noche, un hada guía a Ofelia hacia un antiguo laberinto de piedra.",
    video: "/videos/capitulo2.mp4",
    resumen: "Guiada por una hada con forma de mantis, Ofelia descubre el laberinto en el bosque. En su centro la espera un fauno que asegura conocer su verdadero origen.",
  },
  {
    id: 3,
    numero: "Capítulo III",
    titulo: "La Primera Prueba",
    descripcion: "El fauno encomienda a Ofelia recuperar una llave del interior de un sapo gigante.",
    video: "/videos/capitulo3.mp4",
    resumen: "Ofelia debe descender al corazón de un árbol moribundo para recuperar una llave dorada. Allí enfrenta a una criatura monstruosa y su propia valentía.",
  },
  {
    id: 4,
    numero: "Capítulo IV",
    titulo: "El Hombre Pálido",
    descripcion: "Ofelia debe enfrentar a una criatura terrorífica en un banquete prohibido.",
    video: "/videos/capitulo4.mp4",
    resumen: "En una cámara llena de manjares prohibidos, Ofelia despierta al Hombre Pálido — una criatura sin ojos que devora a quienes desobedecen.",
  },
  {
    id: 5,
    numero: "Capítulo V",
    titulo: "El Sacrificio",
    descripcion: "La prueba final exige de Ofelia la decisión más difícil de su vida.",
    video: "/videos/capitulo5.mp4",
    resumen: "El fauno le pide a Ofelia que sacrifique a su hermano recién nacido para abrir las puertas del reino. Ella se niega, y en ese acto de amor, encuentra su verdadero destino.",
  },
];

export { chaptersData };

const Chapters = () => {
  const navigate = useNavigate();

  return (
    <section id="capitulos" className="chapters-section">
      <div className="container">
        <h2 className="chapters-title">Capítulos</h2>
        <div className="row g-4 justify-content-center">
          {chaptersData.map((chapter) => (
            <div
              key={chapter.id}
              className="col-12 col-md-6 col-lg-4"
              onClick={() => navigate(`/capitulo/${chapter.id}`)}
            >
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