function About2() {
  return (
    <section className="bg-gray-200 py-16 ">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-semibold text-gray-800 mb-8">
          ติดต่อสอบถามรายละเอียด
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {" "}
          <div className="text-gray-700 md:w-1/2">
            <p className="font-bold text-lg text-orange-800">
              บริษัท บี.เอ็ม. โซล่าร์ เพาเวอร์ จำกัด
            </p>
            <p className="mt-2">
              เลขที่399/101 ม.10 ต.หนองหาร อ.สันทราย จ.เชียงใหม่ 50290
            </p>

            <div className="mt-6">
              <p className="font-bold text-orange-800">อีเมล</p>
              <p>bnsolarpower@gmail.com</p>
            </div>

            <div className="flex flex-col md:flex-row justify-between mt-6">
              <div>
                <p className="font-bold text-orange-800">เวลาทำการ</p>
                <p>จันทร์ – เสาร์</p>
                <p>เวลา 08:00 น. ถึง 17:00 น.</p>
              </div>
            </div>

            <div className="mt-6 md:mt-0">
              <p className="font-bold text-orange-800 mt-6">เบอร์โทรศัพท์</p>
              <p>061 798 2552</p>
              <p>097 949 0884</p>
            </div>
          </div>
          {/* กล่องฝ่ายบริการลูกค้า */}
          <div className="text-gray-700 md:w-1/2">
            {" "}
            {/* จัดให้อยู่ด้านขวา */}
            <p className="font-bold  text-orange-600 text-3xl">
              ฝ่ายบริการลูกค้า
            </p>
            <div className="mt-6 md:mt-0">
              <p className="font-bold text-orange-600 mt-6 text-2xl">นาย</p>
              <p>BN@SOLAR.com</p>
              <p>000 000 0000</p>
            </div>
            <div className="mt-6 md:mt-0">
              <p className="font-bold text-orange-600 mt-6 text-2xl">นาง</p>
              <p>BN@SOLAR.com</p>
              <p>000 000 0000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About2;
