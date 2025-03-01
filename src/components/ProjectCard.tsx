import { Button, Card, Image, Badge } from "@chakra-ui/react";
import "@style/ProjectCard.scss";
interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
  badges: string[];
  url?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  description,
  badges,
  url,
}) => {

  const baseURL = document.URL
  return (
    <Card.Root
      overflow="hidden"
      variant="subtle"
      colorPalette={"teal"}
    >
      <Image src={image} alt={title} />
      <div className="chakra-card__content">
      <Card.Body gap="2">
        <Card.Title>{title}</Card.Title>
        <Card.Description>{description}</Card.Description>
        <div className="chakra-card__badges">
          {badges.map((badge, index) => (
            <Badge key={index}>{badge}</Badge>
          ))}
        </div>
      </Card.Body>
      <Card.Footer gap="2">
        {url && (
          <Button variant="solid" onClick={() => window.open(baseURL + url, "_self")}>
            Read more
          </Button>
        )}
      </Card.Footer>
      </div>

    </Card.Root>
  );
};

export default ProjectCard;
