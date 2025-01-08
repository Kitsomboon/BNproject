import image1 from "/src/assets/B.Nlo.jpg";

function Footer3() {
  return (
    <footer className="bg-[#ffffff] py-8 px-4 w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Left Section */}
        <div className="mb-6 md:mb-0 md:w-1/3 flex items-center md:justify-start">
          <img
            src={image1}
            alt="Company Logo"
            className="w-[200px] h-auto object-contain mr-4"
          />
        </div>

        {/* Middle Section */}
        <div className="mb-6 md:mb-0">
          <h4 className="text-lg font-semibold text-[#16171f] mb-4 border border-[#d1543c] rounded-full px-4 py-2 inline-block">
            Online Contact Channels
          </h4>
          <ul className="space-y-4">
            <li className="flex items-center space-x-2">
              <i className="lab la-line text-[#06c755] text-2xl  "></i>
              <a href="#" className="text-[#] trans">
                @B.N.solar
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <i className="lab la-facebook text-[#1877F2] text-2xl "></i>
              <a href="#" className="text-[#] ">
                B.N. SOLAR POWAR 
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section - Information */}
        <div className="mb-6 md:mb-0">
          <h4 className="text-lg font-semibold text-[#16171f] mb-4 border border-[#d1543c] rounded-full px-4 py-2 inline-block">
            Information
          </h4>
          <ul className="space-y-2">
            <li className="text-[#16171f]">061 798 2552</li>
            <li className="text-#16171f]">097 949 0884</li>
            <li>
              
              <a
                href="mailto:bnsolarpower@gmail.com"
                className="text-[#16171f]"
              >
                Gmail: bnsolarpower@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section - Location */}
        <div>
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
