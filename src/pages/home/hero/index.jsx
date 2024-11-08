import { sliderData } from "../../../data";
import Slider from "react-slick";
import Title from "../../../components/title";
import CuisinesSlider from "../cuisinesSlider";

const Hero = () => {
  const settigns = {
    dots: false,
    Infinity: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    pauseOnHover: true,
    arrows: true,
  };

  return (
    <div className="slider-container hero">
      <Slider {...settigns}>
        {sliderData.map((item) => (
          <div
            key={item.id}
            className="relative h-[200px] md:h-[300px] lg:h-[500px] w-full"
          >
            <div className="slider">
              <img
                src={item.image}
                alt={item.title}
                className="size-full object-cover "
              />
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] xl:w-1/2 text-center">
              <h1 className="font-bold text-white md:text-3xl xl:text-5xl">
                {item.title}
              </h1>
              <p className="text-white font-medium text-[15px] md:text-xl xl:text-2xl mt-3">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </Slider>

      <Title subtitle="Choose a Category" title="Recipe Categories" />
      <CuisinesSlider />
    </div>
  );
};

export default Hero;
