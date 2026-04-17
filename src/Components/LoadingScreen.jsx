import "../Stylesheets/LoadingScreen.css";

const LoadingScreen = ({ titulo, numero }) => {
  return (
    <div className="loading-screen">
      <div className="loading-bg" />

      <div className="loading-center">
        {/* Anillos animados */}
        <div className="loading-rings">
          <div className="loading-ring ring-1" />
          <div className="loading-ring ring-2" />
          <div className="loading-ring ring-3" />
          <div className="loading-core">
            <div className="loading-core-dot" />
          </div>
        </div>

        {/* Texto */}
        <div className="loading-text">
          {numero && <p className="loading-numero">{numero}</p>}
          {titulo && <p className="loading-titulo">{titulo}</p>}
          <div className="loading-bar-wrap">
            <div className="loading-bar-fill" />
          </div>
        </div>
      </div>

      {/* Partículas de fondo */}
      <div className="loading-particles">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="loading-particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }} />
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;