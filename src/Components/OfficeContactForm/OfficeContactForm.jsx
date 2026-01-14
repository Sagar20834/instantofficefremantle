const OfficeContactForm = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-5xl bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow p-8">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Book Your Working Space
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="input-style"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input-style"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Phone / WhatsApp
            </label>
            <input
              type="tel"
              placeholder="Enter phone number"
              className="input-style"
            />
          </div>

          {/* Company */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Company Name
            </label>
            <input
              type="text"
              placeholder="Company (optional)"
              className="input-style"
            />
          </div>

          {/* Location */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Preferred Location
            </label>
            <input
              type="text"
              placeholder="City or area"
              className="input-style"
            />
          </div>

          {/* Office Type */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Office Type
            </label>
            <select className="input-style">
              <option>Private Office</option>
              <option>Coworking Space</option>
              <option>Virtual Office</option>
            </select>
          </div>

          {/* Seats */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Number of Seats
            </label>
            <input type="number" placeholder="e.g. 5" className="input-style" />
          </div>

          {/* Move-in Date */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Move-in Date
            </label>
            <input type="date" className="input-style" />
          </div>

          {/* Duration */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Rental Duration
            </label>
            <select className="input-style">
              <option>Daily</option>
              <option>Monthly</option>
              <option>Yearly</option>
            </select>
          </div>

          {/* Budget */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Budget Range
            </label>
            <select className="input-style">
              <option>Below 20,000</option>
              <option>20,000 - 50,000</option>
              <option>50,000+</option>
            </select>
          </div>

          {/* Amenities */}
          <div className="md:col-span-2">
            <label className="text-sm font-medium text-gray-600 mb-2 block">
              Required Amenities
            </label>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              {[
                "Internet",
                "Parking",
                "Power Backup",
                "Meeting Room",
                "24/7 Access",
              ].map((item) => (
                <label key={item} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 text-green-500 focus:ring-green-400"
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label className="text-sm font-medium text-gray-600">
              Additional Requirements
            </label>
            <textarea
              rows="4"
              placeholder="Tell us anything specific you need"
              className="input-style resize-none"
            />
          </div>

          {/* Terms */}
          <div className="md:col-span-2 flex items-center gap-2 text-sm text-gray-600">
            <input type="checkbox" className="accent-green-500" />
            <span>I agree to the terms & privacy policy</span>
          </div>

          {/* Submit */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium transition shadow hover:shadow-lg"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default OfficeContactForm;
