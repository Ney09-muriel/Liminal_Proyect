import { useParams, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { chaptersData } from "./Chapters";
import "../Stylesheets/ChapterPlayer.css";

const ChapterPlayer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const videoRef = useRef(null);

  const currentIndex = chaptersData.findIndex((c) => c.id === parseInt(id));
  const chapter = chaptersData[currentIndex];
  const prev = chaptersData[currentIndex - 1] || null;
  const next = chaptersData[currentIndex + 1] || null;

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("00:00");
  const [duration, setDuration] = useState("00:00");
  const [volume, setVolume] = useState(70);
  const [muted, setMuted] = useState(false);
  const [subsOn, setSubsOn] = useState(false);

  if (!chapter) {
    return (
      <div className="player-not-found">
        <p>Capítulo no encontrado.</p>
        <button onClick={() => navigate("/")}>Volver al inicio</button>
      </div>
    );
  }

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (isPlaying) { v.pause(); } else { v.play(); }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (!v) return;
    setProgress((v.currentTime / v.duration) * 100 || 0);
    setCurrentTime(formatTime(v.currentTime));
  };

  const handleLoadedMetadata = () => {
    const v = videoRef.current;
    if (v) setDuration(formatTime(v.duration));
  };

  const handleSeek = (e) => {
    const v = videoRef.current;
    if (!v) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    v.currentTime = pct * v.duration;
  };

  const handleVolume = (e) => {
    const val = parseInt(e.target.value);
    setVolume(val);
    if (videoRef.current) videoRef.current.volume = val / 100;
    if (val === 0) setMuted(true);
    else setMuted(false);
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !muted;
    setMuted(!muted);
  };

  const restart = () => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    setProgress(0);
    setCurrentTime("00:00");
  };

  return (
    <div className="player-page">
      {/* Navbar */}
      <nav className="player-nav">
        <span className="player-nav-logo" onClick={() => navigate("/")}>LIMINAL</span>
        <div className="player-nav-links">
          <a href="/#capitulos">CAPÍTULOS</a>
          <a href="/#personajes">PERSONAJES</a>
          <a href="/#sinopsis">SINOPSIS</a>
        </div>
      </nav>

      <div className="container player-content">

        {/* Label y título */}
        <p className="player-chapter-label">{chapter.numero}</p>
        <h1 className="player-chapter-title">{chapter.titulo}</h1>

        {/* Player */}
        <div className="player-wrapper">
          <div className="player-video-area" onClick={togglePlay}>

            <video
              ref={videoRef}
              src={chapter.video}
              className="player-video"
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={() => setIsPlaying(false)}
            />

            {/* Overlay play/pause */}
            {!isPlaying && (
              <div className="player-overlay">
                <div className="player-rune-ring">
                  <div className="player-big-play">
                    <div className="play-triangle" />
                  </div>
                </div>
                <span className="player-overlay-label">Reproducir animación</span>
              </div>
            )}

            {/* Subtítulos */}
            {subsOn && (
              <div className="player-subtitles">
                <track kind="subtitles" />
              </div>
            )}
          </div>

          {/* Controles */}
          <div className="player-controls">
            {/* Barra de progreso */}
            <div className="player-progress" onClick={handleSeek}>
              <div className="player-progress-fill" style={{ width: `${progress}%` }}>
                <div className="player-progress-dot" />
              </div>
            </div>

            {/* Fila de botones */}
            <div className="player-ctrl-row">

              {/* Play / Pause */}
              <button className="player-ctrl-btn" onClick={togglePlay} title="Play / Pausa">
                {isPlaying ? (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="3" y="2" width="4" height="12" rx="1" fill="#81c784"/>
                    <rect x="9" y="2" width="4" height="12" rx="1" fill="#81c784"/>
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <polygon points="3,1 14,8 3,15" fill="#81c784"/>
                  </svg>
                )}
              </button>

              {/* Reiniciar */}
              <button className="player-ctrl-btn" onClick={restart} title="Reiniciar">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path d="M2 7.5A5.5 5.5 0 1 1 7.5 13" stroke="#81c784" strokeWidth="1.4" strokeLinecap="round"/>
                  <polyline points="1,4.5 2,7.5 5,6.5" stroke="#81c784" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Tiempo */}
              <span className="player-time">{currentTime} / {duration}</span>

              <div className="player-ctrl-spacer" />

              {/* Subtítulos */}
              <button
                className={`player-sub-btn ${subsOn ? "active" : ""}`}
                onClick={() => setSubsOn(!subsOn)}
              >CC</button>

              {/* Volumen */}
              <div className="player-vol-wrap">
                <button className="player-ctrl-btn" onClick={toggleMute} title="Mute">
                  {muted || volume === 0 ? (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <polygon points="2,5 6,5 11,1 11,15 6,11 2,11" fill="#81c784"/>
                      <line x1="13" y1="5" x2="15" y2="11" stroke="#e57373" strokeWidth="1.4" strokeLinecap="round"/>
                      <line x1="15" y1="5" x2="13" y2="11" stroke="#e57373" strokeWidth="1.4" strokeLinecap="round"/>
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <polygon points="2,5 6,5 11,1 11,15 6,11 2,11" fill="#81c784"/>
                      <path d="M13 4.5a4.5 4.5 0 0 1 0 7" stroke="#81c784" strokeWidth="1.3" strokeLinecap="round"/>
                    </svg>
                  )}
                </button>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  value={muted ? 0 : volume}
                  onChange={handleVolume}
                  className="player-vol-slider"
                />
              </div>

              {/* Pantalla completa */}
              <button
                className="player-ctrl-btn"
                onClick={() => videoRef.current?.requestFullscreen()}
                title="Pantalla completa"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <polyline points="1,5 1,1 5,1" stroke="#81c784" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="11,1 15,1 15,5" stroke="#81c784" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="15,11 15,15 11,15" stroke="#81c784" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="5,15 1,15 1,11" stroke="#81c784" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Resumen */}
        <div className="player-summary">
          <p className="player-summary-label">Sinopsis del capítulo</p>
          <p className="player-summary-text">{chapter.resumen}</p>
        </div>

        {/* Navegación entre capítulos */}
        <div className="player-chapter-nav">
          {prev ? (
            <button className="player-nav-btn" onClick={() => navigate(`/capitulo/${prev.id}`)}>
              <span className="player-nav-arrow">←</span>
              <div className="player-nav-info">
                <span className="player-nav-label">Capítulo anterior</span>
                <span className="player-nav-title">{prev.titulo}</span>
              </div>
            </button>
          ) : <div />}

          <span className="player-chapter-counter">
            {String(currentIndex + 1).padStart(2, "0")} / {String(chaptersData.length).padStart(2, "0")}
          </span>

          {next ? (
            <button className="player-nav-btn" onClick={() => navigate(`/capitulo/${next.id}`)}>
              <div className="player-nav-info right">
                <span className="player-nav-label">Capítulo siguiente</span>
                <span className="player-nav-title">{next.titulo}</span>
              </div>
              <span className="player-nav-arrow">→</span>
            </button>
          ) : <div />}
        </div>

      </div>
    </div>
  );
};

export default ChapterPlayer;