import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // นำเข้า CSS ของ AOS
import image1 from "../assets/Bang Mun Nak.jpg";

function About5() {
  useEffect(() => {
    AOS.init({
      duration: 5000, // ระยะเวลาของเอฟเฟกต์ (ms)
      once: true, // ให้แสดงเอฟเฟกต์เพียงครั้งเดียวเมื่อเลื่อนผ่าน
    });
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center justify-center bg-white py-20 md:py-32 px-10 md:px-12">
      {/* Left Side - Text Content */}
      <div
        className="md:w-1/2 mb-10 md:mb-0  md:gap-20 lg:gap-40 xl:gap-80"
        data-aos="fade-right" // เพิ่มเอฟเฟกต์ pop-up ให้กับส่วนข้อความ
      >
        <h1 className="text-6xl font-bold mb-6 leading-tight">
          ความเป็นมาของบริษัท <br />
        </h1>
        <p className="text-black mb-10  md:text-left  ">
          บริษัท บี.เอ็น. โซล่าร์ เพาเวอร์ จำกัด (B.N. SOLAR POWER)
          เริ่มดำเนินกิจการ ตั้งแต่ปี 2557 (2014) โดยการก่อตั้งของ ดร.สุชัจจ์
          ศรีแก้ว
          และเริ่มต้นดำเนินด้านการออกแบบและควบคุมงานติดตั้งระบบผลิตไฟฟ้าด้วยเซลล์
          แสงอาทิตย์
          และด้านการศึกษาและวิเคราะห์ด้านเศรษฐศาสตร์และสิ่งแวดล้อมให้กับหน่วยงานภาพรัฐและภาคเอกชน
        </p>
      </div>

      {/* Right Side - Image */}
      <div
        className="md:w-1/2 flex justify-center md:justify-end overflow-hidden rounded-tr-[300px] 
        rounded-bl-[200px] max-w-[600px] max-h-[800px]"
        data-aos="fade-left" // เพิ่มเอฟเฟกต์ pop-up ให้กับส่วนภาพ
      >
        <img
          src={image1}
          alt="Stylish Living"
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
}

export default About5;
