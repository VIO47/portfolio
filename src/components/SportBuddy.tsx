import React from "react";
import "@style/SportBuddy.scss";
import { Badge } from "@chakra-ui/react";
import {
  PersonaAndrei,
  PersonaBazyli,
  PersonaBrandon,
  PersonaLatanya,
  PersonaStefano,
} from "@resources/sport-buddy/index";
import ImageCarousel from "./ImageCarousel";

const SportBuddy = () => {
  const images = {
    PersonaAndrei,
    PersonaBazyli,
    PersonaBrandon,
    PersonaLatanya,
    PersonaStefano,
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
      <div className="sport-buddy__content section-content">
        <div className="sport-buddy__content__personas">

        <h2>User Personas</h2>
        <div style={{ display: "flex", justifySelf: "center", position: "relative", maxWidth: "1100px", overflow: "hidden", margin: "0 auto" }}>
        <ImageCarousel
          height={600}
          images={Object.values(images)}
          time={undefined}
        />
        </div>
        </div>
      </div>
    </div>
  );
};

export default SportBuddy;
