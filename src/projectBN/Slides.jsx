import { useState } from "react";
import image1 from "/src/assets/p.jpg";
import image2 from "../assets/i.jpeg";
import image3 from "../assets/g.jpeg";
import image4 from "../assets/b.jpeg";
import image5 from "../assets/d.jpeg";
import image6 from "../assets/c.jpeg";

function Slides() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const timelineData = [
    {
      title: "Harvard University",
      date: "2008 - 2011",
      description: "A description of all the lectures and courses I have taken and my final degree.",
      image: image1,
    },
    {
      title: "Apple Inc.",
      date: "2011 - 2013",
      description: "My first employer. All the stuff I've learned and projects I've been working on.",
      image: image2,
    },
    {
      title: "Freelancer",
      date: "2013 - present",
      description: "My current employment. Way better than the position before!",
      image: image3,
    },
    {
      title: "Freelancer",
      date: "2013 - present",
      description: "My current employment. Way better than the position before!",
      image: image4,
    },
    {
      title: "Freelancer",
      date: "2013 - present",
      description: "My current employment. Way better than the position before!",
      image: image5,
    },
    {
      title: "Freelancer",
      date: "2013 - present",
      description: "My current employment. Way better than the position before!",
      image: image6,
    },
  ];

  const handleClick = (index) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen py-10">
      <h2 className="text-3xl font-bold mb-8" style={{
          textDecoration: "underline",
          textDecorationThickness: "5px",
          textUnderlineOffset: "10px",
          textDecorationColor: "orange",
        }}>โครงการที่เกี่ยวข้อง</h2>
        <p className="text-lg mb-8 text-black">โครงการส่งเสริมการใช้พลังงานทดแทนทั่วประเทศ</p>
      <div className="relative w-full flex flex-col items-center">
        <div className="absolute w-1 h-full bg-gray-800"></div>

        {timelineData.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`flex ${isLeft ? "justify-start" : "justify-end"} w-full max-w-4xl mb-10`}
            >
              <div
                className={`relative w-1/2 ${isLeft ? "text-right pr-8" : "text-left pl-8"}`}
                onClick={() => handleClick(index)}
              >
                <div
                  className={`absolute top-1/2 transform -translate-y-1/2 ${
                    isLeft ? "-right-3" : "-left-3"
                  } w-6 h-6 bg-white border-4 border-orange-500 rounded-full flex items-center justify-center`}
                ></div>

                <div className="bg-white p-4 rounded-lg shadow-md cursor-pointer">
                  <span className="text-sm font-semibold text-orange-600">{item.date}</span>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>

                {/* Display the unique image below the item if clicked */}
                {selectedIndex === index && (
                  <div className="mt-4 flex justify-center">
                    <img src={item.image} alt="timeline" className="w-128 h-128 rounded-lg shadow-lg" />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Slides;
