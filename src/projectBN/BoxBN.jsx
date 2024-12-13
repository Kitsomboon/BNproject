import { projects } from "./project"; // นำเข้าข้อมูลจาก project.js
import { FaArrowRight } from "react-icons/fa"; // ใช้ไอคอนจาก react-icons

// eslint-disable-next-line react/prop-types
function ProjectBox({ images, title, description }) {
  const navigateToDetail = () => {
    // Encode the data as query parameters
    const queryParams = new URLSearchParams({
      images: JSON.stringify(images),
      title,
      description,
    }).toString();

    // Navigate to /project-detail with the encoded state data
    window.location.href = `/project-detail?${queryParams}`;
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      {/* แสดงภาพแรกในอาร์เรย์ images เป็นภาพหลัก */}
      <img src={images[0]} alt={title} className="w-full h-56 object-cover" />
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-800 text-center mb-2">
          {title}
        </h3>
        <p className="text-gray-600 text-center mb-4">{description}</p>
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

function BoxBN() {
  return (
    <div className="bg-gradient-to-b  to-white p-24">
      {/* <h2
        className="text-4xl font-bold text-black mb-4 text-center relative "
        style={{
          position: "relative",
        }}
      >
        โครงการของเรา
        <span
          style={{
            content: '""',
            position: "absolute",
            bottom: "-5px",
            left: "50%", // จัดให้อยู่ตรงกลาง
            transform: "translateX(-50%)",
            width: "5%", // กำหนดความยาวของเส้นใต้
            height: "2px",
            backgroundColor: "orange",
            transition: "width 0.3s ease-in-out",
          }}
        ></span>
      </h2> */}
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
