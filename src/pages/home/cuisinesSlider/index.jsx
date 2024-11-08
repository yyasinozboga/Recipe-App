import { useNavigate } from "react-router-dom";
import { cuisinesData } from "../../../data";
import Slider from "react-slick";

const CuisinesSlider = () => {
  const navigate = useNavigate();

  const settings = {
    dots: false,
    Infinity: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    draggable: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleClick = (item) => {
    navigate(`/filteredFoods/${item.type}`, { state: item });
  };

  return (
    <div>
      <Slider {...settings}>
        {cuisinesData.map((item) => (
          <div
            key={item.type}
            className="h-[200px] md:h-[300px] relative"
            onClick={() => handleClick(item)}
          >
            <div className="slider hover:after:bg-transparent after:duration-500">
              <img
                src={item.image}
                alt={item.type}
                className="size-full object-cover"
              />
            </div>

            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-handlee text-3xl text-nowrap">
              {item.type}
            </h1>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CuisinesSlider;
