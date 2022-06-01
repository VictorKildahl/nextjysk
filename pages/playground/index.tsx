export default function Playground() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="h-36 w-36 bg-white rounded-xl shadow-xl transform rotate-12 flex justify-between p-4 hover:scale-150 transition duration-700 hover:rotate-45 hover:shadow-2xl">
          <div className="space-y-4 pt-1">
            <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
            <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
            <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
          </div>
          <div className="space-y-4 pt-1">
            <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
            <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
            <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
          </div>
          <div className="space-y-4 pt-1">
            <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
            <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
            <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
          </div>
          {/* <img
          className="block h-12 mt-4 w-auto transform hover:scale-150 transition duration-700 hover:rotate-45 hover:shadow-2xl"
          src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Jysk_logo.svg"
          alt="JYSK"
        /> */}
        </div>
      </div>

      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-4 rounded-md">
          <div className="w-64 h-44 bg-gray-200 animate-pulse"></div>
          <div className="mt-8 h-32 w-full space-y-3">
            <div className="w-20 h-6 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="w-full h-4 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="w-full h-4 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="w-1/2 h-4 bg-gray-200 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      <div className="flex bg-gray-100 justify-center items-center h-screen">
        <div className="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gray-200 rounded-full border-2 border-white"></div>
        </div>
      </div>
    </>
  );
}
