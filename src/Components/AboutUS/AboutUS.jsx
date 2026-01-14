import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto my-8 p-4 lg:px-8">
      {/* Welcome Box */}
      <div className="relative bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-6 rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-gradient bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 bg-[length:200%_200%] h-full w-full opacity-50"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 animate-fadeIn">
            Welcome to HamroTyari! A Guide For Your Success !!
          </h1>
          <p className="text-xl lg:text-2xl text-white animate-fadeIn delay-200">
            Your go-to resource for NEC license exam preparation.
          </p>
        </div>
      </div>

      {/* Our Mission */}
      <section className="mb-12 bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-blue-600 mb-4 animate-fadeIn">
          Our Mission
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed animate-fadeIn delay-200">
          Our mission is to{" "}
          <strong className="text-blue-700">
            empower engineering graduates and professionals
          </strong>{" "}
          by providing
          <strong className="text-blue-700">
            comprehensive and accessible resources
          </strong>{" "}
          for their NEC license exam preparation. Whether you're a recent
          graduate or an experienced engineer, our platform is designed to help
          you achieve success in your licensing journey.
        </p>
      </section>

      {/* Who We Are */}
      <section className="mb-12 bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-green-600 mb-4 animate-fadeIn">
          Who We Are
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed animate-fadeIn delay-200">
          We are a{" "}
          <strong className="text-green-700">
            dedicated team of engineers and educators
          </strong>{" "}
          committed to enhancing the quality of engineering practices in Nepal.
          With a deep understanding of the challenges faced by aspiring
          engineers, we have developed this app to offer targeted preparation
          materials, practice exams, and study guides tailored to the NEC
          licensing requirements.
        </p>
      </section>

      {/* Our Vision */}
      <section className="mb-12 bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-teal-600 mb-4 animate-fadeIn">
          Our Vision
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed animate-fadeIn delay-200">
          Our vision is to become the{" "}
          <strong className="text-teal-700">
            leading platform for NEC license preparation
          </strong>{" "}
          in Nepal, fostering a community of{" "}
          <strong className="text-teal-700">
            well-prepared and highly competent engineers
          </strong>{" "}
          who contribute to the nation's development.
        </p>
      </section>

      {/* What We Offer */}
      <section className="mb-12 bg-blue-50 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-blue-700 mb-4 animate-fadeIn">
          What We Offer
        </h2>
        <ul className="list-disc pl-6 text-lg text-gray-700 space-y-4 animate-fadeIn delay-200">
          <li>
            <strong className="text-blue-800">
              Comprehensive Study Materials:
            </strong>{" "}
            Access detailed notes, guides, and textbooks covering all key
            subjects required for the NEC exam.
          </li>
          <li>
            <strong className="text-blue-800">Practice Exams:</strong> Take
            full-length practice exams that mimic the actual NEC licensing exam,
            helping you to gauge your readiness.
          </li>
          <li>
            <strong className="text-blue-800">Progress Tracking:</strong>{" "}
            Monitor your study progress, identify strengths and weaknesses, and
            receive personalized recommendations to improve your performance.
          </li>
          <li>
            <strong className="text-blue-800">Expert Guidance:</strong> Benefit
            from tips and strategies shared by experienced engineers who have
            successfully navigated the NEC licensing process.
          </li>
        </ul>
      </section>

      {/* Our Commitment */}
      <section className="mb-12 bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-red-600 mb-4 animate-fadeIn">
          Our Commitment
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed animate-fadeIn delay-200">
          We are committed to continuously{" "}
          <strong className="text-red-700">
            updating our content and features
          </strong>{" "}
          to meet the evolving needs of our users. Our goal is to ensure that
          every engineering graduate in Nepal has the tools they need to succeed
          in obtaining their NEC license.
        </p>
      </section>

      {/* Closing Remarks */}
      <section className="text-center mb-12">
        <p className="text-lg lg:text-xl text-gray-700 animate-fadeIn">
          Thank you for choosing us as your partner in your professional
          journey. Together, we can build a{" "}
          <strong className="text-gray-600">
            stronger engineering community
          </strong>{" "}
          in Nepal.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
