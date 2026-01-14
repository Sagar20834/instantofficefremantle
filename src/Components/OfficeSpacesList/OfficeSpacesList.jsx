import React from "react";
import { Link } from "react-router-dom";

import op1_image from "../../assets/Hallway_NightView.jpg";
import op2_image from "../../assets/GalleryHotelPt2-8.jpeg";
import op3_image from "../../assets/GalleryManjimup.png";
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

const OfficeSpacesList = () => {
  // Mock data for office spaces. In a real app, this would come from an API or state.
  const officeSpaces = [
    {
      id: 1,
      name: "Downtown Co-Working Hub",
      description:
        "A dynamic co-working space located in the city center, designed for startups, freelancers, and remote professionals who thrive in an energetic environment.",
      imageUrl: of_1,
    },
    {
      id: 2,
      name: "Suburban Office Suite",
      description:
        "A peaceful and spacious office suite in a suburban setting, featuring modern amenities and an ideal layout for small teams and growing businesses.",
      imageUrl: of_2,
    },
    {
      id: 3,
      name: "Shared Offices",
      description:
        "Modern shared offices equipped with high-speed internet, smart meeting rooms, and collaborative workspaces to boost productivity and innovation.",
      imageUrl: of_3,
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Our Available Office Spaces
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {officeSpaces.map((space) => (
          <Link
            key={space.id}
            to={`/office-space/${space.id}`} // Adjust the route as needed for your app
            className="block bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200 overflow-hidden"
          >
            <img
              src={space.imageUrl}
              alt={space.name}
              className="w-full h-48 object-cover mb-4 rounded-t-xl"
            />
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              {space.name}
            </h2>
            <p className="text-gray-600">{space.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OfficeSpacesList;
