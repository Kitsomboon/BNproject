import { IoFilmOutline, IoDocumentOutline, IoCallOutline } from 'react-icons/io5';
import 'boxicons';
import { useState, useEffect } from 'react';
import image3 from '../assets/solar4.jpg';
import image1 from '../assets/solar6.jpg';
import image2 from '../assets/solar7.jpg';
import image4 from '../assets/solar8.jpg';

function Hero1() {
  const borderRadius = window.innerWidth >= 1024 ? '100px' : '100px';

  // อาร์เรย์ภาพ
  const images = [image1, image2, image3, image4];
  const [currentImage, setCurrentImage] = useState(images[0]); // เริ่มต้นภาพแรก
  const [flip, setFlip] = useState(false); // สถานะการพลิกภาพ

  useEffect(() => {
    const interval = setInterval(() => {
      let newImage;
      do {
        // สุ่มภาพใหม่
        const randomIndex = Math.floor(Math.random() * images.length);
        newImage = images[randomIndex];
      } while (newImage === currentImage); // ถ้าภาพใหม่ซ้ำเดิม ให้สุ่มใหม่อีกครั้ง

      setCurrentImage(newImage);

      // สลับสถานะการพลิกภาพ
      setFlip((prevFlip) => !prevFlip);
    }, 4000); // เปลี่ยนภาพทุก 4 วินาที

    return () => clearInterval(interval); // ล้าง interval เมื่อ component ถูก unmount
  }, [currentImage]); // เพิ่ม currentImage ใน dependency array

  return (
    <div
      style={{
        position: 'relative',
        borderBottomLeftRadius: borderRadius,
        borderBottomRightRadius: borderRadius,
        backgroundColor: '#f97316', // สีส้ม
        color: 'white',
      }}
    >
      <div className="py-16 h-[900px] w-full flex items-center justify-center">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
          {/* ส่วนข้อความ */}
          <div className="text-center lg:text-left lg:w-1/2">
            <p className="text-lg mt-4 py-4">
              ยินดีต้อนรับสู่บริษัท บี.เอ็น.โซล่า เพาเวอร์ จำกัด
            </p>
            <h1 className="text-6xl font-extrabold mb-4">บี.เอ็น.โซล่า เพาเวอร์ จำกัด</h1>
            <p className="text-[14px] mt-6">
              เราพร้อมให้บริการด้านการติดตั้งและบำรุงรักษาระบบพลังงานธรรมชาติ ไม่ว่าจะเป็นพลังงานแสงอาทิตย์หรือพลังงานลม
              ด้วยทีมงานมืออาชีพที่มีความเชี่ยวชาญ เพื่อช่วยลดค่าใช้จ่ายด้านพลังงาน และสร้างอนาคตที่ยั่งยืนไปพร้อมกับการรักษาสิ่งแวดล้อมอย่างมีประสิทธิภาพ
            </p>
            {/* วงกลมพร้อมไอคอน */}
            <div className="flex justify-center lg:justify-start gap-8 mt-10">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-yellow-300 hover:bg-black text-white rounded-full flex items-center justify-center shadow-lg">
                  <IoFilmOutline size={30} />
                </div>
                <p className="mt-2 text-sm">ประวัติ</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-yellow-300 hover:bg-black text-white rounded-full flex items-center justify-center shadow-lg">
                  <IoDocumentOutline size={30} />
                </div>
                <p className="mt-2 text-sm">โครงการ</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-yellow-300 hover:bg-black text-white rounded-full flex items-center justify-center shadow-lg">
                  <box-icon type="solid" name="server" color="white" size="md"></box-icon>
                </div>
                <p className="mt-2 text-sm">บริการ</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-yellow-300 hover:bg-black text-white rounded-full flex items-center justify-center shadow-lg">
                  <IoCallOutline size={30} />
                </div>
                <p className="mt-2 text-sm">บริการ</p>
              </div>
            </div>
          </div>

          {/* ส่วนภาพ */}
          <div className="relative lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
            {/* เงาภาพ */}
            <div
              className={`absolute w-[400px] h-auto rounded-lg shadow-lg transform ${
                flip ? 'scale-x-[-1]' : ''
              }`}
              style={{
                backgroundImage: `url(${currentImage})`,
                filter: 'blur(10px) brightness(0.5)',
                zIndex: -1,
              }}
            ></div>

            {/* ภาพหลัก */}
            <img
              src={currentImage}
              alt="Solar Power"
              className={`rounded-lg  w-[350px] h-auto object-cover transition-transform duration-500 ${
                flip ? 'transform scale-x-[-1]' : ''
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero1;
