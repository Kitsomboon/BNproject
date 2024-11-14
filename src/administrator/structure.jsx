import image1 from "../assets/BN1.png";
import { useState } from "react";

function Structure() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className="flex flex-col items-center  py-20 px-4">
      {/* Heading */}
      <h2
        className="text-3xl font-bold text-gray-800 mb-8"
        style={{
          textDecoration: "underline",
          textDecorationThickness: "5px",
          textUnderlineOffset: "10px",
          textDecorationColor: "orange",
        }}
      >
        โครงสร้างองค์กร
      </h2>

      {/* Organization Chart Image with Fullscreen Toggle */}
      <div
        className={`bg-white p-2 rounded-lg transition-all ${
          isFullScreen ? "fixed inset-0 bg-white z-50 flex items-center justify-center" : ""
        }`}
        onClick={toggleFullScreen} // Enable toggle on click
        style={{ cursor: "pointer" }} // Add pointer cursor to indicate clickability
      >
        <img
          src={image1}
          alt="Organization Chart"
          className="rounded-lg object-contain"
          style={{
            width: isFullScreen ? "90vw" : "1000px",
            height: isFullScreen ? "90vh" : "900px",
          }}
        />
      </div>

     
    </div>
  );
}

export default Structure;
