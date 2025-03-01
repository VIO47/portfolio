import "@style/SportBuddy.scss";
import { Badge } from "@chakra-ui/react";
import {
  PersonaAndrei,
  PersonaDavid,
  PersonaEmma,
  PersonaJohn,
  PersonaMaria,
  PersonaMichael,
} from "@resources/index";
import ImageCarousel from "./ImageCarousel";

const SportBuddy = () => {
  const images = {
    PersonaAndrei,
    PersonaDavid,
    PersonaEmma,
    PersonaJohn,
    PersonaMaria,
    PersonaMichael,
  };
  return (
    <div className="sport-buddy">
      <div className="sport-buddy__header">
        <h1>Sport Buddy</h1>
        <div className="sport-buddy__header__badges">
          <Badge>Concept </Badge>
          <Badge> Design </Badge>
          <Badge> A/B Testing</Badge>
        </div>
      </div>
      <div className="sport-buddy__content">
        <ImageCarousel
          height={400}
          images={Object.values(images)}
          time={5000}
        />
      </div>
    </div>
  );
};

export default SportBuddy;
