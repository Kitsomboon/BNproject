import image1 from "../assets/solar10.jpg";
import image2 from "../assets/P.lalar.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const navigateToCustomer = () => {
    window.location.href = "/customer";
  };

  return (
    <div className="container mx-auto py-16 text-center">
      <h2
        className="text-4xl font-bold text-black mb-8 text-center relative"
        data-aos="fade-up"
      >
        <span className="inline-block w-10 h-1 bg-[#d1543c] mr-2 align-middle"></span>
        Our
        <span className="text-[#d1543c]"> Services</span>
        <span className="inline-block w-10 h-1 bg-[#16171f] ml-2 align-middle"></span>
        <p className="text-[16px] font-normal text-gray-600 mt-2">
          เรามอบโซลูชันที่มืออาชีพและไว้วางใจได้
        </p>
      </h2>

      {/* กล่อง Service 2 อัน */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8">
        {/* Service 1 */}
        <div
          className="relative overflow-hidden rounded-lg shadow-lg bg-cover bg-center w-full md:w-[400px] h-[400px]"
          style={{ backgroundImage: `url(${image1})` }}
          data-aos="fade-up"
        >
          <div className="absolute inset-0 bg-[#2a4056] bg-opacity-75 flex flex-col items-center justify-center">
           
            <h3 className="text-white text-2xl font-semibold">
              การออกแบบและติดตั้งระบบโซล่าร์เซลล์
            </h3>
            <p className="text-white text-sm mt-2">
              บริการออกแบบระบบโซล่าร์เซลล์อย่างมืออาชีพ
            </p>
          </div>
        </div>

        {/* Service 2 */}
        <div
          className="relative overflow-hidden rounded-lg shadow-lg bg-cover bg-center w-full md:w-[400px] h-[400px]"
          style={{ backgroundImage: `url(${image2})` }}
          data-aos="fade-up"
        >
          <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center">
            
            <h3 className="text-white text-2xl font-semibold">
              การบำรุงดูแลรักษาระบบโซล่าร์เซลล์
            </h3>
            <p className="text-white text-sm mt-2">
              การติดตั้งโซล่าร์เซลล์อย่างมืออาชีพ
            </p>
          </div>
        </div>
      </div>

      {/* ปุ่มกด */}
      <button
        onClick={navigateToCustomer}
        className="mt-6 bg-[#d1543c] text-white px-8 py-2 
            hover:bg-white hover:text-[#d1543c] hover:border-[#d1543c] transition duration-300 shadow-md 
            border-4 border-[#d1543c] rounded-md"
        data-aos="fade-up"
      >
        Service
      </button>
    </div>
  );
}

export default Testimonials;
