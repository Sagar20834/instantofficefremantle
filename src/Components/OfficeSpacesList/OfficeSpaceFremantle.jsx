import React from "react";
import of_1 from "../../assets/IMG_6811.jpeg";
import of_2 from "../../assets/IMG_6813.jpg";
import of_3 from "../../assets/IMG_6812.jpg";
import of_4 from "../../assets/4.jpg";
import of_5 from "../../assets/5.jpg";
import of_6 from "../../assets/6.jpg";
import of_7 from "../../assets/7.jpg";
import of_8 from "../../assets/8.jpg";
import of_9 from "../../assets/9.jpg";
import of_10 from "../../assets/10.jpg";
import { Link } from "react-router-dom";
const OfficeSpaceFremantle = () => {
  return (
    <div className="mt-3">
      {/* Image Album */}
      {/* Image Album */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Large main image */}
        <div className="md:row-span-2">
          <img
            src={of_1}
            alt="Office main"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Right-side image grid */}
        <div className="grid grid-cols-2 gap-3">
          <img
            src={of_2}
            alt="Office interior"
            className="w-full h-56 object-cover rounded-xl"
          />
          <img
            src={of_3}
            alt="Workspace"
            className="w-full h-56 object-cover rounded-xl"
          />
          <img
            src={of_4}
            alt="Meeting room"
            className="w-full h-56 object-cover rounded-xl"
          />
          <img
            src={of_5}
            alt="Breakout area"
            className="w-full h-56 object-cover rounded-xl"
          />
        </div>

        {/* Optional 6th image */}
        <div className="md:col-span-2">
          <img
            src={of_6}
            alt="Building exterior"
            className="w-full h-96 object-cover rounded-xl"
          />
        </div>
      </section>

      <div className="max-w-5xl mx-auto p-6 space-y-8 font-sans text-gray-800">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold">185 High Street, Fremantle</h1>
          <p className="text-xl text-gray-600 mt-2">
            Office Space Available in the Heart of Fremantle
          </p>
        </header>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Quick Quote
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition">
            Book a Viewing
          </button>
        </div>

        {/* Pricing & Intro */}
        <section className="bg-gray-100 p-6 rounded-xl shadow">
          <p className="text-2xl font-semibold text-gray-900">
            Serviced Offices — from $1,000 per person / month
          </p>
          <p className="mt-3 text-gray-700">
            Fully furnished, versatile office space ready for occupancy with
            flexible terms tailored to your business needs.
          </p>
        </section>

        {/* Benefits */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">
            5 Reasons to Choose This Workspace
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Private Workspace</li>
            <li>Services Included</li>
            <li>Flexible Terms</li>
            <li>Fixed Cost</li>
            <li>Fast Move-In</li>
          </ul>
        </section>

        {/* Details & Facilities */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Workspace Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Workspace Overview</h3>
            <p className="text-gray-700">
              Air-conditioned office suites in central Fremantle, designed for
              small teams and professionals. Offices are fully furnished with
              options to move in immediately.
            </p>
            <ul className="space-y-2">
              <li className="font-medium">Comfort & Facilities:</li>
              <li>Breakout / Lounge Space</li>
              <li>Kitchen</li>
              <li>Air-conditioning</li>
              <li>On-site Café / Restaurant</li>
              <li>Beverages Available</li>
            </ul>
          </div>

          {/* Transport/Location Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Transport & Location</h3>
            <ul className="text-gray-700 space-y-1">
              <li>Parking Available</li>
              <li>Bike Racks</li>
              <li>Close to Major Transport Links</li>
            </ul>
            <p className="mt-2 text-gray-600">
              Located within walking distance of Fremantle train and bus
              stations, major banks, cafés, restaurants, and local attractions
              including Fremantle Markets and Fremantle Prison.
            </p>
          </div>
        </section>

        {/* Map Placeholder */}
        <div className="mt-8">
          <h4 className="text-2xl font-semibold text-gray-700 mb-2 flex justify-center items-center ">
            Our Location
          </h4>
          <iframe
            title="Perth Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.58134566182!2d115.74777401113978!3d-32.05352157386589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32a17b4b045031%3A0x858f2d5e322e728d!2s185%20High%20St%2C%20Fremantle%20WA%206160!5e0!3m2!1sen!2sau!4v1768154040510!5m2!1sen!2sau"
            className="w-full h-72 rounded-md border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <a
            href="https://www.google.com/maps/dir/?api=1&destination=-32.03263%2C115.93613&fbclid=IwY2xjawL0fo9leHRuA2FlbQIxMABicmlkETFpWFl6V1dRMHhWaEUwRmU2AR4Ab3FK_IWDeQSykJFBOsrjAWefE_brukkCgoUjlK4OKpEmFf5prUFN1w0eSA_aem_Lb1h8mAN53CmKxzpuLR-mQ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-[#915926] hover:text-green-700 font-medium"
          >
            View Full Map
          </a>
        </div>

        {/* CTA */}
        <Link to={"/contact-us"} className="text-center  flex justify-center">
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition">
            Request a Quote
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OfficeSpaceFremantle;
