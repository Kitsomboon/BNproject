import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination, Autoplay } from "swiper/modules"; // นำเข้า Autoplay
import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "../componentsindex/index";

const CircularCarousel = () => {
  return (
    <div className="flex items-center bg-white justify-center flex-col h-[500px] bg-gray-100">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        loop={true} // เพิ่ม loop เพื่อให้ Swiper ทำซ้ำได้
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000, // ตั้งค่าความหน่วงเวลาในการขยับ (หน่วยเป็นมิลลิวินาที)
          disableOnInteraction: false, // ให้ autoplay ทำงานต่อหลังจากผู้ใช้มีปฏิสัมพันธ์
        }}
        modules={[FreeMode, Pagination, Autoplay]} // เพิ่ม Autoplay
        className="max-w-[60%] lg:max-w-[80%]"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex flex-col gap-5 mb-10 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
                <h1 className="text-xl lg:text-2xl">{item.title} </h1>
                <p className="lg:text-[18px]">{item.content} </p>
              </div>
              <RxArrowTopRight className="absolute bottom-5 left-5 w-[20px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CircularCarousel;