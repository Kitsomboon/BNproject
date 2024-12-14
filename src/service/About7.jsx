import { MdBuild } from "react-icons/md"; // Import the generic service icon

function About7() {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="container flex justify-center items-center bg-[#d1543c] rounded-lg p-4 shadow-md w-[400px] h-[auto] md:w-[1000px] md:h-[auto]">
        <div className="flex items-center">
          <div className="w-14 h-14 md:w-32 md:h-32 rounded-full overflow-hidden mr-6 flex-shrink-0 bg-white flex justify-center items-center">
            <MdBuild className="w-2/3 h-2/3 text-[#d1543c]" /> {/* Generic Service Icon */}
          </div>
          <span className="text-white text-3xl md:text-5xl font-bold">Services</span>
        </div>
      </div>
    </div>
  );
}

export default About7;
