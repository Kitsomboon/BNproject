import image1 from "/src/assets/ggp.png";
import image2 from "/src/assets/mea.png";
import image3 from "/src/assets/pea.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About9 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen items-center px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 text-center" data-aos="fade-up">
        
        {/* เส้นแถบบน (มือถือ) */}
        <span className="block md:hidden w-10 h-1 bg-[#d1543c] mx-auto mb-2"></span>

        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* เส้นแถบซ้าย (เดสก์ท็อป) */}
          <span className="hidden md:inline-block w-10 h-1 bg-[#d1543c] mr-2"></span>
          
          <span>ใบอนุญาต</span>
          <span className="text-[#d1543c]">&nbsp;License</span>

          {/* เส้นแถบขวา (เดสก์ท็อป) */}
          <span className="hidden md:inline-block w-10 h-1 bg-[#16171f] ml-2"></span>
        </div>

        {/* เส้นแถบล่าง (มือถือ) */}
        <span className="block md:hidden w-10 h-1 bg-[#16171f] mx-auto mt-2"></span>

        <p className="text-[16px] font-normal text-gray-600 text-center mt-4">
          การขอใบอนุญาต
        </p>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8">
        {/* กล่องที่ 1 */}
        <div className="relative bg-white p-6 shadow-lg rounded-[30px] border-4 border-[#d1543c] text-center w-full max-w-md" data-aos="fade-right">
          {/* กล่องเล็ก */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#d1543c] text-white rounded-full w-[250px] h-[50px] flex items-center justify-center shadow-md text-xl border border-white">
            ใบขออนุญาตก่อสร้าง
          </div>
          <h3 className="text-6xl font-semibold text-[#FF8800] pt-24" data-aos="fade-up">
            กนอ. 02
          </h3>
          <h3 className="text-6xl font-semibold text-[#FF8800] pt-12" data-aos="fade-up">
            อ. 1
          </h3>
        </div>

        {/* กล่องที่ 2 */}
        <div className="relative bg-white p-6 shadow-lg rounded-[30px] border-4 border-[#d1543c] text-center w-full max-w-md" data-aos="fade-up">
          {/* กล่องเล็ก */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#d1543c] text-white rounded-full w-[250px] h-[50px] flex items-center justify-center shadow-md text-xl border border-white">
            ขึ้นทะเบียนโซล่าร์เซลล์
          </div>
          <h3 className="text-2xl font-semibold text-[#16171f] pt-6" data-aos="fade-up">
            พค.2/ใบยกเว้น
          </h3>
          <img src={image1} alt="ขึ้นทะเบียนโซล่าร์เซลล์" className="w-auto h-32 mx-auto mt-4" data-aos="zoom-in" />
        </div>

        {/* กล่องที่ 3 */}
        <div className="relative bg-white p-6 shadow-lg rounded-[30px] border-4 border-[#d1543c] text-center w-full max-w-md" data-aos="fade-left">
          {/* กล่องเล็ก */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#d1543c] text-white rounded-full w-[250px] h-[50px] flex items-center justify-center shadow-md text-xl border border-white">
            เชื่อมต่อกับการไฟฟ้า
          </div>
          <h3 className="text-2xl font-semibold text-[#16171f] pt-6" data-aos="fade-up">
            ใบขนานไฟฟ้า
          </h3>
          <img src={image2} alt="เชื่อมต่อกับการไฟฟ้า" className="w-auto h-40 mx-auto" data-aos="zoom-in" />
          <img src={image3} alt="เชื่อมต่อกับการไฟฟ้า" className="w-auto h-40 mx-auto mt-4" data-aos="zoom-in" />
        </div>
      </div>
    </div>
  );
};

export default About9;
