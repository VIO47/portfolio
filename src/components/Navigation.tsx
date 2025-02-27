import { Link, useLocation } from "react-router-dom";
import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import { IconButton } from "@chakra-ui/react";
import "@style/Navigation.scss";

const Navigation = () => {
  const location = useLocation();

  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/violeta-mara-macsim-941931215/", "_blank");
  };

  const openGitHub = () => {
    window.open("https://github.com/VIO47", "_blank");
  };

  return (
    <nav className="navigation">
      <div className="navigation-tabs">
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
      <div className="navigation-icons">
        <IconButton variant="ghost" onClick={openLinkedIn} className="icon">
          <FaLinkedin />
        </IconButton>
        <IconButton variant="ghost" onClick={openGitHub} className="icon">
          <FaSquareGithub />
        </IconButton>
      </div>
    </nav>
  );
};

export default Navigation;
