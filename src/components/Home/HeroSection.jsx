import hero from "../../assets/hero.png";

const HeroSection = () => {
  return (
    <section className="w-full bg-[#DEDCF1]">
      {/* Container */}
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div
          className="
            flex flex-col md:flex-row items-center justify-between
            gap-8 md:gap-12
            py-10 md:py-14 xl:py-20
            min-h-[420px] md:min-h-[520px] xl:min-h-[620px]
            font-primary
          "
        >
          {/* Left content */}
          <div className="w-full max-w-xl space-y-4 md:space-y-6 text-center md:text-left">
            <h1
              className="
                text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl
                leading-snug md:leading-[64px]
                font-semibold text-[#060048]
              "
            >
              A1 Protection + Smart
              Shopping for the
              Caribbean
              {/* AI Protection + Smart <br className="hidden md:block" /> Shopping for the Caribbean */}
            </h1>

            <p
              className="
                text-sm sm:text-base md:text-lg
                leading-6 md:leading-7
                text-[#060048] font-medium
              "
            >
              StackBot combines A1 systems with
              intelligent shopping solutions. Protect your assets and shop
              smarter in Republic.
            </p>
            {/* Search Bar */}
            <div className="flex flex-row items-center w-full max-w-md mx-auto md:mx-0 bg-white border border-gray-300 rounded-xl h-[54px] overflow-hidden shadow-md">
              <input
                type="text"
                placeholder="Search"
                className="
                   flex-1 h-full px-5 text-gray-700 placeholder-gray-400
                   bg-transparent outline-none
                   w-[70%]
                    "
              />
              <button
                className="
                  flex items-center justify-center w-[30%] h-[35px] mr-2 px-6 text-base font-semibold text-white
                  bg-indigo-600 
                 hover:bg-indigo-700 transition-colors duration-200
                  "
              >
                Search
              </button>
            </div>
          </div>

          {/* Right image */}
          <div className="w-full md:w-auto flex justify-center md:justify-end mt-6 md:mt-0">
            <img
              src={hero}
              alt="StackBot hero"
              className="
                w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl
                h-auto object-contain
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
