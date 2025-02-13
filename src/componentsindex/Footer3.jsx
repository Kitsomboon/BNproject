import image1 from "/src/assets/B.Nlo.jpg";

function Footer3() {
  return (
    <footer className="bg-[#ffffff] py-8 w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start text-center md:text-left space-y-6 md:space-y-0">
        
        {/* Left Section */}
        <div className="w-full md:w-auto flex flex-col items-center md:items-start">
          <img
            src={image1}
            alt="Company Logo"
            className="w-[200px] h-auto object-contain"
          />
        </div>

        {/* Middle Section - Contact Online */}
        <div className="w-full md:w-auto flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-[#16171f] mb-4 border border-[#d1543c] rounded-full px-4 py-2 inline-block">
            Contact Online
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-2 justify-center md:justify-start">
              <i className="lab la-line text-[#06c755] text-2xl"></i>
              <a href="#" className="text-[#16171f]">@B.N.solar</a>
            </li>
            <li className="flex items-center space-x-2 justify-center md:justify-start">
              <i className="lab la-facebook text-[#1877F2] text-2xl"></i>
              <a href="#" className="text-[#16171f]">B.N. SOLAR POWER</a>
            </li>
          </ul>
        </div>

        {/* Right Section - Information */}
        <div className="w-full md:w-auto flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold text-[#16171f] mb-4 border border-[#d1543c] rounded-full px-4 py-2 inline-block">
            Information
          </h4>
          <ul className="space-y-2">
            <li className="text-[#16171f]">061 798 2552</li>
            <li className="text-[#16171f]">097 949 0884</li>
            <li>
              <a href="mailto:bnsolarpower@gmail.com" className="text-[#16171f]">
                Gmail: bnsolarpower@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section - Location */}
        <div className="w-full md:w-auto flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold text-[#16171f] mb-4 border border-[#d1543c] rounded-full px-4 py-2 inline-block">
            Location
          </h4>
          <p className="text-[#16171f]">
            เลขที่ 399/101 ม.10 ต.หนองหาร อ.สันทราย จ.เชียงใหม่ 50290
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer3;
