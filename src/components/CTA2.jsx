import { useEffect } from "react";
import image7 from "../assets/lalar.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import "./CTA2.css";

function CTA2() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // ระยะเวลาของเอฟเฟกต์ (ms)
      once: true, // เอฟเฟกต์แสดงเพียงครั้งเดียวเมื่อเลื่อนผ่าน
    });
  }, []);

  const services = [
    {
      title: "ตรวจสอบสถานที่และวางแผน",
      description:
        "ตรวจสอบตำแหน่งและทิศทางที่เหมาะสมสำหรับการรับแสงสูงสุด พร้อมวางแผนขนาดและจำนวนแผงที่ต้องใช้",
      icon: "📍",
    },
    {
      title: "รวบรวมข้อมูลและประเมินความคุ้มค่า",
      description:
        "วิเคราะห์การใช้พลังงานและประเมินความคุ้มค่าของการลงทุนเพื่อวางแผนค่าใช้จ่ายและการคืนทุน",
      icon: "📊",
    },
    {
      title: "ออกแบบระบบโซลาร์",
      description:
        "กำหนดขนาดและประเภทของแผง อินเวอร์เตอร์ และอุปกรณ์เสริม พร้อมวางแผนการเชื่อมต่อระบบ",
      icon: "🛠️",
    },
    {
      title: "ติดตั้งและประกอบระบบ",
      description:
        "ติดตั้งแผงโซล่าเซลล์และอุปกรณ์ต่างๆ ให้มั่นคงและเดินสายไฟเชื่อมต่อระบบทั้งหมด",
      icon: "🔧",
    },
    {
      title: "ทดสอบและตรวจสอบคุณภาพ",
      description:
        "ตรวจสอบการทำงานของระบบและประสิทธิภาพการผลิตพลังงานเพื่อให้แน่ใจว่าเป็นไปตามมาตรฐาน",
      icon: "✅",
    },
    {
      title: "บำรุงรักษาและจัดการความเสี่ยง",
      description:
        "ทำความสะอาดและตรวจสอบอุปกรณ์เป็นประจำเพื่อรักษาประสิทธิภาพของระบบ",
      icon: "🔋",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="flex flex-col items-center mb-8">
        <h2
          className="text-4xl font-bold text-black mb-2"
          style={{
            textDecoration: "underline",
            textDecorationThickness: "5px",
            textUnderlineOffset: "10px",
            textDecorationColor: "orange",
          }}
        >
          ขั้นตอนการติดตั้งโซล่าเซลล์
        </h2>
        <p className="text-center text-lg text-black mt-4">
          พร้อมให้บริการ ทำงานเป็นทีม ยิ้มแย้มแจ่มใส ใส่ใจคุณภาพ
        </p>
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* บล็อกเนื้อหาด้านซ้าย */}
        <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up" // เอฟเฟกต์ pop-up
              className="flex items-start"
            >
              <div className="text-3xl mr-4">{service.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-orange-500">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* รูปภาพด้านขวา */}
        <div
          className="lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0"
          data-aos="fade-left" // เพิ่มเอฟเฟกต์ให้กับรูปภาพ
        >
          <img
            src={image7}
            alt="บริการของเรา"
            className="rounded-lg shadow-lg"
            style={{ width: "80%", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}

export default CTA2;
