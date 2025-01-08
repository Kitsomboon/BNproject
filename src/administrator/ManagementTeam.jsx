import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // นำเข้า CSS ของ AOS
import image1 from "../assets/Bang Mun Nak.jpg";

function ManagementTeam() {
  useEffect(() => {
    AOS.init({
      duration: 5000, // ระยะเวลาของเอฟเฟกต์ (ms)
      once: true, // ให้แสดงเอฟเฟกต์เพียงครั้งเดียวเมื่อเลื่อนผ่าน
    });
  }, []);

  return (
    <div className=" mx-auto py-20 ">
      {/* Section Header */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h2
          className="text-3xl font-bold"
         
        ><span style={{
          display: "inline-block",
          width: "40px",
          height: "4px",
          backgroundColor: "#d1543c",
          marginRight: "10px",
          verticalAlign: "middle"
        }}></span>
          Board of <span className="text-[#d1543c]">Executives</span>
          <span style={{
            display: "inline-block",
            width: "40px",
            height: "4px",
            backgroundColor: "#16171f",
            marginRight: "10px",
            verticalAlign: "middle"
          }}></span>
        </h2>
      </div>

      {/* Management Cards */}
      {/* Management Cards */}
      <div className="flex flex-wrap justify-center gap-12">
        {/* First Person */}
        <div
          className="w-64 text-center md:w-1/2 lg:w-1/3 px-4 mb-8 flex flex-col items-center"
          data-aos="fade-up"
          data-aos-delay="100" // เพิ่มดีเลย์เพื่อให้แต่ละคาร์ดแสดงผลต่อกัน
        >
          <img
            src={image1}
            alt="Person 1"
            className="rounded-lg object-cover"
            style={{ width: "200px", height: "300px" }} // กำหนดขนาดกว้างและสูงของภาพ
          />

          <div className="mt-8 bg-[#d1543c] p-6  rounded-lg text-center w-full "style={{ width: "300px", height: "120px" }} >
            <h3 className="text-xl font-semibold text-white">ดร.สุชัจจ์ ศรีแก้ว</h3>
            <p className="text-white">กรรมการผู้จัดการ</p>
            <p className="text-white">บริษัท บี.เอ็ม. โซล่าร์ เพาเวอร์ จำกัด</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManagementTeam;
