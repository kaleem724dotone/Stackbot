import company1 from "../assets/company1.png";
import company2 from "../assets/company2.png";
import company3 from "../assets/company3.png";
import company4 from "../assets/company4.png";
import { Carousel } from "antd";
import "antd/dist/reset.css"; // make sure styles are imported
// import "./CompanySlider.css"; 

const logos = [
company1,
company2,
company3,
company4,
company1,
company2,
company3,
company4,
];

<style>
  {`
  .company-carousel .slick-slide {
  display: flex !important;
  justify-content: center;
  align-items: center;
}

  `}
</style>

const CompanySlider = () => {
  return (

<section className="bg-white  flex flex-col justify-evenly h-[340px]">
  <div className="flex mx-12 font-poppins font-semibold text-[#0B0C48]">
  <h2 className="text-[30px] leading-[24px] tracking-[0.38px] md:text-[36px] md:leading-[28px] md:tracking-[0.5px]">
    Trusted by happy customers worldwide.
  </h2>
</div>



  
  <div className="w-full">
    <Carousel
      autoplay
      dots={false}
      slidesToShow={5}
      infinite
      speed={1000}
      className="company-carousel"
      responsive={[
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          },
        },
      ]}
    >
      {logos.map((logo, index) => (
        <div key={index} className="flex items-center justify-center px-[1.5%]">
          <img src={logo} alt={`logo-${index}`} className="h-10 md:h-12 object-contain" />
        </div>
      ))}
    </Carousel>
  </div>
</section>

  );
};

export default CompanySlider;




