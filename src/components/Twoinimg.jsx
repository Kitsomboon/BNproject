import { useState, useEffect, useRef } from 'react';

function Twoinimg() {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing after it appears
          }
        });
      },
      {
        threshold: 0.5, // 50% of the element needs to be visible
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`container mx-auto py-20 transform transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h2
        className="text-4xl font-bold text-black mb-16 text-center" 
        style={{
          position: "relative",
        }}
      >
        เหตุผลที่ควรเลือกเรา
        <span
          style={{
            content: '""',
            position: "absolute",
            bottom: "-5px",
            left: "50%", // Center the underline
            transform: "translateX(-50%)",
            width: "5%", // Length of the underline
            height: "2px",
            backgroundColor: "orange",
            transition: "width 0.3s ease-in-out",
          }}
        ></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold text-orange-500 mb-4">พลังงานสะอาด ประหยัดค่าไฟ ไว้ใจ บี.เอ็น. โซล่าร์ เพาเวอร์</h3>
          <p className="text-gray-600">
          เรามุ่งมั่นสร้างระบบโซล่าร์เซลล์ที่ช่วยลดค่าใช้จ่ายด้านพลังงานและเป็นมิตรต่อสิ่งแวดล้อม เพื่ออนาคตที่ยั่งยืนของคุณและโลก
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold text-orange-500 mb-4">บริการครบวงจร มาตรฐานสูง มั่นใจทุกการติดตั้ง</h3>
          <p className="text-gray-600">
          ให้บริการตั้งแต่การวางแผน ออกแบบ ติดตั้ง ไปจนถึงดูแลบำรุงรักษา ด้วยมาตรฐานคุณภาพและความปลอดภัยสูงสุด มั่นใจได้ในทุกขั้นตอน
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold text-orange-500 mb-4">ให้คำปรึกษามืออาชีพ ดูแลครบจบในที่เดียว</h3>
          <p className="text-gray-600">
          ทีมงานมืออาชีพของเราพร้อมให้คำปรึกษาและแนะนำอย่างใกล้ชิด เพื่อให้คุณได้รับบริการที่ตอบโจทย์ตรงตามความต้องการ ครบจบในที่เดียว
          </p>
        </div>
       
      </div>
    </div>
  );
}

export default Twoinimg;
