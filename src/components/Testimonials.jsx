import image1 from "../assets/Bang Mun Nak.jpg";
import image2 from "../assets/d.jpeg";
import image3 from "../assets/thapkhlo.jpg";
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
        Our
        <span style={{ color: "#d1543c" }}> Services</span>
        <span style={{
            display: "inline-block",
            width: "40px",
            height: "4px",
            backgroundColor: "#16171f",
            marginRight: "10px",
            verticalAlign: "middle"
          }}></span>
        <p className="text-[16px] font-normal text-gray-600 mb-8 text-center">เรามอบโซลูชันที่มืออาชีพและไว้วางใจได้</p>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Service 1 */}
        <div
          className="relative overflow-hidden rounded-lg shadow-lg bg-cover bg-center"
          style={{ backgroundImage: `url(${image1})`, height: "400px" }}
          data-aos="fade-up"
        >
          <div className="absolute inset-0 bg-[#2a4056] bg-opacity-75 flex flex-col items-center justify-center">
            <div className="flex items-center justify-center  rounded-full mb-4">
              <i className="text-black text-4xl">📱</i>
            </div>
            <h3 className="text-white text-2xl font-semibold">การออกแบบระบบ</h3>
            <p className="text-white text-sm mt-2">บริการออกแบบระบบโซล่าร์เซลล์อย่างมืออาชีพ</p>
          </div>
        </div>

        {/* Service 2 */}
        <div
          className="relative overflow-hidden rounded-lg shadow-lg bg-cover bg-center"
          style={{ backgroundImage: `url(${image2})`, height: "400px" }}
          data-aos="fade-up"
        >
          <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center">
            <div className="flex items-center justify-center   rounded-full mb-4">
              <i className="text-black text-4xl">🛠️</i>
            </div>
            <h3 className="text-white text-2xl font-semibold">การติดตั้งโซล่าร์</h3>
            <p className="text-white text-sm mt-2">การติดตั้งโซล่าร์เซลล์อย่างมืออาชีพ</p>
          </div>
        </div>

        {/* Service 3 */}
        <div
          className="relative overflow-hidden rounded-lg shadow-lg bg-cover bg-center"
          style={{ backgroundImage: `url(${image3})`, height: "400px" }}
          data-aos="fade-up"
        >
          <div className="absolute inset-0 bg-[#5a2f37] bg-opacity-75 flex flex-col items-center justify-center">
            <div className="flex items-center justify-center rounded-full mb-4">
              <i className="text-black text-4xl">♻️</i>
            </div>
            <h3 className="text-white text-2xl font-semibold">บำรุงรักษาประสิทธิภาพระบบโซล่าร์เซลล์</h3>
            <p className="text-white text-sm mt-2">การบำรุงรักษาเพื่อยืดอายุการใช้งานของระบบโซล่าร์เซลล์</p>
          </div>
        </div>
      </div>
      <button
        onClick={navigateToCustomer}
        className="mt-6 bg-[#d1543c] text-white px-8 py-2 
            hover:bg-[#ffffff] hover:text-[#d1543c] hover:border-[#d1543c]  transition duration-300 shadow-md 
            border-4 border-[#d1543c] rounded-md"
        data-aos="fade-up"
      >
        Service 
      </button>
    </div>
  );
}

export default Testimonials;