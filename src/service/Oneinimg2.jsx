import { useState, useEffect, useRef } from "react";
import image1 from "../assets/pa.jpg";

function Oneinimg2() {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      {
        threshold: 0.5, // 50% of the element must be visible
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`container mx-auto flex flex-col md:flex-row items-center py-16 transform transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Right Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
  <img
    src={image1}
    alt="image not found"
    className="w-full h-auto max-w-[600px] rounded-lg shadow-lg filter brightness-110 contrast-125"
  />
</div>


      {/* Left Side - Text Content */}
      <div className="w-full md:w-1/2 px-6 space-y-6">
        {[
          "บริการให้คำปรึกษา",
          "ดูแลขั้นตอนการติดตั้ง",
          "รูปแบบการทำงาน",
          "ดูแลหลังการติดตั้ง",
        ].map((text, index) => (
          <div key={index} className="flex items-center space-x-4">
            {/* Number Circle */}
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold text-2xl shadow-lg transition-transform duration-300 transform hover:scale-110">
              {index + 1}
            </div>
            {/* Button with hover effect */}
            <button className="text-2xl flex-grow py-3 px-5 text-left text-orange-500 font-semibold bg-white rounded-lg border-2 border-orange-500 shadow-lg hover:bg-orange-500 hover:text-white transition duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
              {text}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Oneinimg2;
