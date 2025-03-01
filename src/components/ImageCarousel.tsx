import { useState, useRef, useEffect } from "react";
import { Button } from "@chakra-ui/react";
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri";
import "@style/ImageCarousel.scss";

interface ImageCarouselProps {
  height: number;
  images: string[];
  time: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ height, images, time }) => {
  const imagesLength = images.length;
  const [currentImage, setCurrentImage] = useState(0);
  const intervalRef = useRef<number>(undefined);

  function changeImageIndex(i: number) {
    setCurrentImage(i);
    activeTrack();
  }

  function activeTrack() {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, time);
  }

  useEffect(() => {
    activeTrack();
    return () => clearInterval(intervalRef.current);
  }, []);

  function changeImage(offset: number) {
    const index = (currentImage + offset + imagesLength) % imagesLength;
    setCurrentImage(index);
    activeTrack();
  }

  return (
    <div className="carousel">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${currentImage * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="carousel-image">
            <img src={image} alt={`${index + 1}`} style={{ height: `${height}px` }} />
          </div>
        ))}
      </div>

      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentImage ? "active" : ""}`}
            onClick={() => changeImageIndex(index)}
          ></span>
        ))}
      </div>

      <Button
        variant="outline"
        className="carousel-button__left"
        onClick={() => changeImage(-1)}
      >
        <RiArrowLeftLine />
      </Button>
      <Button
        variant="outline"
        className="carousel-button__right"
        onClick={() => changeImage(1)}
      >
        <RiArrowRightLine />
      </Button>
    </div>
  );
};

export default ImageCarousel;
