import { useState, useEffect, useRef } from "react";
import image1 from "../assets/thapkhlo.jpg";

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
  className={`container mx-auto flex flex-col md:flex-row items-center py-16  md:px-0 
    transform transition-all duration-700  ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    } md:gap-20`} 
>
  <div className="w-full md:w-1/2">
    <img
      src={image1}
      alt="image not found"
      className="w-full h-full rounded-lg shadow-lg object-cover"
      style={{ maxHeight: "600px" }} // กำหนดความสูงของภาพ
    />
  </div>
  <div className="w-full md:w-1/2 px-6 mt-6 md:mt-0 text-center md:text-left">
    <h2
      className="text-4xl font-bold text-black mb-4"
      style={{
        position: "relative",
      }}
    >
      สอบถาม และการให้คําปรึกษา
     
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
      className="mt-6 bg-orange-500 text-white px-8 py-2 
    hover:bg-black hover:text-white transition duration-300 shadow-md"
    >
      ติดต่อเรา
    </button>
  </div>
</div>

  );
}

export default Oneinimg;
