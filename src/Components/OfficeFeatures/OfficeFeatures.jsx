import { FaStar } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    title: "Helping you find your ideal workspace",
    description:
      "We help you discover the perfect office space tailored to your business needs and long-term goals. By listening carefully, we search the entire market to find the right fit for you.",
  },
  {
    title: "Access to the entire market",
    description:
      "Explore every type of workspace available, from coworking hubs to private offices. Our reach is global, while our expertise remains local.",
  },
  {
    title: "The best deal, negotiated for you",
    description:
      "Get the most competitive terms for your business. Our experts negotiate on your behalf to ensure maximum value and flexibility.",
  },
  {
    title: "Completely free of charge",
    description:
      "Our service is 100% free, unbiased, and without obligation—helping you save time, money, and effort.",
  },
];

const FeatureCard = ({ title, description, delay }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`
        bg-white p-6 rounded-lg border 
        transform transition-all duration-500 ease-out border-pink-200 shadow-xl shadow-blue-100
        hover:scale-105 hover:shadow-lg hover:border-green-400
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      <div className="flex items-start gap-4">
        <FaStar className="text-green-500 text-2xl mt-1" />
        <div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

const OfficeFeatures = () => {
  return (
    <>
      <h1 className="flex justify-center items-center text-3xl text-violet-800">
        Our Features
      </h1>
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((item, index) => (
            <FeatureCard
              key={index}
              title={item.title}
              description={item.description}
              delay={index * 150}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default OfficeFeatures;
