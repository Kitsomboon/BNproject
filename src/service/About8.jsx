// นำเข้ารูปภาพ
import image1 from "/src/assets/icon.png";
import image2 from "/src/assets/icon1.png";
import image3 from "/src/assets/icon2.png";
import image4 from "/src/assets/icon3.png";
import image5 from "/src/assets/icon4.png";
import image6 from "/src/assets/icon5.png";
import image7 from "/src/assets/icon6.png";
import image8 from "/src/assets/icon7.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const services = [
  { id: 1, title: "บริการให้คำปรึกษาและแนะนำ", icon: image1 },
  { id: 2, title: "สำรวจพื้นที่หน้างาน ของความต้องการของลูกค้า", icon: image2 },
  { id: 3, title: "ออกแบบเพื่อติดตั้งระบบโซล่าร์เซลล์ตามความเหมาะสมของการใช้งาน", icon: image3 },
  { id: 4, title: "จัดหาวัสดุอุปกรณ์สำหรับงานติดตั้งโซล่าร์เซลล์", icon: image4 },
  { id: 5, title: "ดำเนินการติดตั้งระบบโซล่าร์เซลล์", icon: image5 },
  { id: 6, title: "ตรวจสอบการใช้งานของระบบโซล่าร์เซลล์", icon: image6 },
  { id: 7, title: "ส่งมอบงานติดตั้งระบบโซล่าร์เซลล์", icon: image7 },
  { id: 8, title: "ใบอนุญาต", icon: image8 },
];

const ServiceGrid = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-16">
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
        Design
        <span style={{ color: "#d1543c" }}> and Installation</span>
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
          เรามีการให้คำปรึกษาและแนะนำในการออกแบบและติดตั้งระบบโซล่าร์เซลล์ จากผู้เชี่ยวชาญ
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
