import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaTools } from "react-icons/fa"; // Maintenance Icon
import { FaSolarPanel } from "react-icons/fa";

function About10() {
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const cardData = [
    { title: "1", content: "This is the first card with unique text." },
    { title: "2", content: "This is the second card's description." },
    { title: "3", content: "Another card with its own content here." },
    { title: "4", content: "Content for the fourth card is displayed." },
    { title: "5", content: "The fifth card has something special!" },
    { title: "6", content: "Unique text for the sixth card appears." },
    { title: "7", content: "Seventh card content stands out!" },
    { title: "8", content: "The last card wraps up the series." },
  ];

  return (
    <div className="container md:w-[1000px] mx-auto flex justify-between py-2">
      <div className="relative group rounded-3xl shadow-sm shadow-gray-300 w-[350px] md:w-[500px] md:h-[500px] p-8 bg-white h-auto z-10 transition-all duration-200 ease-in-out hover:border-[#d1543c] hover:border-2 border-2 border-[#ffffff]">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <FaSolarPanel className="text-yellow-500 text-4xl" />
            <h2 className="text-4xl font-bold text-black">Equipment maintenance</h2>
          </div>
        </div>
        <div className="border-b border-gray-300 my-2 "></div>
        <p className="text-gray-600 text-lg mb-6">
          You may want to explore Too CSS for great collection of free HTML CSS
          templates.
        </p>
        <button
          onClick={() => setShowCards(!showCards)}
          className="bg-white border border-gray-300 text-gray-600 text-lg px-6 py-4 rounded-full hover:bg-[#d1543c] hover:text-white shadow"
        >
          ขั้นตอนบำรุงรักษา
        </button>
        <div className="absolute bottom-0 right-0 transform translate-x-[-10%] translate-y-[-10%] text-black transition-all duration-300 ease-in-out group-hover:text-[#d1543c]">
          <FaTools size={200} /> {/* Tools Icon */}
        </div>
      </div>

      {showCards && (
        <div className="flex flex-col space-y-4">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="rounded-3xl shadow-lg shadow-gray-300 w-[350px] md:w-[450px] p-4 bg-white h-auto z-10 transition-all duration-200 ease-in-out border-2 border-gray-200"
              data-aos="fade-up"
            >
              <h2 className="text-2xl font-semibold text-black mb-2">{card.title}</h2>
              <p className="text-gray-600">{card.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default About10;
