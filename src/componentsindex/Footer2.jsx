import { FaFacebook, FaInstagram, FaYoutube, FaLine, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function Footer2() {
  return (
    <footer className="bg-black py-8">
      <h2 className="text-3xl font-semibold text-white  text-center py-2">สนใจสอบถาม</h2>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        
        {/* Social Media Icons */}
        <div className="flex space-x-6 text-white ho">
          <a className='hover:text-blue-500' href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></a>
          <a className='hover:text-pink-500' href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
          <a className='hover:text-red-500' href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube size={24} /></a>
          <a className='hover:text-green-500' href="https://line.me" target="_blank" rel="noopener noreferrer"><FaLine size={24} /></a>
        </div>
        
        {/* Contact Information with vertical borders */}
        <div className="text-white text-center md:text-left space-y-2 border-l border-r border-gray-300 px-8 md:px-20 lg:px-60">
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <FaPhoneAlt />
            <span>061 798 2552</span>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <FaPhoneAlt />
            <span>097 949 0884</span>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <FaLine />
            <span>@</span>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <FaEnvelope />
            <span>bnsolarpower@gmail.com</span>
          </div>
        </div>
        
        {/* Address */}
        <div className="text-white text-center md:text-right">
          <p>บริษัท บี.เอ็น. โซล่า เพาเวอร์ จำกัด (สำนักงานใหญ่)</p>
          <p>เลขที่399/101 ม.10 ต.หนองหาร อ.สันทราย จ.เชียงใหม่ 50290</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer2;
