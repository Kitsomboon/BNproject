import image9 from "/src/assets/thapkhlo3.jpg";
import image from "/src/assets/thapkhlo3.jpg";

function Box({ width, height, title, content, image, bgColor, layerColor, imagePosition }) {
  return (
    <div
      className={`relative text-white p-6 rounded-lg shadow-lg flex ${
        imagePosition === "side" ? "flex-col md:flex-row" : "flex-col"
      } items-center ${bgColor}`}
      style={{ width: width, height: height }}
    >
      {/* Background Layer */}
      <div
        className={`absolute inset-0 ${layerColor} opacity-80 rounded-lg -z-10`}
      ></div>

      {/* Content Section */}
      <div
        className={`flex ${
          imagePosition === "side" ? "flex-col md:flex-row" : "flex-col"
        } items-center gap-6 flex-1`}
      >
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p>{content}</p>
        </div>

        {/* Image Section */}
        {image && (
          <div
            className={`${
              imagePosition === "side" ? "w-[50%] flex justify-center" : "mt-2"
            }`}
          >
            <img
              src={image}
              alt="Code illustration"
              className="w-full max-w-xs rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
}

function About8() {
  return (
    <div className="container mx-auto py-10  w-[400px] h-[auto] md:w-[1200px] md:h-[auto]">
      <div className="flex flex-col md:flex-row gap-8">
        {/* First Box - Image on the Side */}
        <Box
          width="800px"
          height="300px"
          title="สำรวจพื้นที่หน้างาน ของความต้องการของลูกค้า"
          
          image={image9}
          bgColor="bg-gradient-to-r from-orange-500 to-orange-100"
          layerColor="bg-gradient-to-br from-black to-orange-700"
          imagePosition="side" // Image on the side
        />

        {/* Second Box - Image at the Bottom */}
        <Box
          width="500px"
          height="400px"
          title="ออกแบบเพื่อติดตั้งระบบโซล่าร์เซลล์ตามความเหมาะสมของการใช้งาน"
          
          image={image}
          bgColor="bg-gradient-to-r from-orange-600 to-orange-200"
          layerColor="bg-gradient-to-br from-black to-orange-800"
          imagePosition="bottom" // Image at the bottom
        />
      </div>
    </div>
  );
}

export default About8;
