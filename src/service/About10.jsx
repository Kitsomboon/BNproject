import image1 from "/src/assets/icon8.png";
import image2 from "/src/assets/icon9.png";
import image3 from "/src/assets/icon10.png";
import image5 from "/src/assets/icon11.png";
import image6 from "/src/assets/icon12.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const services = [
  { id: 1, title: "PM ตรวจเช็คระบบ", icon: image1 },
  { id: 2, title: "CM แก้ไขเมื่อระบบเกิดปัญหา", icon: image2 },
  { id: 3, title: "ทำความสะอาดแผงโซล่าเซลล์ และระบบ", icon: image3 },
  { id: 4, title: "Monitoring ตรวจดูค่าพลังงาน", icon: image5 },
  { id: 5, title: "ปรับปรุงระบบให้มีประสิทธิภาพ", icon: image6 },
];

const ServiceGrid = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 md:p-16">
      {/* Section Header */}
      <div className="text-center mb-8" data-aos="fade-up">
        
        {/* เส้นแถบบน (มือถือ) */}
        <span className="block md:hidden w-16 h-1 bg-[#d1543c] mx-auto mb-2"></span>

        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* เส้นแถบซ้าย (เดสก์ท็อป) */}
          <span className="hidden md:inline-block w-10 h-1 bg-[#d1543c] mr-2"></span>
          
          <h2 className="text-3xl font-bold text-black">Maintenance and <span className="text-[#d1543c]">Performance Inspection</span></h2>
          
          {/* เส้นแถบขวา (เดสก์ท็อป) */}
          <span className="hidden md:inline-block w-10 h-1 bg-[#16171f] ml-2"></span>
        </div>

        {/* เส้นแถบล่าง (มือถือ) */}
        <span className="block md:hidden w-16 h-1 bg-[#16171f] mx-auto mt-2"></span>

        <p className="text-[16px] font-normal text-gray-600 mt-4">
          บริการบำรุงรักษาโซล่าร์เซลล์ของเราประกอบด้วยการทำความสะอาดแผง ตรวจสอบประสิทธิภาพ และการตรวจเช็คระบบเพื่อให้มั่นใจในประสิทธิภาพ
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col items-center p-4 text-center"
            data-aos="zoom-out"
          >
            <img
              src={service.icon}
              alt={service.title}
              className="w-24 h-24 md:w-32 md:h-32 mb-4"
            />
            <h3 className="text-lg font-semibold text-[#d1543c]">{service.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceGrid;
