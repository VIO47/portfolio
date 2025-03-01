import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import "@style/Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer__1">
        <h3>MACSIM VIOLETA-MARA</h3>
        <p>Full-stack Developer | UX Enthusiast | Associate Project Manager</p>
      </div>
      <div className="footer__2">
        <h3>🍵Let's connect!</h3>
        <div className="footer__links">
          <a
            href="https://www.linkedin.com/in/violeta-mara-macsim-941931215/"
            target="_blank"
            className="icon"
          >
            <FaLinkedin />
          </a>
          <a href="https://github.com/VIO47" target="_blank" className="icon">
            <FaSquareGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
