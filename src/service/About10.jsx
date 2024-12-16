
import  { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaTools } from "react-icons/fa";
import { FaSolarPanel } from "react-icons/fa";

function About8() {
  // State to toggle visibility of the 8 cards
  const [showCards, setShowCards] = useState(false);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // Card Data
  const cardData = [
    { title: "1", content: "This is the first card with unique text." },
    { title: "2", content: "This is the second card's description." },
    { title: "3", content: "Another card with its own content here." },
    { title: "4", content: "Content for the fourth card is displayed." },
    { title: "5", content: "The fifth card has something special!" },
    { title: " 6", content: "Unique text for the sixth card appears." },
    { title: "7", content: "Seventh card content stands out!" },
    { title: "8", content: "The last card wraps up the series." },
  ];

  return (
    <div className="container md:w-[1000px] mx-auto  flex-row md:flex justify-between py-8 ">
      {/* Original Card (Left) */}
      <div className="relative group rounded-3xl  shadow-xl shadow-gray-300 w-[auto] md:w-[500px] md:h-[500px] p-8 bg-white h-auto z-10 transition-all duration-200 ease-in-out hover:border-[#d1543c] hover:border-2 border-2 border-[#ffffff]">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <FaSolarPanel className="text-yellow-500 text-3xl" />
            <h2 className="text-4xl font-bold text-black">Equipment maintenance</h2>
          </div>
        </div>
        <div className="border-b border-gray-300 my-2 "></div>
        {/* Description Section */}
        <p className="text-gray-600 text-lg mb-6">
          You may want to explore Too CSS for great collection of free HTML CSS
          templates.
        </p>
        <button
          onClick={() => setShowCards(!showCards)}
          className="bg-white border border-gray-300 text-gray-600 text-lg px-6 py-4 rounded-full hover:bg-[#d1543c] hover:text-white shadow"
        >
          ขั้นตอนการติดตั้ง
        </button>
        <div className="hidden md:block absolute bottom-0 right-0 transform translate-x-[-10%] translate-y-[-10%] text-black transition-all duration-300 ease-in-out group-hover:text-[#d1543c]">
                  <FaTools size={200} />
                </div>
                <div className="absolute md:hidden bottom-0 right-0 transform translate-x-[-10%] translate-y-[-10%] text-black transition-all duration-300 ease-in-out group-hover:text-[#d1543c]">
                  <FaTools size={50} />
                </div>
      </div>

      {/* Right Section with 8 New Cards */}
      {showCards && (
  <div className="flex flex-col items-center space-y-4 py-2 mx-auto">
    {cardData.map((card, index) => (
      <div
      key={index}
      className="rounded-3xl shadow-lg shadow-gray-300 w-[350px] md:w-[450px] p-4 bg-[#16171f] h-auto z-8 transition-all duration-200 ease-in-out border-2 border-gray-200"
      data-aos="fade-up"
    >
      <div className="flex items-center space-x-4">
        {/* Circle with title */}
        <div className="flex items-center justify-center w-10 h-10 md:w-16 md:h-16 rounded-full bg-white">
          <h2 className="text-xl font-bold text-[#16171f]">{card.title}</h2>
        </div>
        {/* Content next to the circle */}
        <span className="text-white  md:text-lg">{card.content}</span>
      </div>
    </div>
    
    
    ))}
  </div>
)}

    </div>
  );
}

export default About8;
