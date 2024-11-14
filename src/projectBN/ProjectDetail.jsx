import { useLocation } from "react-router-dom";
import { useState } from "react";
import Nav from "../components/Nav";
import image1 from "/src/assets/thapkhlo4.jpg";
import Footer from "../components/Footer";
import Footer2 from "../componentsindex/Footer2";

function ProjectDetail() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Parse images, title, and description from query parameters
  const images = JSON.parse(queryParams.get("images") || "[]");
  const title = queryParams.get("title") || "Default Title";
  const description = queryParams.get("description") || "Default Description";
  
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <Nav />

      <div
        className="relative w-full h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255, 165, 8, 1), rgba(0, 32, 0, 0)), url(${image1})`,
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{title}</h1>
            <p className="text-lg md:text-xl">{description}</p>
          </div>
        </div>
      </div>

      <div className="bg-white min-h-screen p-4 mt-20">
        <div className="bg-gray-300 shadow-lg rounded-lg overflow-hidden mx-auto max-w-10xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${title} - image ${index + 1}`}
                className="w-full h-80 object-cover rounded-lg cursor-pointer"
                onClick={() => openImage(image)}
              />
            ))}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeImage}
        >
          <img
            src={selectedImage}
            alt="Expanded view"
            className="max-w-full max-h-full rounded-lg"
          />
          <button
            onClick={closeImage}
            className="absolute top-4 right-4 text-white text-3xl"
          >
            &times;
          </button>
        </div>
      )}
      <Footer2 />
      <Footer />
    </div>
  );
}

export default ProjectDetail;
