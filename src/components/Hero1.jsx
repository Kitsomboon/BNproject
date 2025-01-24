import { IoFilmOutline, IoDocumentOutline, IoCallOutline } from 'react-icons/io5';
import 'boxicons';
import { useState, useEffect } from 'react';
import image3 from '../assets/thapkhlo3.jpg';
import image1 from '../assets/H.thapkhlo.jpg';
import image2 from '../assets/ku4.jpg';
import image4 from '../assets/nong.jpg';
import image5 from '../assets/PH.thapkhlo2.jpg';
import image6 from '../assets/Phrae1.jpg';  
import image7 from '../assets/yub3.jpg'; 
import AOS from "aos";
import "aos/dist/aos.css";

function Hero1() {
    const borderRadius = window.innerWidth >= 1024 ? '100px' : '100px';

    // Image array
    const images = [image1, image2, image3, image4, image5, image6, image7];
    const [currentImage, setCurrentImage] = useState(images[0]); // Initial image
    const [flip, setFlip] = useState(false); // Flip status

    useEffect(() => {
        AOS.init({ duration: 1000 });

        const interval = setInterval(() => {
            let newImage;
            do {
                // Randomize new image
                const randomIndex = Math.floor(Math.random() * images.length);
                newImage = images[randomIndex];
            } while (newImage === currentImage); // Prevent duplicate image

            setCurrentImage(newImage);
            setFlip((prevFlip) => !prevFlip); // Toggle flip state
        }, 4000); // Change image every 4 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [currentImage]);

    const handleLinkClick = (path) => {
        window.location.href = path; // Navigate to the desired path
    };

    return (
        <div
            style={{
                position: 'relative',
                borderBottomLeftRadius: borderRadius,
                borderBottomRightRadius: borderRadius,
                backgroundColor: '#16171f',
                color: 'white',
            }}
        >
            <div className="py-16 lg:h-[900px] h-auto w-full flex items-center justify-center">
                <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center lg:gap-0 gap-8">
                    {/* Text Section */}
                    <div
                        className="text-center lg:text-left lg:w-1/2 flex flex-col items-center lg:items-start"
                        data-aos="fade-right"
                    >
                        <p className="text-lg mt-4 py-4">
                            ยินดีต้อนรับสู่บริษัท บี.เอ็น.โซล่า เพาเวอร์ จำกัด
                        </p>
                        <h1 className="text-4xl lg:text-6xl font-extrabold mb-4">
                            บี.เอ็น.โซล่า เพาเวอร์ จำกัด
                        </h1>
                        <p className="text-sm lg:text-[14px] mt-6 lg:leading-relaxed">
                            เราพร้อมให้บริการด้านการติดตั้งและบำรุงรักษาระบบพลังงานธรรมชาติ
                            ไม่ว่าจะเป็นพลังงานแสงอาทิตย์หรือพลังงานลม
                            ด้วยทีมงานมืออาชีพที่มีความเชี่ยวชาญ
                            เพื่อช่วยลดค่าใช้จ่ายด้านพลังงาน
                            และสร้างอนาคตที่ยั่งยืนไปพร้อมกับการรักษาสิ่งแวดล้อมอย่างมีประสิทธิภาพ
                        </p>
                        {/* Circular Icons */}
                        <div className="flex justify-center lg:justify-start gap-8 mt-16">
                            <div
                                className="flex flex-col items-center"
                                data-aos="zoom-in"
                                onClick={() => handleLinkClick("/index")}
                            >
                                <div className="w-20 h-20 bg-[#d1543c] hover:bg-[#2a4056] text-white rounded-full flex items-center justify-center shadow-lg">
                                    <IoFilmOutline size={30} />
                                </div>
                                <p className="mt-2 text-sm">About</p>
                            </div>
                            <div
                                className="flex flex-col items-center"
                                data-aos="zoom-in"
                                onClick={() => handleLinkClick("/project")}
                            >
                                <div className="w-20 h-20 bg-[#d1543c] hover:bg-[#2a4056] text-white rounded-full flex items-center justify-center shadow-lg">
                                    <IoDocumentOutline size={30} />
                                </div>
                                <p className="mt-2 text-sm">Projects</p>
                            </div>
                            <div
                                className="flex flex-col items-center"
                                data-aos="zoom-in"
                                onClick={() => handleLinkClick("/customer")}
                            >
                                <div className="w-20 h-20 bg-[#d1543c] hover:bg-[#2a4056] text-white rounded-full flex items-center justify-center shadow-lg">
                                    <box-icon type="solid" name="server" color="white" size="md"></box-icon>
                                </div>
                                <p className="mt-2 text-sm">Services</p>
                            </div>
                            <div
                                className="flex flex-col items-center"
                                data-aos="zoom-in"
                                onClick={() => handleLinkClick("/contact")}
                            >
                                <div className="w-20 h-20 bg-[#d1543c] hover:bg-[#2a4056] text-white rounded-full flex items-center justify-center shadow-lg">
                                    <IoCallOutline size={30} />
                                </div>
                                <p className="mt-2 text-sm">Contact</p>
                            </div>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div
                        className="relative lg:w-1/2 flex justify-center"
                        data-aos="fade-left"
                    >
                        {/* Image Shadow */}
                        <div
                            className={`absolute w-[350px] h-auto rounded-lg shadow-lg transform ${
                                flip ? 'scale-x-[-1]' : ''
                            }`}
                            style={{
                                backgroundImage: `url(${currentImage})`,
                                filter: 'blur(10px) brightness(0.5)',
                                zIndex: -1,
                            }}
                        ></div>

                        {/* Main Image */}
                        <img
                            src={currentImage}
                            alt="Solar Power"
                            className={`rounded-lg w-[300px] lg:w-[600px] h-auto object-cover transition-transform duration-500 ${
                                flip ? 'transform scale-x-[-1]' : ''
                            }`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero1;
