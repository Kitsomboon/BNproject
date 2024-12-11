import image1 from "/src/assets/B.Nlo.jpg";

function Footer3() {
  return (
    <footer className="bg-[#ffffff]   py-8 px-4 w-[auto] h-[300px]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start ">
        {/* Left Section */}
        <div className="mb-6 md:mb-0 md:w-1/3 flex items-center md:justify-start">
          <img src={image1} alt="Logo" className="w-[300px] h-[auto] object-contain  mr-4" />
          
        </div>

        {/* Middle Section */}
        <div className="mb-6 md:mb-0">
          <h4 className="text-lg font-semibold text-teal-700 mb-4">Con</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-teal-500 hover:text-teal-700">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-teal-500 hover:text-teal-700">
                How it works
              </a>
            </li>
            <li>
              <a href="#" className="text-teal-500 hover:text-teal-700">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="text-teal-500 hover:text-teal-700">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h4 className="text-lg font-semibold text-teal-700 mb-4">Information</h4>
          <ul className="space-y-2">
            <li className="text-gray-600">305-240-9671</li>
            <li>
              <a href="mailto:info@company.com" className="text-teal-500 hover:text-teal-700">
                info@company.com
              </a>
            </li>
          </ul>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer3;
