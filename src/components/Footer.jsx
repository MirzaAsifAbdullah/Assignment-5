import logo from '../assets/logo-text.png';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">

        <div className="footer-brand">
          <img src={logo} alt="Dev Stack" />

          <p>
            Build your ideal development stack with the right technologies
            for your next project.
          </p>

          <div className="footer-socials">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Twitter">𝕏</a>
            <a href="#" aria-label="GitHub">Git</a>
            <a href="#" aria-label="LinkedIn">in</a>
          </div>
        </div>

        <div className="footer-links-group">
          <h3>Product</h3>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
          <a href="#technologies">Your Stack</a>
        </div>

        <div className="footer-links-group">
          <h3>Company</h3>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#">Careers</a>
        </div>

        <div className="footer-links-group">
          <h3>Legal</h3>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Cookies</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Dev Stack. All rights reserved.</p>

        <div>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;