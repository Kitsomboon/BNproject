import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // นำเข้า CSS ของ AOS
import { FaSolarPanel } from "react-icons/fa"; // นำเข้าไอคอนโซลาร์เซลล์
import image1 from "../assets/si.jpg";

function About5() {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1500, // ระยะเวลาของเอฟเฟกต์ (ms)
      once: true, // ให้แสดงเอฟเฟกต์เพียงครั้งเดียวเมื่อเลื่อนผ่าน
    });
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="container mx-auto flex flex-col md:flex-row items-start justify-between bg-white py-20 md:py-32 px-10 md:px-16 lg:px-20 md:gap-x-16">
      {/* Left Side - Text Content */}
      <div className="md:w-1/2 mb-10 md:mb-0 flex flex-col items-center md:items-start">
        <h1
          className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-black text-center md:text-left flex items-center gap-2"
          data-aos="fade-right"
        >
          ความเป็นมา
          {/* Add Solar Icon Before Text */}
          
        </h1><span className="text-[#d1543c] flex items-center  md:text-5xl font-bold mb-6"  data-aos="fade-up">
            <FaSolarPanel className="text-[#d1543c] text-3xl md:text-6xl mr-2" />
            B.N. SOLAR POWER
          </span>
        <div
          className="w-full mt-6"
          data-aos="fade-up" // เอฟเฟกต์สำหรับภาพด้านล่าง
        >
          <img
            src={image1}
            alt="Interior Design"
            className="w-full max-w-[auto] h-[auto] rounded-lg shadow-lg mx-auto md:mx-0"
          />
        </div>
      </div>

      {/* Right Side - Paragraph Content */}
      <div
        className="md:w-1/2 flex flex-col items-center md:items-start md:text-left py-2 md:py-48"
        data-aos="fade-left" // เอฟเฟกต์สำหรับข้อความด้านขวา
      >
        <p className="text-gray-600 text-lg mb-10">
          บริษัท บี.เอ็น. โซล่าร์ เพาเวอร์ จำกัด (B.N. SOLAR POWER)
          เริ่มดำเนินกิจการ ตั้งแต่ปี 2557 (2014) โดยการก่อตั้งของ{" "}
          <span className="text-[#dc143c]">ดร.สุชัจจ์ ศรีแก้ว </span>
          และเริ่มต้นดำเนินด้านการออกแบบและควบคุมงานติดตั้งระบบผลิตไฟฟ้าด้วยเซลล์
          แสงอาทิตย์และด้านการศึกษาและวิเคราะห์ด้านเศรษฐศาสตร์และสิ่งแวดล้อมให้กับหน่วยงานภาครัฐและภาคเอกชน
        </p>
        <div className="w-full mt-10">
          {/* Accordion Section */}
          <div
            className="border-b py-4 cursor-pointer"
            onClick={() => toggleAccordion(1)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">วิสัยทัศน์</h3>
              <span>{activeIndex === 1 ? "▲" : "▼"}</span>
            </div>
            {activeIndex === 1 && (
              <p className="text-gray-600 mt-4">
                B.N. SOLAR POWER มุ่งมั่นเป็นบริษัทรับเหมาติดตั้งระบบพลังงานทดแทนทุกชนิด
                ด้วยทีมงานที่มีประสิทธิภาพ และซื่อสัตย์ต่อลูกค้า
              </p>
            )}
          </div>

          <div
            className="border-b py-4 cursor-pointer"
            onClick={() => toggleAccordion(2)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">เป้าหมาย</h3>
              <span>{activeIndex === 2 ? "▲" : "▼"}</span>
            </div>
            {activeIndex === 2 && (
              <div className="mt-4">
                <p className="text-gray-600 leading-relaxed">
                  - บริการงานด้านที่ปรึกษางานพลังงาน ออกแบบระบบ ควบคุมงาน
                  วิเคราะห์ด้านเศรษฐศาสตร์ และ สิ่งแวดล้อม
                </p>
                <p className="text-gray-600 leading-relaxed">
                  - จำหน่ายอุปกรณ์ประหยัดพลังงาน ระบบพลังงานทดแทน
                  ระบบกักเก็บพลังงาน และรถไฟฟ้าที่มีคุณภาพ
                </p>
                <p className="text-gray-600 leading-relaxed">
                  - ติดตั้งระบบผลิตพลังงานทดแทนทุกชนิดอย่างมีประสิทธฺภาพ
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About5;
