import image1 from "/src/assets/ppt1.jpg";
import image2 from "/src/assets/yub5.jpg";
import image3 from "/src/assets/thapkhlo4.jpg";
import image4 from "/src/assets/Phrae1.jpg";
import image5 from "/src/assets/nong2.jpg";
import image6 from "/src/assets/thapkhlo.jpg";
import image7 from "/src/assets/solar10.jpg";
import image8 from "/src/assets/yub1.jpg";
import { useState, useEffect, useRef } from "react";

function CircularCarousel2() {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8];
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesToShow = 4; // Number of images to display at once
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const getVisibleImages = () => {
    const visibleImages = [];
    for (let i = 0; i < imagesToShow; i++) {
      visibleImages.push(images[(currentIndex + i) % images.length]);
    }
    return visibleImages;
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; // Scroll-fast multiplier
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleClickNavigation = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="w-full bg-gray-800 py-10"
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className="container mx-auto">
        <div className="relative flex overflow-hidden rounded-lg shadow-lg h-[400px] gap-4">
          {/* Images */}
          {getVisibleImages().map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 sm:w-full md:w-1/4 h-full transition-transform duration-500"
            >
              <img
                src={image}
                alt={`Slide ${currentIndex + index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="mt-4 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleClickNavigation(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-white" : "bg-gray-500"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CircularCarousel2;
