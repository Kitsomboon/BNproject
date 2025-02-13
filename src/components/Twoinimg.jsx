import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

function Twoinimg() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container mx-auto py-20" data-aos="fade-up">
      <h2 className="text-4xl font-bold text-black mb-8 text-center relative" data-aos="fade-up">
        
        {/* เส้นแถบบน (สำหรับมือถือ) */}
        <span className="block md:hidden w-16 h-1 bg-[#d1543c] mx-auto mb-2"></span>
        
        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* เส้นแถบซ้าย (สำหรับเดสก์ท็อป) */}
          <span className="hidden md:inline-block w-10 h-1 bg-[#d1543c] mr-2"></span>
          
          <span>Reasons to</span>
          <span className="text-[#d1543c]">&nbsp;Choose Us</span>

          {/* เส้นแถบขวา (สำหรับเดสก์ท็อป) */}
          <span className="hidden md:inline-block w-10 h-1 bg-[#16171f] ml-2"></span>
        </div>

        {/* เส้นแถบล่าง (สำหรับมือถือ) */}
        <span className="block md:hidden w-16 h-1 bg-[#16171f] mx-auto mt-2"></span>

        <p className="text-[16px] font-normal text-gray-600 mt-4">
          เลือกเราเพื่อความมั่นใจในคุณภาพและความเชี่ยวชาญ
        </p>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="flex flex-col items-center" data-aos="fade-right">
          <h3 className="text-xl font-bold text-[#d1543c] mb-4">
            พลังงานสะอาด ประหยัดค่าไฟ ไว้ใจ บี.เอ็น. โซล่าร์ เพาเวอร์
          </h3>
          <p className="text-gray-600">
            เรามุ่งมั่นสร้างระบบโซล่าร์เซลล์ที่ช่วยลดค่าใช้จ่ายด้านพลังงานและเป็นมิตรต่อสิ่งแวดล้อม เพื่ออนาคตที่ยั่งยืนของคุณและโลก
          </p>
        </div>
        <div className="flex flex-col items-center" data-aos="fade-up">
          <h3 className="text-xl font-bold text-[#d1543c]  mb-4">
            บริการครบวงจร มาตรฐานสูง มั่นใจทุกการติดตั้ง
          </h3>
          <p className="text-gray-600">
            ให้บริการตั้งแต่การวางแผน ออกแบบ ติดตั้ง ไปจนถึงดูแลบำรุงรักษา ด้วยมาตรฐานคุณภาพและความปลอดภัยสูงสุด มั่นใจได้ในทุกขั้นตอน
          </p>
        </div>
        <div className="flex flex-col items-center" data-aos="fade-left">
          <h3 className="text-xl font-bold text-[#d1543c]  mb-4">
            ให้คำปรึกษามืออาชีพ ดูแลครบจบในที่เดียว
          </h3>
          <p className="text-gray-600">
            ทีมงานมืออาชีพของเราพร้อมให้คำปรึกษาและแนะนำอย่างใกล้ชิด เพื่อให้คุณได้รับบริการที่ตอบโจทย์ตรงตามความต้องการ ครบจบในที่เดียว
          </p>
        </div>
      </div>
    </div>
  );
}

export default Twoinimg;
