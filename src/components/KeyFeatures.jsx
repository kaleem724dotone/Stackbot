import { ShieldCheck, PackageCheck, Repeat } from "lucide-react";
import i1 from "../assets/i1.png";
import i2 from "../assets/i2.png";

const features = [
  {
    title: "AI-Powered Protection",
    description:
      "Our AI algorithms analyze and predict potential threats, providing proactive security for your deliveries.",
    icon: i1,
  },
  {
    title: "Secure Package Handling",
    description:
      "StackBot ensures your packages are handled with utmost care and security, from arrival to your doorstep.",
    icon: i2,
  },
  {
    title: "Smart Reordering",
    description:
      "Effortlessly reorder your favorite items with our intelligent system, saving you time and hassle.",
    icon: i1,
  },
];

const KeyFeatures = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20 font-primary w-full">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-[46px] font-[600] text-[#060048] sm:text-[36px] md:text-[46px]">
          Key Features
        </h2>
        <p className="text-[#060048] text-[18px] font-[500] leading-[28px] mt-4 sm:text-[14px] sm:leading-[20px]">
          Explore the core functionalities that make StackBot the ultimate
          solution for modern deliveries.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl text-center h-[304px] w-full relative flex justify-center items-center mx-auto"
            style={{
              boxShadow: '0px 4px 54px 0px rgba(0, 0, 0, 0.05)',
            }}
          >
            <div className="absolute left-1/2 -translate-x-1/2 top-[-40px]">
              <div className="w-[82px] h-[82px] bg-primary rounded-full flex items-center justify-center shadow-md">
                <img src={feature.icon} className="h-[40px] w-[40px]" />
              </div>
            </div>
            <div className="w-[80%] font-primary">
              <h3 className="text-[#060048] font-[700] text-[24px] sm:text-[20px] md:text-[24px]">
                {feature.title}
              </h3>
              <p className="text-[#060048] text-[16px] font-primary mt-4 leading-[27px] sm:text-[14px] sm:leading-[20px]">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>


    </section>
  );
};

export default KeyFeatures;
