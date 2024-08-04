import { FaHome, FaDollarSign, FaHeadset } from "react-icons/fa";
import FeatureItem from "./FeatureItem";

const features = [
  {
    icon: <FaHome size={48} />,
    title: "Wide Range of Properties",
    description:
      "We offer a variety of properties to suit every need and budget.",
  },
  {
    icon: <FaDollarSign size={48} />,
    title: "Affordable Prices",
    description:
      "Our rental properties are priced competitively to provide you with the best value.",
  },
  {
    icon: <FaHeadset size={48} />,
    title: "24/7 Customer Support",
    description:
      "Our dedicated support team is available around the clock to assist you.",
  },
];

const Features = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureItem
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
