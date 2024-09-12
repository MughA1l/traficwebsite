import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const services = [
  {
    Image: "/assets/ExpertiseImg/ph_code-bold.png",
    title: "Web Development",
    description: "Emerald Data Solutions is revolutionizing the way schools and universities manage their facilities. Our intuitive maintenance...",
    width: 64, // specify the width for the image
    height: 64, // specify the height for the image
  },
  {
    Image: "/assets/ExpertiseImg/fluent_design-ideas-24-regular.png",
    title: "Product Design",
    description: "Emerald Data Solutions is revolutionizing the way schools and universities manage their facilities. Our intuitive maintenance...",
    width: 64,
    height: 64,
  },
  {
    Image: "/assets/ExpertiseImg/hugeicons_vision.png",
    title: "Computer Vision",
    description: "Emerald Data Solutions is revolutionizing the way schools and universities manage their facilities. Our intuitive maintenance...",
    width: 64,
    height: 64,
  },
  {
    Image: "/assets/ExpertiseImg/material-symbols_automation-outline.png",
    title: "AI Automation",
    description: "Emerald Data Solutions is revolutionizing the way schools and universities manage their facilities. Our intuitive maintenance...",
    width: 64,
    height: 64,
  },
];

export default function ExpertiseSection() {
  return (
    <section
      className="text-white py-16 px-4 md:px-8 mt-5"
      style={{
        backgroundColor: "rgb(255,255,255)",
        backgroundImage:
          "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0,36,34,1) 0%, rgba(0,0,0,1) 100%)",
      }}
    >
      <div className="max-w-9xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-gray-400 mb-12">
          Your Idea, Our Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 rounded-lg p-6 flex flex-col"
              style={{
                borderRadius: "28px",
              }}
            >
              <div className="mb-4">
                <Image
                  src={service.Image}
                  alt={service.title}
                  width={service.width} // use the width defined in the service object
                  height={service.height} // use the height defined in the service object
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm flex-grow mb-4">{service.description}</p>
              <a
                href="#"
                className="flex items-center text-sm font-medium"
                style={{
                  color: "#0E92AE",
                }}
              >
                Explore More
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
