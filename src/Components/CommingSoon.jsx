import { FaPlane } from "react-icons/fa";
import { Link } from "react-router";

const ComingSoon = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Fog Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-200 via-transparent to-transparent opacity-30"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-md w-full p-6 bg-white shadow-2xl rounded-lg text-center space-y-6">
        {/* Rocket Animation */}
        <div className="relative flex justify-center items-end mb-6 h-2 "></div>

        <h1 className="text-3xl font-bold  mb-4 bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text">
          Updates Coming Soon!
        </h1>
        <p className="text-base text-gray-700 mb-4">
          We're working hard on this feature. Stay tuned for updates!
        </p>
        <p className="text-sm text-gray-500 mb-6">
          Our team is crafting something special just for you. Thank you for
          your patience!
        </p>
        <Link
          to="/"
          className="inline-block bg-gradient-to-r from-blue-500 to-teal-500 text-white py-2 px-4 rounded-lg font-semibold hover:opacity-90 transition duration-300"
        >
          Back to Home
        </Link>
      </div>

      {/* Tailwind CSS for Rocket Animation */}
      <style>
        {`
          .rocket-icon {
            width: 60px;
            height: 60px;
            color: #1f2937;
          }

          .rocket-flame {
            fill: #f87171;
            animation: flameAnimation 0.3s infinite ease-in-out;
          }

          .animate-rocket {
            animation: rocketMove 2s ease-in-out infinite;
          }

          @keyframes rocketMove {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-50px);
            }
            100% {
              transform: translateY(0);
            }
          }

          @keyframes flameAnimation {
            0% {
              transform: scaleY(1);
              opacity: 1;
            }
            50% {
              transform: scaleY(1.5);
              opacity: 0.6;
            }
            100% {
              transform: scaleY(1);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ComingSoon;
