import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdOutlineBuild } from "react-icons/md"; // Updated icon
import { FaSolarPanel } from "react-icons/fa";

function About8() {
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const cardData = [
    { title: "1", content: "PM ตรวจเช็คระบบ" },
    { title: "2", content: "CM แก้ไข เมื่อระบบเกิดปัญหา" },
    { title: "3", content: "ทำความสะอาดแผงโซล่าเซลล์ และระบบ" },
    { title: "4", content: "Monitoring ตรวจดูค่าพลังงาน" },
    { title: "5", content: "ปรับปรุงระบบ ให้มีประสิทธิภาพ" },
  ];

  return (
    <div className="container md:w-[1000px] mx-auto flex justify-center py-8">
      <div
        className={`relative w-[1000px] h-[800px] md:h-[550px] md:w-[1000px] transition-transform duration-500 hover:border-[#d1543c] group ${
          showCards ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div
          className={`absolute inset-0 bg-white rounded-3xl shadow-xl shadow-gray-300 p-8 transform hover:border-[#d1543c] hover:border-4 border-4 border-[#ffffff] group ${
            showCards ? "hidden" : "block"
          }`}
        >
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              <FaSolarPanel className="text-yellow-500 text-3xl" />
              <h2 className="text-4xl font-bold text-black">
                Equipment maintenance
              </h2>
            </div>
          </div>
          <div className="border-b border-gray-300 my-2"></div>
          <p className="text-gray-600 text-lg mb-6">
            You may want to explore Too CSS for a great collection of free HTML
            CSS templates.
          </p>
          <button
            onClick={() => setShowCards(true)}
            className="bg-white border border-gray-300 text-gray-600 text-lg px-6 py-4 rounded-full hover:bg-[#d1543c] hover:text-white shadow"
          >
            ขั้นตอนการบำรุงรักษา
          </button>
          <div className="hidden md:block absolute bottom-0 right-0 transform translate-x-[-10%] translate-y-[-10%] text-black transition-all duration-300 ease-in-out group-hover:text-[#d1543c]">
            <MdOutlineBuild size={300} /> {/* Updated icon */}
          </div>
          <div className="absolute md:hidden bottom-0 right-0 transform translate-x-[-10%] translate-y-[-10%] text-black transition-all duration-300 ease-in-out group-hover:text-[#d1543c]">
            <MdOutlineBuild size={200} /> {/* Updated icon */}
          </div>
        </div>

        {/* Back Side */}
        <div
          className={`absolute inset-0 bg-[#16171f] rounded-2xl shadow-xl shadow-gray-600 p-8 transform ${
            showCards ? "block" : "hidden"
          }`}
        >
          <div className="grid-cols-2 md:grid">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="rounded-3xl shadow-lg shadow-gray-300 w-full p-4 bg-white h-auto z-8 transition-all duration-400 ease-in-out border-2 border-gray-300"
                data-aos="fade-up"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#16171f]">
                    <h2 className="text-xl font-bold text-white">
                      {card.title}
                    </h2>
                  </div>
                  <span className="text-[#16171f] md:text-lg">
                    {card.content}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => setShowCards(false)}
            className="mt-6 bg-white border border-gray-300 text-gray-600 text-lg px-6 py-4 rounded-full hover:bg-[#d1543c] hover:text-white shadow"
          >
            กลับไปยังก่อนหน้า
          </button>
        </div>
      </div>
    </div>
  );
}

export default About8;
