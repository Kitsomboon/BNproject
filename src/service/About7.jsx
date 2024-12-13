

function About7() {
    return (
      <div className=" flex justify-center items-center bg-gray-100 py-20">
        <div className="container flex items-center bg-green-500 rounded-lg p-4 shadow-md w-[500px] h-[100px]">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-4 rounded-lg margin-right-[20px]">
            <img
              src="https://via.placeholder.com/64" // Replace this with your image source
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-white text-lg font-semibold">Say Hi</span>
        </div>
      </div>
    );
  }
  
  export default About7;