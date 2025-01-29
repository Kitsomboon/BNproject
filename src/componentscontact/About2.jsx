import image1 from "../assets/map.png";
import image2 from "../assets/qrmap.png";

function About2() {
  return (
    <section className=" py-16 ">
      <div className="container mx-auto px-8">
        <h2 className="text-5xl font-semibold text[#16171f] mb-8">
          ติดต่อสอบถามรายละเอียด
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* ข้อมูลบริษัท */}
          <div className="text-gray-700 md:w-1/2">
            <p className="font-bold text-xl text-[#d1543c]">
              บริษัท บี.เอ็ม. โซล่าร์ เพาเวอร์ จำกัด
            </p>
            <p className="mt-2">
              เลขที่ 399/101 ม.10 ต.หนองหาร อ.สันทราย จ.เชียงใหม่ 50290
            </p>

            <div className="mt-6">
              <p className="font-bold text-xl  text-[#d1543c]">อีเมล</p>
              <p>bnsolarpower@gmail.com</p>
            </div>

            <div className="flex flex-col md:flex-row justify-between mt-6">
              <div>
                <p className="font-bold text-xl text-[#d1543c]">เวลาทำการ</p>
                <p>จันทร์ – เสาร์</p>
                <p>เวลา 08:00 น. ถึง 17:00 น.</p>
              </div>
            </div>

            <div className="mt-6 md:mt-0">
              <p className="font-bold text-xl text-[#d1543c] mt-6">เบอร์โทรศัพท์</p>
              <p>061 798 2552</p>
              <p>097 949 0884</p>
            </div>
          </div>

          {/* กล่องแสดงภาพแผนที่และ QR Code */}
          <div className="text-gray-700 md:w-1/2">
            <img
              src={image1}
              alt="แผนที่บริษัท"
              className="w-full h-auto rounded-lg mb-4"
            />
            <img
              src={image2}
              alt="QR Code สำหรับแผนที่"
              className="w-[300px] h-auto rounded-lg relative left-1/2 transform -translate-x-1/2"
              
            />
          
          </div>
        </div>
      </div>
    </section>
  );
}

export default About2;
