import { useEffect, useState } from "react";
import { Badge } from "@chakra-ui/react";
import ProfilePicture from "@resources/Personal_photo.jpg";
import "@style/Home.scss";
import About from "@/About";

const Home = () => {
  const [text, setText] = useState("");
  const fullText = "Painting pixels on your screen.";

  useEffect(() => {
    let i = 0;

    const typeWriter = () => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
        setTimeout(typeWriter, 100);
      }
    };

    typeWriter();
  }, []);

  return (
    <div className="home">
      <div className="home__text-1 content-section">
        <div>
          <div className="name">
            <h1 className="title">VIOLETA-MARA MACSIM.</h1>
          </div>
          <div className="typewriter">
            <h1 className="subtitle">
              {text} <span aria-hidden="true" className="cursor"></span>
            </h1>
          </div>
          <div className="home__text-badges">
            <div>
              <Badge variant="solid" colorScheme="blue">
                Full-stack Developer
              </Badge>
            </div>
            <div>
              <Badge variant="solid" colorScheme="blue">
                UX Enthusiast
              </Badge>
            </div>
            <div>
              <Badge variant="solid" colorScheme="blue">
                Associate Project Manager
              </Badge>
            </div>
          </div>
        </div>
        <div className="home__profile-pic">
          <img src={ProfilePicture} alt="Profile pic" />
        </div>
      </div>
      <About />
    </div>
  );
};

export default Home;
