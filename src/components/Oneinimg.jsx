import { useState, useEffect, useRef } from "react";
import image1 from "../assets/thapkhlo.jpg";
import image2 from "../assets/solsr5.jpg";
import image3 from "../assets/thapkhlo3.jpg";

function Oneinimg() {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  const handleNavigation = () => {
    window.location.href = "/contact"; // โหลดหน้า /contact ใหม่ทั้งหมด
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          } else {
            setIsVisible(false); // ทำให้ซ่อนเมื่อออกจากวิวนั้น
          }
        });
      },
      {
        threshold: 0.7,
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
      className={`container mx-auto flex flex-col md:flex-row-reverse items-center py-16 md:px-0 
        transform transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-10" : "opacity-0 translate-y-20"
        } md:gap-20`}
    >
      {/* Images Section */}
      <div className="relative flex items-center w-full md:w-1/2">
        {/* Third Image */}
        <div className="absolute top-10 lg:left-60 w-[300px] h-[200px] rounded-lg overflow-hidden shadow-lg transform translate-x-72 translate-y-24">
          <img
            src={image3}
            alt="Third Image"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Second Image */}
        <div className="absolute top-5 lg:left-40 w-[440px] h-[300px] rounded-lg overflow-hidden shadow-lg transform translate-x-16 translate-y-16">
          <img
            src={image2}
            alt="Second Image"
            className="w-full h-full object-cover"
          />
        </div>
        {/* First Image */}
        <div className="relative w-[360px] h-[470px] rounded-lg overflow-hidden shadow-lg transform translate-x-8">
          <img
            src={image1}
            alt="First Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 px-6 mt-6 md:mt-0 text-center md:text-left">
        <h2 className="text-4xl font-bold text-[#16171f] mb-4">
          Services and <span style={{ color: "#d1543c" }}>Consultation</span>
        </h2>

        <p className="text-gray-600 mt-4 leading-relaxed">
          การให้คำปรึกษาโซล่า
          ช่วยคุณเข้าใจและวางแผนการติดตั้งระบบโซลาร์เซลล์ที่เหมาะสมกับบ้านหรือธุรกิจของคุณ
          เพื่อให้เกิดประโยชน์สูงสุดในการประหยัดพลังงานและลดค่าใช้จ่าย
          พร้อมการสนับสนุนจากผู้เชี่ยวชาญที่ให้ข้อมูลอย่างละเอียดทุกขั้นตอน
          ตั้งแต่การประเมินพื้นที่ การออกแบบระบบ
          ไปจนถึงการติดตั้งและการบำรุงรักษา
          เพื่อให้คุณมั่นใจในการลงทุนและการใช้งานระบบพลังงานสะอาดที่ยั่งยืน
        </p>
        <button
          onClick={handleNavigation}
          className="mt-6 bg-[#d1543c] text-white px-8 py-2 
            hover:bg-[#16171f] hover:text-[#d1543c]  transition duration-300 shadow-md"
        >
          Contact Us Now
        </button>
      </div>
    </div>
  );
}

export default Oneinimg;
