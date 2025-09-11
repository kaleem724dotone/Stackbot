import React from "react";

// iconType: "tick" | "number"
// imageSide: "left" | "right"
export default function ImageListComp({
  pageHeading = "Candy Shack Marketplace",
  pageSubheading = "AI-powered protection for your peace of mind",
  heading = "Candy Shack Alarm System",
  subheading = "AI-powered protection for your peace of mind",
  features = [],
  image,
  imageAlt = "Candy Shack",
  iconType = "tick",
  imageSide = "left",
  buttonText = "Buy Now",
  onButtonClick,
}) {
  // Helper to render icon
  const renderIcon = (idx) => {
    if (iconType === "tick") {
      return (
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#5046C7] mr-4">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
      );
    }
    // number
    return (
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#5046C7] text-white font-bold mr-4">
        {idx + 1}
      </span>
    );
  };

  // Feature section
  const featureSection = (
    <div className="flex-1 flex flex-col items-start md:pl-16 w-full md:w-[385px]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-[#060048]">
        {heading}
      </h2>
      <ul className="mb-10 space-y-6 w-full">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-xl font-semibold text-[#060048]">
            {renderIcon(idx)}
            {feature}
          </li>
        ))}
      </ul>
      <button
        className="bg-[#5046C7] hover:bg-[#4338ca] text-white text-base sm:text-lg font-semibold px-8 sm:px-12 py-3 rounded-lg transition w-full sm:w-auto"
        onClick={onButtonClick}
      >
        {buttonText}
      </button>
    </div>
  );

  // Image section
  const imageSection = (
    <img
      src={image}
      alt={imageAlt}
      className="rounded-[10px] w-full sm:w-[90%] md:w-[560px] h-auto object-cover shadow-md"
    />
  );

  return (
    <div className="bg-[#f5f7fa] min-h-screen flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#060048] mt-6 mb-2">
        {pageHeading}
      </h1>
      <p className="text-center font-poppins font-medium text-[12.7px] sm:text-base leading-[18.73px] tracking-[-0.27px] text-[#060048] mb-8 mt-10">
        {pageSubheading}
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-6xl">
        {imageSide === "left" ? (
          <>
            {imageSection}
            {featureSection}
          </>
        ) : (
          <>
            {featureSection}
            {imageSection}
          </>
        )}
      </div>
    </div>
  );
}
