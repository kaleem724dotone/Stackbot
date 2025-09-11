import SB from "../assets/scaleBusiness.png";
import grid from "../assets/grid.png";

const ScaleBusiness = () => {
  return (
    <section
      className="w-full h-auto flex flex-col md:flex-row items-center justify-evenly font-primary py-12 px-4 md:px-20"
      style={{
        backgroundColor: "#DEDCF1",
        backgroundImage: `url(${grid})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-6">
        {/* Left Content */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#060048] leading-tight text-center md:text-left">
          Scale your business <br /> with Affiliator
        </h1>
        <p className="text-[#060048] text-base sm:text-lg font-medium leading-[28px] text-center md:text-left">
          Trackier provides you with one of the most effective SaaS marketing solutions so you can start using automation in lieu of manual tasks. This end-to-end technology will elevate your marketing efforts across both web and mobile platforms.
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <button className="bg-primary text-white font-semibold text-base sm:text-lg w-full px-4 sm:w-[154px] h-[48px] rounded-[5px]">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Image Placeholder */}
      <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img
          src={SB}
          className="w-[90%] sm:w-[75%] md:w-[538px] h-auto object-cover"
          alt="Scale your business"
        />
      </div>
    </section>
  );
};

export default ScaleBusiness;
