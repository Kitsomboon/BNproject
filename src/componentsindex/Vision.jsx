import { useEffect, useRef } from "react";
import image1 from "../assets/4.webp";
import "./Vision.css"; // Import CSS

function Vision() {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div className="vision-container w-full h-full flex flex-col md:flex-row justify-between items-center bg-white text-white border-t-2">
      <div
        ref={imageRef}
        className="flex-1 flex justify-center p-5 md:order-2 image-element"
      >
        <img
          src={image1}
          alt="ภาพการประชุม"
          className="max-w-[90%] rounded-lg border-2 border-white shadow-lg"
        />
      </div>
      <div
        ref={textRef}
        className="flex-1 p-5 text-center md:text-left md:order-1 text-element"
      >
        <h2 className="text-3xl font-bold text-black mb-4">วิสัยทัศน์</h2>
        <p className="text-base leading-relaxed text-black">
          B.N. SOLAR POWER มุ่งมั่นเป็นบริษัทรับเหมาติดตั้งระบบพลังงานทดแทนทุกชนิด ด้วยทีมงานที่มีประสิทธิภาพ และซื่อสัตย์ต่อลูกค้า
        </p>
      </div>
    </div>
  );
}

export default Vision;
