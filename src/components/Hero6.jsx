import { useState, useEffect } from 'react';
import image3 from '../assets/k.png';

function Hero6() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      className="hero h-[900px] hlg:h-[840px] bg-orange-500 bg-center lg:bg-cover bg-no-repeat bg-fixed relative z-10 overflow-hidden"
      style={{ position: 'relative', borderBottomLeftRadius: window.innerWidth >= 1024 ? "250px" : "100px" }}
    >
      <img 
        src={image3} 
        alt="Hero Image" 
        className="absolute top-0 left-0 w-full h-full object-cover" 
        style={{ 
          borderBottomLeftRadius: window.innerWidth >= 1024 ? "0px" : "0px",
          transform: `translateY(${offsetY * 0.2}px)`,
          transition: 'transform 0.1s ease-out',
        }} 
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-end">
        <div className="hero__text w-full lg:w-2/3 p-10 bg-white bg-opacity-100 rounded-lg shadow-lg text-right">
          <h1 className="text-6xl font-semibold text-gray-800">บริษัท บี.เอ็น. โซล่าร์ เพาเวอร์ จำกัด</h1>
          <p className="mt-4 text-gray-700">B.N. Solar Power ยินดีให้บริการเกี่ยวกับการติดตั้ง และ การบริการ ออนไลน์ เรื่องพลังงานแสงอาทิตย์</p>
        </div>
      </div>
    </section>
  );
}

Hero6.propTypes = {};

export default Hero6;
