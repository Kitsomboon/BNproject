import image1 from "/src/assets/dongyang.jpg";

function Hero6() {
  return (
    <div
      className="relative w-full h-[500px] bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255, 165, 8, 1), rgba(0, 32, 0, 0)), url(${image1})`,
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            ติดต่อสอบถามรายละเอียด
          </h1>
          <p className="text-lg md:text-xl">
            ติดโซล่าเซลล์วันนี้ ประหยัดค่าไฟ ยั่งยืนเพื่อโลกอนาคต
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero6;
