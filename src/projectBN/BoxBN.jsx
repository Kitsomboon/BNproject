import { projects } from "./project"; // นำเข้าข้อมูลจาก project.js
import { FaArrowRight } from "react-icons/fa"; // ใช้ไอคอนจาก react-icons
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function ProjectBox({ images, title, description }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      {/* แสดงภาพแรกในอาร์เรย์ images เป็นภาพหลัก */}
      <img src={images[0]} alt={title} className="w-full h-56 object-cover" />
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-800 text-center mb-2">{title}</h3>
        <p className="text-gray-600 text-center mb-4">{description}</p>
        <div className="text-center">
          <Link
            to="/project-detail"
            state={{ images, title, description }}
            className="text-orange-500 flex items-center justify-center hover:underline"
          >
            ดูเพิ่มเติม <FaArrowRight className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function BoxBN() {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 p-8">
      <h2
        className="text-4xl font-bold mb-12 text-center text-gray-800"
        style={{
          textDecoration: "underline",
          textDecorationThickness: "5px",
          textUnderlineOffset: "10px",
          textDecorationColor: "orange",
        }}
      >
        โครงการของเรา
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 px-4 mx-auto ">
        {projects.map((project, index) => (
          <ProjectBox
            key={index}
            images={project.images} // ส่ง images เป็นอาร์เรย์
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}

export default BoxBN;
