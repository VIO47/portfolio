import "@style/About.scss";
import ImageCarousel from "@/ImageCarousel.tsx";
import Food1 from "@resources/food_1.jpg";
import Food2 from "@resources/food_2.jpg";
import Food3 from "@resources/food_3.jpg";
import Food4 from "@resources/food_4.jpg";
import Food5 from "@resources/food_5.jpg";

const About = () => {
  const images = [Food1, Food2, Food3, Food4, Food5];

  return (
    <div className="about">
      <div className="about__text-1">
        <h2>ABOUT ME 👋</h2>
        <div className="about__text-1__grid half-center-grid">
          <div className="about__text-1__1">
            <h4>
              Hello! My name is Violeta and I am a young and enthusiastic software
              developer eager to broaden my horizons. I'm passionate about the
              entire development process—whether it's diving into market and
              user research, coming up with designs, or bringing ideas to life
              through implementation.
            </h4>
          </div>
          <div className="about__text-1__2">
            <h4>
              I am always eager to learn and improve my skills. In my spare
              time, I play around in Figma and read about UX principles and best
              practices, expanding my knowledge of user-centered design and how
              it influences digital experiences.
            </h4>
          </div>
        </div>
      </div>

      <div className="about__text-2">
        <div className="about__text-2__grid">
          <div className="about__text-2__1">
            <h2>BEYOND MY 9 TO 5</h2>
            <h4>
              When I'm not in front of my computer, you'll find me enjoying a
              cup of coffee and a good book. Aside from my self-development
              books, I'm always on the hunt for good thrillers or crime novels
              to read. I also capture a lot of photos of my culinary
              experiments!
            </h4>
            <h4>
              Traveling is a huge passion of mine, and I enjoy discovering new
              places. My Google Maps is constantly filled with new pinpoints to
              see or try, even in my hometown. Step by step, I cross off my bucket
              list, collecting unforgettable experiences along the way.
            </h4>
          </div>
          <div className="about__text-2__2">
            <ImageCarousel height={440} images={images} time={6000} />
          </div>
        </div>
      </div>

      <div className="about__text-3">
        <h2>MY EDUCATION</h2>
        <div className="half-center-grid">
          <div className="about__text-3__masters">
            <h3 className="title">🎓 Msc Computer Science | TU Delft</h3>
            <h4>
              I'm pursuing a Master's degree in Software Engineering and
              Information Management, complemented by additional courses such as
              System Design and Research Ethics. Through team projects and
              research, I gained hands-on experience in both technical and
              user-focused topics, including the use of LLMs in software
              engineering and quality assessment of reading platform UIs.
            </h4>
          </div>

          <div className="about__text-3__bachelors">
            <h3 className="title">🎓 Bsc Computer Science & Engineering | TU Delft</h3>
            <h4>
              I completed my Bachelor's degree with a specialization in Data,
              where I studied core computer science and engineering concepts. My
              curriculum covered core programming & software engineering
              paradigms, web development and testing & quality assurance. I
              gained hands-on experience in team-based software development
              through projects introducing me to the industry setting, while
              also exploring academic research through my final thesis.
            </h4>
          </div>

          <div className="about__text-3__minor">
            <h3 className="title">📝 Minor Project Management | TU Delft</h3>
            <h4>
              For five months, I collaborated with students from diverse
              backgrounds on a university project for expanding the campus
              grounds. The minor covered all stages of a complex project,
              including proposal writing, solution analysis, design, project
              management, finance, and crisis management. It was complemented by
              courses in project management, law, and finance, emphasizing
              adaptability to project requirements.
            </h4>
          </div>

          <div className="about__text-3__capm">
            <h3 className="subtitle">👩🏼‍🎓 CAPM Diploma | PMI The Netherlands</h3>
            <h4>
              Earned an introductory Project Management diploma through
              self-study and a few guided lectures by CAPM The Netherlands. It
              covered key topics like project management basics, scheduling,
              business analysis, collaboration, and team dynamics.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
