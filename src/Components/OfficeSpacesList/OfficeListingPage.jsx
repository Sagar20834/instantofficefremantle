import React from "react";

const OfficeListingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">
            Instant Offices
          </div>
          <nav className="space-x-4">
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Offices
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <img
          src="https://via.placeholder.com/1200x600?text=Office+Image" // Placeholder; replace with actual image URL from the page
          alt="High Street Fremantle Office"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-2">High Street Fremantle</h1>
            <p className="text-xl">
              Available Office Space in Fremantle, Australia
            </p>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Description */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">About This Space</h2>
            <p className="text-gray-700 mb-4">
              Discover flexible office solutions at High Street Fremantle. This
              modern workspace offers a prime location in the heart of
              Fremantle, with easy access to amenities and transport.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Flexible lease terms</li>
              <li>Fully furnished options</li>
              <li>High-speed internet</li>
              <li>Meeting rooms and amenities</li>
            </ul>
            <div className="text-2xl font-bold text-blue-600 mb-4">
              $500/month (approx.)
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Enquire Now
            </button>
          </div>

          {/* Right Column: Images and Map */}
          <div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <img
                src="https://via.placeholder.com/300x200?text=Interior+1"
                alt="Interior"
                className="w-full h-32 object-cover rounded"
              />
              <img
                src="https://via.placeholder.com/300x200?text=Interior+2"
                alt="Interior"
                className="w-full h-32 object-cover rounded"
              />
            </div>
            <div className="bg-gray-200 h-64 rounded flex items-center justify-center">
              <p className="text-gray-500">
                Map Placeholder - Embed Google Maps here
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-blue-50 py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-4">
            Interested? Contact us for more details or to schedule a viewing.
          </p>
          <form className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full mb-4 p-2 border rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full mb-4 p-2 border rounded"
            />
            <textarea
              placeholder="Message"
              className="w-full mb-4 p-2 border rounded"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Instant Offices. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default OfficeListingPage;
