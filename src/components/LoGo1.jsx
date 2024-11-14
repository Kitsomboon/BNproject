import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // ต้องนำเข้า CSS ของ AOS
import image7 from "/src/assets/logo.png";
import image8 from "/src/assets/logo2.png";
import image9 from "/src/assets/logo4.png";

function LoGo1() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // ระยะเวลาของเอฟเฟกต์ (ms)
      once: true, // ให้แสดงเอฟเฟกต์เพียงครั้งเดียวเมื่อเลื่อนผ่าน
    });
  }, []);

  const logos = [
    { name: "Logo 1", image: image7, width: "w-40", height: "h-42" },
    { name: "Logo 2", image: image8, width: "w-40", height: "h-40" },
    { name: "Logo 3", image: image9, width: "w-40", height: "h-40" },
  ];

  return (
    <section className="flex items-center justify-center bg-white my-20">
      <div className="container mx-auto flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex justify-center items-center"
              data-aos="fade-up" // เพิ่ม AOS เอฟเฟกต์ pop-up เมื่อเลื่อนมาถึง
            >
              <img
                src={logo.image}
                alt={logo.name}
                className={`${logo.width} ${logo.height} transition-all duration-600 filter grayscale hover:grayscale-0`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LoGo1;
