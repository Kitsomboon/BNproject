// นำเข้ารูปภาพ
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
    <div className="min-h-screen flex flex-col items-center justify-center ">
      {/* เพิ่มหัวข้อด้านบน */}
      <h2
        className="text-4xl font-bold text-black mb-8 text-center"
        style={{
          position: "relative",
        }}
        data-aos="fade-up"
      >
        <span
          style={{
            display: "inline-block",
            width: "40px",
            height: "4px",
            backgroundColor: "#d1543c",
            marginRight: "10px",
            verticalAlign: "middle",
          }}
        ></span>
        Maintenance and  
        <span style={{ color: "#d1543c" }}> Performance Inspection</span>
        <span
          style={{
            display: "inline-block",
            width: "40px",
            height: "4px",
            backgroundColor: "#16171f",
            marginRight: "10px",
            verticalAlign: "middle",
          }}
        ></span>
        <p className="text-[16px] font-normal text-gray-600 text-center">
        บริการบำรุงรักษาโซล่าร์เซลล์ของเราประกอบด้วยการทำความสะอาดแผง ตรวจสอบประสิทธิภาพ และการตรวจเช็คระบบเพื่อให้มั่นใจในประสิทธิภาพ
        </p>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col items-center p-4 text-center"
            data-aos="zoom-out"
          >
            <img
              src={service.icon}
              alt={service.title}
              className="w-48 h-48 mb-4"
            />
            <h3 className="text-lg font-semibold text-[#d1543c]">{service.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceGrid;
