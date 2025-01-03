import { Link } from "react-router-dom";

function Hero11() {
  return (
    <div className="container flex flex-wrap justify-center items-center mx-auto py-8 gap-6">
      {/* Box 1 */}
      <Link
        to="/PowerCalculator"
        className="w-[300px] h-[300px] rounded-3xl bg-[#d1543c] flex justify-center items-center text-white text-center text-2xl font-bold hover:bg-[#b34332] transition-colors duration-300"
      >
        คำนวณหาขนาดแผงโซลาร์
      </Link>

      {/* Box 2 */}
      <Link
        to="/electricity-usage"
        className="w-[300px] h-[300px] rounded-3xl bg-[#d1543c] flex justify-center items-center text-white text-center text-2xl font-bold hover:bg-[#b34332] transition-colors duration-300"
      >
        คำนวณค่าใช้งานไฟฟ้า
      </Link>

      {/* Box 3 */}
      <Link
        to="/panel-cost"
        className="w-[300px] h-[300px] rounded-3xl bg-[#d1543c] flex justify-center items-center text-white text-center text-2xl font-bold hover:bg-[#b34332] transition-colors duration-300"
      >
        คำนวณหาค่าไฟฟ้าต่อแผง
      </Link>

      {/* Box 4 */}
      <Link
        to="/required-energy"
        className="w-[300px] h-[300px] rounded-3xl bg-[#d1543c] flex justify-center items-center text-white text-center text-2xl font-bold hover:bg-[#b34332] transition-colors duration-300"
      >
        ค่าที่ต้องใช้
      </Link>
    </div>
  );
}

export default Hero11;
