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
      <div className="sport-buddy__content">
        <p><b>Sport Buddy</b> is a mobile-app concept, created to address the gap in connecting people from multicultural backgrounds who struggle to find partners for sports activities. Developed as part of a university course, our team of six students conducted market research, user analysis, and prototyping to explore how we could bridge this gap. Given the complexity of the project, we took on dual roles as <b>UX Researchers</b> and <b>UI Designers </b>.</p>

        <div className="sport-buddy__content__problem">
          <h2>Problem</h2>
          <p>
            New expats in a new country often struggle to make connections and
            find people with similar interests.
          </p>
        </div>
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
        <div className="sport-buddy__content__design">
          <h2>Design</h2>
          <p>
            New expats in a new country often struggle to make connections and
            find people with similar interests.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SportBuddy;
