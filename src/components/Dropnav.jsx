function Dropnav() {
    return (
      <div className="w-full bg-[#16171f] py-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-8 md:px-16" style={{ color: "white" }}>
          {/* Text Section */}
          <h2 className="text-3xl font-bold tracking-wide text-center md:text-left mb-4 md:mb-0">
          Join Us on a Project
          </h2>
  
          {/* Button Section */}
          <button
            onClick={() => {
              window.location.href = "/contact"; // Redirect to the contact page
            }}
            className="bg-white text-[#d1543c] px-6 py-3 font-semibold rounded-full shadow-md hover:bg-[#d1543c] hover:text-white transition duration-300"
          >
            Contact Us Now
          </button>
        </div>
      </div>
    );
  }
  
  export default Dropnav;
  