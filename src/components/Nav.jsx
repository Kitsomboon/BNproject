import { useState, useEffect } from "react";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (path) => {
    window.location.href = path; // นำทางไปที่เส้นทางที่ต้องการ
    
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // เปลี่ยนค่าตามตำแหน่งเลื่อนของหน้าจอ
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-3 z-50 transition-colors duration-500 ${
        isScrolled ? "bg-orange-500" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between">
        <div
          className="text-white text-center font-bold hover:text-transparent 
          hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-800 hover:to-black transition duration-500"
          onClick={() => handleLinkClick("/")}
        >
          <div className="text-5xl lg:text-5xl">B.N.</div>
          <div className="text-lg lg:text-xl mt-1">SOLAR POWER </div>
        </div>

        <div className="md:hidden">
          <button id="menu-toggle" className="text-white" onClick={toggleMenu}>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-8 h-8"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* เมนูเนื้อหา */}
        <ul className="hidden md:flex space-x-14">
          <li className="relative group">
            <button
              className="text-white focus:outline-none px-4 py-2 rounded hover:bg-black hover:text-orange-500 transition duration-300"
              onClick={() => handleLinkClick("/")}
            >
              หน้าหลัก
            </button>
          </li>
          <li className="relative group">
            <button
              className="text-white focus:outline-none px-4 py-2 rounded hover:bg-black hover:text-orange-500 transition duration-300"
              onClick={() => handleLinkClick("/index")}
            >
              เกี่ยวกับ
            </button>
          </li>
          <li className="relative group">
            <button
              className="text-white focus:outline-none px-4 py-2 rounded hover:bg-black hover:text-orange-500 transition duration-300"
              onClick={() => handleLinkClick("/organization")}
            >
              โครงสร้างองค์กร
            </button>
          </li>
          <li className="relative group">
            <button
              className="text-white focus:outline-none px-4 py-2 rounded hover:bg-black hover:text-orange-500 transition duration-300"
              onClick={() => handleLinkClick("/customer")}
            >
              บริการ
            </button>
          </li>
          <li className="relative group">
            <button
              className="text-white focus:outline-none px-4 py-2 rounded hover:bg-black hover:text-orange-500 transition duration-300"
              onClick={() => handleLinkClick("/project")}
            >
              โครงการ
            </button>
          </li>
          <li>
            <button
              className="text-orange-600 bg-white px-4 py-2 rounded-full hover:bg-black hover:text-orange-500 transition duration-300 transform hover:scale-105 focus:outline-none"
              onClick={() => handleLinkClick("/contact")}
            >
              ช่องทางการติดต่อ
            </button>
          </li>
        </ul>
      </div>

      {/* เมนูมือถือ */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-orange-900 bg-opacity-95 flex flex-col justify-center items-center z-50">
          {/* ส่วนหัวที่แสดงตรงกลางบนสุด */}
          <div
            className="mb-8 text-white text-center font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-800 hover:to-black transition duration-500"
            onClick={() => handleLinkClick("/")}
          >
            <div className="text-5xl lg:text-6xl">B.N.</div>
            <div className="text-lg lg:text-xl mt-1">SOLAR POWER</div>
          </div>

          {/* รายการเมนู */}
          <ul className="space-y-6">
            <li>
              <button
                onClick={() => handleLinkClick("/")}
                className="text-white text-2xl focus:outline-none px-4 py-2 rounded hover:bg-black hover:text-orange-500 transition duration-300"
              >
                หน้าหลัก
              </button>
            </li>
            <li>
              <button
                className="text-white text-2xl focus:outline-none px-4 py-2 rounded hover:bg-black hover:text-orange-500 transition duration-300"
                onClick={() => handleLinkClick("/index")}
              >
                เกี่ยวกับ
              </button>
            </li>
            <li>
              <button
                className="text-white text-2xl focus:outline-none px-4 py-2 rounded hover:bg-black hover:text-orange-500 transition duration-300"
                onClick={() => handleLinkClick("/customer")}
              >
                บริการ
              </button>
            </li>
            <li>
              <button
                className="text-white text-2xl focus:outline-none px-4 py-2 rounded hover:bg-black hover:text-orange-500 transition duration-300"
                onClick={() => handleLinkClick("/organization")}
              >
                โครงสร้างองค์กร
              </button>
            </li>
            <li>
              <button
                className="text-white text-2xl focus:outline-none px-4 py-2 rounded hover:bg-black hover:text-orange-500 transition duration-300"
                onClick={() => handleLinkClick("/project")}
              >
                โครงการ
              </button>
            </li>
            <li>
              <button
                className="text-orange-600 text-2xl bg-white px-6 py-3 rounded-full hover:bg-black hover:text-orange-500 transition duration-300 transform hover:scale-105 focus:outline-none"
                onClick={() => handleLinkClick("/contact")}
              >
                ช่องทางการติดต่อ
              </button>
            </li>
          </ul>

          {/* ปุ่มปิดเมนู */}
          <button
            className="mt-10 px-8 py-4 bg-orange-500 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-black hover:text-orange-600 transition duration-300"
            onClick={toggleMenu}
          >
            ปิดเมนู
          </button>
        </div>
      )}
    </nav>
  );
}

export default Nav;
