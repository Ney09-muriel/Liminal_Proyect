import "../Stylesheets/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-3">
            <p className="footer-logo">LIMINAL</p>
          </div>
          <div className="col-12 col-md-6 text-center">
            <p className="footer-links">
              <a href="#" className="footer-link">Enlaces</a>
              <span className="footer-dot">·</span>
              <a href="#" className="footer-link">Política de privacidad</a>
              <span className="footer-dot">·</span>
              <a href="#" className="footer-link">Términos de uso</a>
            </p>
            <p className="footer-copy">© 2025 Liminal. Todos los derechos reservados.</p>
          </div>
          <div className="col-12 col-md-3 text-end">
            <p className="footer-email">contacto@liminal.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;