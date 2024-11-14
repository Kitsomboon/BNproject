import image1 from "../assets/Bang Mun Nak.jpg";
import image2 from "../assets/d.jpeg";
import image3 from "../assets/thapkhlo.jpg";

function Testimonials() {
  const navigateToCustomer = () => {
    window.location.href = "/customer";
  };

  return (
    <div className="container mx-auto py-16 text-center">
      <h2
        className="text-4xl font-bold text-black mb-8 text-center"
        style={{
          position: "relative",
        }}
      >
        บริการของเรา
        <span
          style={{
            content: '""',
            position: "absolute",
            bottom: "-5px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "5%",
            height: "2px",
            backgroundColor: "orange",
            transition: "width 0.3s ease-in-out",
          }}
        ></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Service 1 */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src={image1}
            alt="ออกแบบและติดตั้ง"
            className="object-cover w-full h-full"
            style={{
              height: "800px",
              width: "100%",
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h3 className="text-white text-2xl font-semibold">ออกแบบและติดตั้ง</h3>
          </div>
        </div>

        {/* Service 2 */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src={image2}
            alt="บำรุงรักษาประสิทธิภาพระบบโซล่าร์เซลล์"
            className="object-cover w-full h-full"
            style={{
              height: "800px",
              width: "100%",
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h3 className="text-white text-2xl font-semibold">บำรุงรักษาประสิทธิภาพระบบโซล่าร์เซลล์</h3>
          </div>
        </div>

        {/* Service 3 */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src={image3}
            alt="กำจัดแผงโซล่าร์เซลล์ที่เสื่อมสภาพ"
            className="object-cover w-full h-full"
            style={{
              height: "800px",
              width: "100%",
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h3 className="text-white text-2xl font-semibold">กำจัดแผงโซล่าร์เซลล์ที่เสื่อมสภาพ</h3>
          </div>
        </div>
      </div>
      <button
        onClick={navigateToCustomer}
        className="mt-12 bg-black text-white px-6 py-3 rounded-full hover:bg-orange-500 transition duration-300"
      >
        ดูบริการทั้งหมด
      </button>
    </div>
  );
}

export default Testimonials;
