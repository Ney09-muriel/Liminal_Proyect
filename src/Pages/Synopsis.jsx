import "../Stylesheets/Synopsis.css";

const Synopsis = () => {
  return (
    <section id="sinopsis" className="synopsis-section">
      <div className="container">
        <h2 className="synopsis-title">SINOPSIS</h2>
        <div className="row align-items-start">
          <div className="col-12 col-md-4 text-center">
            <img src="/OfeliaFull.png" alt="Ofelia" className="synopsis-img" />
          </div>
          <div className="col-12 col-md-8">
            <h4 className="synopsis-subtitle">PRÓLOGO</h4>
            <p className="synopsis-text">
              En una época marcada por la oscuridad y el miedo, donde la guerra ha dejado cicatrices en el alma de los hombres, existe un mundo oculto más allá de lo que los ojos pueden ver. Un lugar donde la realidad se confunde con la fantasía, y los sueños abren portales hacia verdades olvidadas.
            </p>
            <p className="synopsis-text">
              Allí, entre raíces antiguas y susurros del bosque, se levanta un laberinto milenario. En su centro habita un fauno, guardián de secretos tan antiguos como el tiempo, esperando a quien sea digno de escuchar su llamado.
            </p>
            <p className="synopsis-text">
              Ofelia, una niña de mirada curiosa y corazón valiente, descubrirá que los monstruos no siempre viven en los cuentos... a veces caminan entre los hombres. Su viaje será una prueba entre la inocencia y la oscuridad, entre el deber y el deseo de escapar a un mundo mejor.
            </p>
            <p className="synopsis-text">
              El laberinto del fauno no es solo una historia de fantasía, sino un espejo donde se reflejan los miedos y esperanzas de quienes se atreven a cruzar el umbral entre lo real y lo imaginario.
            </p>

            <hr className="synopsis-divider" />

            <h4 className="synopsis-subtitle">FINAL</h4>
            <p className="synopsis-text">
              Al final del camino, Ofelia comprende que el verdadero laberinto no estaba hecho de piedra y musgo, sino de las decisiones que tomó con el corazón. En su último acto de valentía, elige la inocencia sobre la crueldad, el sacrificio sobre la supervivencia. Y en ese instante, las puertas del reino subterráneo se abren para ella, revelando que la princesa perdida siempre estuvo ahí.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Synopsis;