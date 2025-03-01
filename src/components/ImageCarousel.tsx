import { useState, useRef, useEffect, useMemo } from "react";
import { Button } from "@chakra-ui/react";
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri";
import "@style/ImageCarousel.scss";

interface ImageCarouselProps {
  height: number;
  images: string[];
  time: number | undefined;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ height, images, time }) => {
  const imagesLength = images.length;
  const [currentImage, setCurrentImage] = useState(0);
  const intervalRef = useRef<number>(undefined);

  function changeImageIndex(i: number) {
    setCurrentImage(i);
    if (time) {
      activeTrack();
    }
  }

  function activeTrack() {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, time);
  }

  useEffect(() => {
    if (time) {
      activeTrack();
    }
    return () => clearInterval(intervalRef.current);
  }, []);

  function changeImage(offset: number) {
    const index = (currentImage + offset + imagesLength) % imagesLength;
    setCurrentImage(index);
    if (time) {
      activeTrack();
    }
  }

  const disableLeftButton = useMemo(() => {
    return currentImage === 0 && !time;
  }, [currentImage, imagesLength, time]);

  const disableRightButton = useMemo(() => {
    return currentImage === imagesLength - 1 && !time;
  }, [currentImage, imagesLength, time]);
  return (
    <div className="carousel" style={{"--carousel-height":`${height}px`} as React.CSSProperties}>
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${currentImage * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="carousel-image">
            <img src={image} alt={`${index + 1}`}/>
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
        disabled={disableLeftButton}
      >
        <RiArrowLeftLine />
      </Button>
      <Button
        variant="outline"
        className="carousel-button__right"
        onClick={() => changeImage(1)}
        disabled={disableRightButton}
      >
        <RiArrowRightLine />
      </Button>
    </div>
  );
};

export default ImageCarousel;
