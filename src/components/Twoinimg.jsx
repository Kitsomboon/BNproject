import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

function Twoinimg() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="container mx-auto py-20"
      data-aos="fade-up"
    >
      <h2
        className="text-4xl font-bold text-black mb-8 text-center"
        style={{
          position: "relative",
        }}
        data-aos="fade-up"
      >
        <span style={{
            display: "inline-block",
            width: "40px",
            height: "4px",
            backgroundColor: "#d1543c",
            marginRight: "10px",
            verticalAlign: "middle"
          }}></span>
        Reasons to 
        <span style={{ color: "#d1543c" }}> Choose Us</span>
        <span style={{
            display: "inline-block",
            width: "40px",
            height: "4px",
            backgroundColor: "#16171f",
            marginRight: "10px",
            verticalAlign: "middle"
          }}></span>
        <p className="text-[16px] font-normal text-gray-600 mb-8 text-center">เลือกเราเพื่อความมั่นใจในคุณภาพและความเชี่ยวชาญ</p>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
        <div className="flex flex-col items-center" data-aos="fade-right">
          <h3 className="text-xl font-bold text-[#d1543c] mb-4">พลังงานสะอาด ประหยัดค่าไฟ ไว้ใจ บี.เอ็น. โซล่าร์ เพาเวอร์</h3>
          <p className="text-gray-600">
            เรามุ่งมั่นสร้างระบบโซล่าร์เซลล์ที่ช่วยลดค่าใช้จ่ายด้านพลังงานและเป็นมิตรต่อสิ่งแวดล้อม เพื่ออนาคตที่ยั่งยืนของคุณและโลก
          </p>
        </div>
        <div className="flex flex-col items-center" data-aos="fade-up">
          <h3 className="text-xl font-bold text-[#d1543c]  mb-4">บริการครบวงจร มาตรฐานสูง มั่นใจทุกการติดตั้ง</h3>
          <p className="text-gray-600">
            ให้บริการตั้งแต่การวางแผน ออกแบบ ติดตั้ง ไปจนถึงดูแลบำรุงรักษา ด้วยมาตรฐานคุณภาพและความปลอดภัยสูงสุด มั่นใจได้ในทุกขั้นตอน
          </p>
        </div>
        <div className="flex flex-col items-center" data-aos="fade-left">
          <h3 className="text-xl font-bold text-[#d1543c]  mb-4">ให้คำปรึกษามืออาชีพ ดูแลครบจบในที่เดียว</h3>
          <p className="text-gray-600">
            ทีมงานมืออาชีพของเราพร้อมให้คำปรึกษาและแนะนำอย่างใกล้ชิด เพื่อให้คุณได้รับบริการที่ตอบโจทย์ตรงตามความต้องการ ครบจบในที่เดียว
          </p>
        </div>
      </div>
    </div>
  );
}

export default Twoinimg;
