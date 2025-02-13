import image1 from "../assets/bnn.png";
import { useState } from "react";

function Structure() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className="flex flex-col items-center py-20 px-4">
      
      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        
        {/* เส้นแถบบน (สำหรับมือถือ) */}
        <span className="block md:hidden w-16 h-1 bg-[#d1543c] mx-auto mb-2"></span>
        
        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* เส้นแถบซ้าย (สำหรับเดสก์ท็อป) */}
          <span className="hidden md:inline-block w-10 h-1 bg-[#d1543c] mr-2"></span>
          
          <span>Organizational</span>
          <span className="text-[#d1543c]">&nbsp;Structure</span>

          {/* เส้นแถบขวา (สำหรับเดสก์ท็อป) */}
          <span className="hidden md:inline-block w-10 h-1 bg-[#16171f] ml-2"></span>
        </div>

        {/* เส้นแถบล่าง (สำหรับมือถือ) */}
        <span className="block md:hidden w-16 h-1 bg-[#16171f] mx-auto mt-2"></span>

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
          className="rounded-lg object-contain w-full md:w-[1000px] h-auto max-h-[90vh]"
        />
      </div>

    </div>
  );
}

export default Structure;
