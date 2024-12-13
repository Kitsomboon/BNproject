

function About7() {
    return (
      <div className=" flex  h-screen bg-gray-100">
        <div className="flex items-center bg-green-500 rounded-lg p-4 shadow-md">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
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