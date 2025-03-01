import { Link, useLocation } from "react-router-dom";
import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import "@style/Navigation.scss";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="navigation">
      <div className="navigation__tabs">
        {["home", "projects"].map((path) => (
          <Link
            key={path}
            to={`/${path.replace(" ", "-")}`}
            className="link"
            aria-current={location.pathname === `/${path.replace(" ", "-")}` ? "page" : undefined}
          >
            {path.charAt(0).toUpperCase() + path.slice(1)}
          </Link>
        ))}
      </div>
      <div className="navigation__icons">
        <a href="https://www.linkedin.com/in/violeta-mara-macsim-941931215/" target="_blank" className="icon">
          <FaLinkedin />
        </a>
        <a href="https://github.com/VIO47" target="_blank" className="icon">
          <FaSquareGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
