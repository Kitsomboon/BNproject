import { useEffect, useRef } from 'react';
import image1 from '../assets/4.webp';
import './obliga.css'; // Import CSS

function Vision() {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
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
    <div className="w-full h-full flex flex-col md:flex-row justify-between items-center bg-white text-white ">
      <div ref={imageRef} className="flex-1 flex justify-center order-1 md:order-1 p-5 image-element">
        <img
          src={image1}
          alt="ภาพการประชุม"
          className="max-w-[90%] rounded-lg border-2 border-white"
        />
      </div>
      <div ref={textRef} className="flex-1 p-5 text-center md:text-left order-2 md:order-2 text-element">
        <h2 className="text-3xl font-bold mb-4 text-black">พันธกิจ</h2>
        <p className="text-base leading-relaxed text-black">
          - บริการงานด้านที่ปรึกษางานพลังงาน ออกแบบระบบ ควบคุมงาน วิเคราะห์ด้านเศรษฐศาสตร์ และ สิ่งแวดล้อม
          
        </p>
        <p className="text-base leading-relaxed text-black">
          
          - จำหน่ายอุปกรณ์ประหยัดพลังงาน ระบบพลังงานทดแทน ระบบกักเก็บพลังงาน และรถไฟฟ้าที่มีคุณภาพ
          
        </p>
        <p className="text-base leading-relaxed text-black">
         
          - ติดตั้งระบบผลิตพลังงานทดแทนทุกชนิดอย่างมีประสิทธฺภาพ
        </p>
      </div>
    </div>
  );
}

export default Vision;
