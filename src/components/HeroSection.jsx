import hero from "../assets/hero.png";

const HeroSection = () => {
  return (
    <section className="w-full bg-[#DEDCF1]  border-2 border-red-500">
      {/* width + padding scale up across breakpoints */}
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* layout stacks on mobile, splits on md+ */}
        <div className="
       
          flex flex-col md:flex-row items-center justify-between
          gap-8 md:gap-12
          py-10 md:py-14 xl:py-20
          min-h-[420px] md:min-h-[520px] xl:min-h-[620px]
          font-primary
        ">
          {/* Left */}
          <div className="w-full max-w-xl space-y-4 md:space-y-6 text-center md:text-left">
            <h1 className="
              text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl
              leading-snug md:leading-[64px]
              font-semibold text-[#060048]
            ">
              AI Protection + Smart <br /> Shopping for the Caribbean
            </h1>

            <p className="
              text-sm sm:text-base md:text-lg
              leading-6 md:leading-7
              text-[#060048] font-medium
            ">
              StackBot combines AI systems with
              intelligent shopping solutions. Protect your assets and shop
              smarter in Republic.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button className="
                bg-primary text-white font-semibold
                text-base md:text-[16px]
                h-12 sm:h-[48px]
                w-full sm:w-[154px]
                rounded-md
              ">
                Candy Shack
              </button>

              <button className="
                bg-primary text-white font-semibold
                text-base md:text-[16px]
                h-12 sm:h-[48px]
                w-full sm:w-[154px]
                rounded-md
              ">
                Affiliates
              </button>
            </div>
          </div>

          {/* Right image */}
          <div className="w-full md:w-auto flex justify-center md:justify-end">
            <img
              src={hero}
              alt="StackBot hero"
              className="
                w-full max-w-sm sm:max-w-md md:max-w-lg xl:max-w-xl 2xl:max-w-2xl
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











