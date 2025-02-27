import '@style/Projects.scss';
import WattpadStudyImage from '@resources/wattpad-study.jpg';
import SportBuddyImage from '@resources/sport-buddy.jpg';
import ProjectCard from '@/ProjectCard.tsx';

const Projects = () => {
  // const [selectedImage, setSelectedImage] = useState<string>(null);

  // function openImage(image) {
  //   setSelectedImage(image);
  // }

  // const zoomedImage = () => {
  //   return selectedImage ? (
  //     <ZoomedImage
  //       image={selectedImage}
  //       onClose={() => setSelectedImage(null)}
  //     />
  //   ) : null;
  // };
  return (
    <div className="projects">
      <div className="projects-code">
        <h1>Coding Projects</h1>
        <div className="projects-code__list">
          <ProjectCard
            title="Quizzzz"
            description="Quizzzz is a single- and multiplayer quiz game designed to raise
              awareness about the energy consumption of everyday activities developed
              during the CSE1105 Bachelor course."
            badges={["Java", "Spring", "Full-stack"]}
            image="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          />

          <ProjectCard
            title="Printer Admin Panel"
            description="The development of an admin panel made it simple to set up badge
              printers for events. Here, staff members could see the hardware
              poll, check each printer status, ink levels, and send paper
              templates by scanning QR codes."
            badges={["TypeScript", "Vue.js 3", "Full-stack"]}
            image="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          />

          <ProjectCard
            title="Self-check-in App"
            description="On top of an existing check-in Android application, I created
              the workflow and front-end for a self-check-in feature. Event
              attendees would show their ticket QR to the tablet camera to get
              their badge printed."
            badges={["Java", "Android", "Front-end"]}
            image="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          />
        </div>
      </div>

      <div className="projects-ux">
        <h1>UX Projects</h1>
        <div className="projects-ux__list">
          <ProjectCard
            title="Sport Buddy"
            description="Sport Buddy is a mobile application that connects expats
              who want to play team sports. The application aims to help
              people form bonds by providing opportunities for them to do so.
              To determine the best design, A/B testing was performed on
              preferred scroll behavior."
            badges={["Concept", "Design", "A/B Testing"]}
            image={SportBuddyImage}
            url="/sport-buddy"
          />

          <ProjectCard
            title="Better Reading UIs"
            description="By analyzing people's visual preferences for desktop reading
              platforms, we can determine whether the current W3C standards
              are appropriate for this type of online activity. Wattpad was
              used as a playground during the study."
            badges={["Inclusivity", "User Research", "Questionnaire"]}
            image={WattpadStudyImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
