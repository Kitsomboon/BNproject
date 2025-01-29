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
    <div className="flex flex-col min-h-screen items-center ">
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
        ใบอนุญาต
        <span style={{ color: "#d1543c" }}> License</span>
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
        การขอใบอนุญาต
        </p>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {/* กล่องที่ 1 */}
        <div
          className="relative bg-white p-6 shadow-lg rounded-[30px] border border-[5px] border-[#d1543c] text-center w-full md:w-[400px] h-full md:h-[500px]"
          data-aos="fade-right"
        >
          {/* กล่องเล็ก */}
          <div
            className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#d1543c] text-white rounded-full w-[250px] h-[50px] flex items-center 
            justify-center shadow-md text-xl border border-[2px] border-[#ffffff]"
            
          >
            ใบขออนุญาตก่อสร้าง
          </div>
          <h3
            className="text-6xl font-semibold text-[#16171f] pt-32"
            data-aos="fade-up"
          >
            กนอ. 02
          </h3>
          <h3
            className="text-6xl font-semibold text-[#16171f] pt-16"
            data-aos="fade-up"
          >
            อ. 1
          </h3>
        </div>

        {/* กล่องที่ 2 */}
        <div
          className="relative bg-white p-6 shadow-lg rounded-[30px] border border-[5px] border-[#d1543c] text-center w-full md:w-[400px] h-full md:h-[500px]"
          data-aos="fade-up"
        >
          {/* กล่องเล็ก */}
          <div
            className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#d1543c] text-white rounded-full w-[250px] h-[50px] flex items-center justify-center shadow-md text-xl"
            
          >
            ขึ้นทะเบียนโซล่าร์เซลล์
          </div>
          <h3
            className="text-3xl font-semibold text-[#16171f] pt-4"
            data-aos="fade-up"
          >
            พค.2/ใบยกเว้น
          </h3>
          <img
            src={image1}
            alt="ขึ้นทะเบียนโซล่าร์เซลล์"
            className="w-auto h-32 mx-auto mt-4"
            data-aos="zoom-in"
          />
        </div>

        {/* กล่องที่ 3 */}
        <div
          className="relative bg-white p-6 shadow-lg rounded-[30px] border border-[5px] border-[#d1543c] text-center w-full md:w-[400px] h-full md:h-[500px]"
          data-aos="fade-left"
        >
          {/* กล่องเล็ก */}
          <div
            className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#d1543c] text-white rounded-full w-[250px] h-[50px] flex items-center justify-center shadow-md text-xl"
            
          >
            เชื่อมต่อกับการไฟฟ้า
          </div>
          <h3
            className="text-3xl font-semibold text-[#16171f] pt-4"
            data-aos="fade-up"
          >
            ใบขนานไฟฟ้า
          </h3>
          <img
            src={image2}
            alt="เชื่อมต่อกับการไฟฟ้า"
            className="w-auto h-48 mx-auto"
            data-aos="zoom-in"
          />
          <img
            src={image3}
            alt="เชื่อมต่อกับการไฟฟ้า"
            className="w-auto h-48 mx-auto"
            data-aos="zoom-in"
          />
        </div>
      </div>
    </div>
  );
};

export default About9;
