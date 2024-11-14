import { useState } from "react";
import image1 from "../assets/map.png";
import image2 from "../assets/qrmap.png";

function Mapp() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className="flex flex-col items-center gap-10 md:flex-row md:justify-center md:gap-20 lg:gap-40 xl:gap-80 py-16">
      {/* Image 1 - แผนที่ */}
      <div
        onClick={toggleFullScreen}
        className={`cursor-pointer ${isFullScreen ? "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" : ""}`}
      >
        <img
          src={image1}
          alt="Map"
          className={`rounded-lg object-contain transition-all duration-300 ${isFullScreen ? "w-11/12 h-auto" : ""}`}
          style={{ width: isFullScreen ? "90vw" : "800px", height: "auto" }}
        />
      </div>

      {/* Image 2 - QR Code ของแผนที่ */}
      <div className="flex flex-col items-center">
        <img 
          src={image2} 
          alt="QR Code Map" 
          className="rounded-lg object-contain" 
          style={{ width: "300px", height: "auto" }} 
        />

        {/* Link to Google Maps */}
        <a
          className="mt-4 text-orange-500 hover:text-black text-lg font-semibold"
          href="https://maps.app.goo.gl/5YBHphh4SreB8jUm8"
          target="_orgin"
          rel="noopener noreferrer"
        >
          ดูแผนที่ใน Google Maps
        </a>
      </div>
    </div>
  );
}

export default Mapp;
