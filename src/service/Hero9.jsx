import image1 from "/src/assets/lalar1.jpg";
function Hero8() {
    return (
        <div
          className="relative w-full h-[600px] bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(255, 165, 8, 1), rgba(0, 32, 0, 0)), url(${image1})`,
            backgroundBlendMode: "overlay",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
              ด้านบริการ บี.เอ็น. โซล่า เพาเวอร์ จำกัด
              </h1>
              <p className="text-lg md:text-xl">
              ให้บริการด้านพลังงานโซล่าที่เป็นเลิศ เพื่อตอบสนองความต้องการของลูกค้าและสร้างอนาคตที่ยั่งยืนด้วยพลังงานสะอาด
              </p>
            </div>
          </div>
        </div>
      );
    }

export default Hero8



