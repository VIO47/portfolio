import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import "@style/Footer.scss";
import { useState, useEffect } from "react";

const Footer = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 690);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 690);
      };
  
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  return (
    <footer>
      {isMobile ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 475">
          <path
            fill="#D96A7F"
            fillOpacity="1"
            d="M0,190L34.3,196.3C68.6,202,137,214,206,201.7C274.3,190,343,152,411,126.7C480,101,549,87.5,617,74C685.7,61.5,754,49.5,823,37.5C891.4,25.5,960,13.5,1029,59C1097.1,104.5,1166,209.5,1234,241.7C1302.9,274,1371,234,1406,214L1440,190L1440,475L0,475Z"
          ></path>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 260">
          <path
            fill="#D96A7F"
            fillOpacity="1"
            d="M0,160L34.3,165.3C68.6,171,137,181,206,170.7C274.3,160,343,128,411,106.7C480,85,549,75,617,64C685.7,53,754,43,823,32C891.4,21,960,11,1029,48C1097.1,85,1166,171,1234,197.3C1302.9,224,1371,192,1406,176L1440,160L1440,260L1405.7,260C1371.4,260,1303,260,1234,260C1165.7,260,1097,260,1029,260C960,260,891,260,823,260C754.3,260,686,260,617,260C548.6,260,480,260,411,260C342.9,260,274,260,206,260C137.1,260,69,260,34,260L0,260Z"
          ></path>
        </svg>
      )}
      <div className="footer__content">
        <div className="footer__1">
          <h3>MACSIM VIOLETA-MARA</h3>
          <p>
            Full-stack Developer | UX Enthusiast | Associate Project Manager
          </p>
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
      </div>
    </footer>
  );
};

export default Footer;
