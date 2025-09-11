import React from "react";

export default function AboutStackBot() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#1a174d] mt-4 mb-2">
        About StackBot
      </h1>
      <p className="text-center font-poppins font-medium text-sm sm:text-base leading-[18.73px] tracking-[-0.27px] text-[#060048] mb-12 mt-10">
        AI Protection + Economic Empowerment
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-16 w-full max-w-6xl">
        {/* Text Section */}
        <div className="flex-1 flex flex-col items-start">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-black">
            Our Mission
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed">
            StackBot Combines Cutting-Edge AI Security Technology
            With Smart Commerce Solutions To Empower
            Communities In The Caribbean. We Believe In Protection
            Through Innovation And Economic Growth
            Through Technology.
          </p>
        </div>

        {/* Image Section */}
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
          alt="About StackBot"
          className="rounded-xl w-full sm:w-[75%] md:w-[500px] h-auto object-cover shadow-md"
        />
      </div>
    </div>
  );
}
