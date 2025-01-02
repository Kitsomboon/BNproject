import { useState } from "react";
import { projects } from "./puma"; // นำเข้าจาก puma.js
import { FaArrowRight } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
function ProjectBox({ images, title, description }) {
  const navigateToDetail = () => {
    const queryParams = new URLSearchParams({
      images: JSON.stringify(images),
      title,
      description,
    }).toString();

    window.location.href = `/projectpuma?${queryParams}`;
  };

  return (
    <div className="bg-[#002E63] shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      <img src={images[0]} alt={title} className="w-full h-56 object-cover" />
      <div className="p-6">
        <h3 className="text-lg font-bold text-white text-center mb-2">
          {title}
        </h3>
        <p className="text-white text-center mb-4">{description}</p>
        <div className="flex justify-center">
          <button
            onClick={navigateToDetail}
            className="text-orange-500 flex items-center hover:underline"
          >
            ดูเพิ่มเติม <FaArrowRight className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}

function Boxpuma() {
  const [selectedYear, setSelectedYear] = useState(""); // State to store the selected year
  const years = Array.from({ length:  2000}, (_, i) => new Date().getFullYear() + 543 - i); // Generate last 20 years in พ.ศ.

  // Filter projects based on the selected year
  const filteredProjects = selectedYear
    ? projects.filter((project) => project.year === parseInt(selectedYear, 10))
    : projects;

  return (
    <div className="bg-gradient-to-b to-white p-24">
      <h2
        className="text-3xl font-bold text-black mb-8 flex items-center"
        style={{ position: "relative" }}
      >
        <span
          style={{
            color: "#d1543c", // เปลี่ยนสีให้ `|` (สามารถปรับได้ตามต้องการ)
            marginRight: "10px", // เพิ่มระยะห่างระหว่าง `|` กับข้อความ
          }}
        >
          |
        </span>
        โครงการการส่งเสริมและเพิ่มศักยภาพการทำธนาคารปูม้าอย่างยั่งยืน โดยใช้พลังงานทดแทน
      </h2>

      {/* Dropdown for selecting year */}
      <div className="mb-8 flex items-center justify-start">
        <label htmlFor="yearSelect" className="mr-4 text-lg font-medium text-black">
          เลือกปี:
        </label>
        <select
          id="yearSelect"
          className="border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="">ทั้งหมด</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 px-4 mx-auto">
        {filteredProjects.map((project, index) => (
          <ProjectBox
            key={index}
            images={project.images}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Boxpuma;
