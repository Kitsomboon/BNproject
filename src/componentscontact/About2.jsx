

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
          <div className=" md:w-1/2">
          <div className="w-full h-96">
      <iframe
        title="Company Location"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d471.78467192395465!2d98.99918665065952!3d18.919112837901704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sth!2sth!4v1739431991659!5m2!1sth!2sth"
      ></iframe>
    </div>
          
          </div>
        </div>
      </div>
    </section>
  );
}

export default About2;
