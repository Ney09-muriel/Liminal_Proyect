import { useParams, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { chaptersData } from "./Chapters";
import "../Stylesheets/ChapterPlayer.css";

const ChapterPlayer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("00:00");
  const [duration, setDuration] = useState("00:00");
  const [volume, setVolume] = useState(70);
  const [muted, setMuted] = useState(false);
  const [subsOn, setSubsOn] = useState(false);

  const currentIndex = chaptersData.findIndex((c) => c.id === parseInt(id));
  const chapter = chaptersData[currentIndex];
  const prev = chaptersData[currentIndex - 1] || null;
  const next = chaptersData[currentIndex + 1] || null;

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

      <nav className="player-nav">
        <span className="player-nav-logo" onClick={() => navigate("/")}>LIMINAL</span>
        <div className="player-nav-links">
          <a href="/#capitulos">CAPÍTULOS</a>
          <a href="/#personajes">PERSONAJES</a>
          <a href="/#sinopsis">SINOPSIS</a>
        </div>
      </nav>

      <div className="container player-content">

        <p className="player-chapter-label">{chapter.numero}</p>
        <h1 className="player-chapter-title">{chapter.titulo}</h1>

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

            {subsOn && (
              <div className="player-subtitles">
                <track kind="subtitles" />
              </div>
            )}
          </div>

          <div className="player-controls">
            <div className="player-progress" onClick={handleSeek}>
              <div className="player-progress-fill" style={{ width: `${progress}%` }}>
                <div className="player-progress-dot" />
              </div>
            </div>

            <div className="player-ctrl-row">

              <button className="player-ctrl-btn" onClick={togglePlay} title="Play / Pausa">
                {isPlaying ? (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="3" y="2" width="4" height="12" rx="1" fill="#81c784" />
                    <rect x="9" y="2" width="4" height="12" rx="1" fill="#81c784" />
                  </svg>
                ) : (
                  <i class="bi bi-play-fill"></i>
                )}
              </button>

              <button className="player-ctrl-btn" onClick={restart} title="Reiniciar">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16" fill="#81c784">
                  <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z" />
                  <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466" />
                </svg>
              </button>

              <span className="player-time">{currentTime} / {duration}</span>

              <div className="player-ctrl-spacer" />

              <button
                className={`player-sub-btn ${subsOn ? "active" : ""}`}
                onClick={() => setSubsOn(!subsOn)}
              >CC</button>

              <div className="player-vol-wrap">
                <button className="player-ctrl-btn" onClick={toggleMute} title="Mute">
                  {muted || volume === 0 ? (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <polygon points="2,5 6,5 11,1 11,15 6,11 2,11" fill="#81c784" />
                      <line x1="13" y1="5" x2="15" y2="11" stroke="#e57373" strokeWidth="1.4" strokeLinecap="round" />
                      <line x1="15" y1="5" x2="13" y2="11" stroke="#e57373" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <polygon points="2,5 6,5 11,1 11,15 6,11 2,11" fill="#81c784" />
                      <path d="M13 4.5a4.5 4.5 0 0 1 0 7" stroke="#81c784" strokeWidth="1.3" strokeLinecap="round" />
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

              <button
                className="player-ctrl-btn"
                onClick={() => videoRef.current?.requestFullscreen()}
                title="Pantalla completa"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <polyline points="1,5 1,1 5,1" stroke="#81c784" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  <polyline points="11,1 15,1 15,5" stroke="#81c784" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  <polyline points="15,11 15,15 11,15" stroke="#81c784" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  <polyline points="5,15 1,15 1,11" stroke="#81c784" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

            </div>
          </div>
        </div>

        <div className="player-summary">
          <p className="player-summary-label">Sinopsis del capítulo</p>
          <p className="player-summary-text">{chapter.resumen}</p>
        </div>

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