import image1 from "/src/assets/kere.jpg";

function Hero7() {
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
            โครงการที่เราร่วมพัฒนาและเข้าร่วม
          </h1>
          <p className="text-lg md:text-xl">
            โครงทั้งหมดที่บริษัท บี.เอ็น. โซล่าร์ เพาเวอร์ จำกัด 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero7;
