import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // นำเข้า CSS ของ AOS

function Serapp() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // ระยะเวลาของเอฟเฟกต์ (ms)
      once: true, // ให้แสดงเอฟเฟกต์เพียงครั้งเดียวเมื่อเลื่อนผ่าน
    });
  }, []);

  const services = [
    {
      title: "การตรวจสอบและบำรุงรักษา",
      description:
        "บริการตรวจสอบและบำรุงรักษาระบบโซล่าเซลล์ เช่น การเช็คสายไฟและการทำความสะอาดแผงโซล่าเซลล์ เพื่อป้องกันความเสียหายก่อนเกิดปัญหา",
    },
    {
      title: "การรับประกันสินค้า",
      description:
        "รับประกันแผงโซล่าเซลล์และอุปกรณ์ต่าง ๆ เป็นระยะเวลายาวถึง 10-25 ปี เพื่อความมั่นใจของลูกค้า",
    },
    {
      title: "การตรวจเช็คระบบออนไลน์",
      description:
        "ระบบตรวจสอบการทำงานของโซล่าเซลล์ผ่านแอปพลิเคชัน ช่วยติดตามการผลิตและการใช้พลังงานแบบเรียลไทม์",
    },
    {
      title: "การให้คำปรึกษาและช่วยเหลือทางเทคนิค",
      description:
        "บริการให้คำปรึกษาเกี่ยวกับการใช้งานและแก้ปัญหาที่อาจเกิดขึ้น มีสายด่วนและแอปพลิเคชันสำหรับช่วยเหลือเร่งด่วน",
    },
    {
      title: "การอัพเกรดและขยายระบบ",
      description:
        "บริการอัพเกรดระบบและขยายเพื่อให้ตรงตามความต้องการของลูกค้า เช่น เพิ่มแผงหรือแบตเตอรี่",
    },
    {
      title: "การช่วยเหลือด้านเอกสารและมาตรฐาน",
      description:
        "บริการช่วยเหลือในการจัดการเอกสารและมาตรฐาน เพื่อให้เป็นไปตามข้อกำหนดของหน่วยงานที่เกี่ยวข้อง",
    },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto p-6">
      <h2
        className="text-4xl font-bold text-black mb-8 text-center"
        style={{
          position: "relative",
        }}
      >
        บริการหลังการขาย
        <span
          style={{
            content: '""',
            position: "absolute",
            bottom: "-5px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "5%",
            height: "2px",
            backgroundColor: "orange",
            transition: "width 0.3s ease-in-out",
          }}
        ></span>
      </h2>
        <p className="text-center text-black mb-8">ทีมงานพร้อมช่วยเหลือ ให้คำปรึกษาได้ตลอดเวลา</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 hover:border-transparent hover:bg-gradient-to-r from-orange-300 to-orange-500 hover:text-white"
              data-aos="fade-up" // เพิ่มเอฟเฟกต์ pop-up เมื่อเลื่อนมาถึง
              data-aos-delay={index * 100} // เพิ่มดีเลย์ทีละการ์ดให้แสดงผลทีละตัว
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800 hover:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 hover:text-white">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Serapp;
