function GetinTouch() {
    const handleNavigation = () => {
      window.location.href = "/index"; // โหลดหน้า /index ใหม่ทั้งหมด
    };
  
    return (
      <section className="bg-gray-800 text-white py-16"> 
        <div className="container mx-auto text-center">       
          <h2 className="text-3xl font-semibold ">ยินดีต้อนรับทุกท่าน</h2>       
          <p className='text-lg mt-4'>มาทำความรู้จัก B.N. Solar Power ไปพร้อมกัน </p>
          <button
            onClick={handleNavigation}
            className="bg-blue-500 text-white px-6 py-2 rounded-full mt-8 inline-block hover:bg-blue-600"
          >
            Get in touch
          </button>
        </div>
      </section>
    );
  }
  
  export default GetinTouch;
  