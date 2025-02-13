import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // นำเข้า CSS ของ AOS
import image1 from "../assets/su.png";

function ManagementTeam() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // ลดระยะเวลาเอฟเฟกต์ให้เร็วขึ้น
      once: true, // ให้แสดงเอฟเฟกต์เพียงครั้งเดียวเมื่อเลื่อนผ่าน
    });
  }, []);

  return (
    <div className="mx-auto py-20 px-4">
      {/* Section Header */}
      <div className="text-center mb-12" data-aos="fade-up">
        
        {/* เส้นแถบบน (มือถือ) */}
        <span className="block md:hidden w-16 h-1 bg-[#d1543c] mx-auto mb-2"></span>

        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* เส้นแถบซ้าย (เดสก์ท็อป) */}
          <span className="hidden md:inline-block w-10 h-1 bg-[#d1543c] mr-2"></span>
          
          <h2 className="text-3xl font-bold">Board of <span className="text-[#d1543c]">Executives</span></h2>
          
          {/* เส้นแถบขวา (เดสก์ท็อป) */}
          <span className="hidden md:inline-block w-10 h-1 bg-[#16171f] ml-2"></span>
        </div>

        {/* เส้นแถบล่าง (มือถือ) */}
        <span className="block md:hidden w-16 h-1 bg-[#16171f] mx-auto mt-2"></span>

      </div>

      {/* Management Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {/* First Person */}
        <div
          className="w-full max-w-xs md:max-w-sm text-center px-4 mb-8 flex flex-col items-center"
          data-aos="fade-up"
          data-aos-delay="100" // เพิ่มดีเลย์เพื่อให้แต่ละคาร์ดแสดงผลต่อกัน
        >
          <img
            src={image1}
            alt="Person 1"
            className="rounded-lg object-cover w-48 h-60 md:w-52 md:h-72"
          />

          <div className="mt-6 bg-[#d1543c] p-6 rounded-lg text-center w-full">
            <h3 className="text-lg md:text-xl font-semibold text-white">ดร.สุชัจจ์ ศรีแก้ว</h3>
            <p className="text-white text-sm md:text-base">กรรมการผู้จัดการ</p>
            <p className="text-white text-sm md:text-base">บริษัท บี.เอ็ม. โซล่าร์ เพาเวอร์ จำกัด</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManagementTeam;
