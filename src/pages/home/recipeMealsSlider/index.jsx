import Slider from "react-slick";
import { mealTypeData } from "../../../data";
import { useNavigate } from "react-router-dom";

const RecipeMealsSlider = () => {
  const navigate = useNavigate();

  const settigns = {
    dots: false,
    Infinity: true,
    speed: 500,
    slidesToShow: 4,
    initialSlide: 1,
    draggable: false,
    className: "text-center px-20",
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
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          className: "px-5",
        },
      },
    ],
  };

  const handleClick = (item) => {
    navigate(`/filteredFoods/${item.type}`, { state: item });
  };

  return (
    <div className="w-full mx-auto my-5 xl:w-[70%] recipe-slider">
      <Slider {...settigns}>
        {mealTypeData.map((item) => (
          <div
            key={item.type}
            className="relative !size-[180px] lg:!size-[250px] rounded-full overflow-hidden left-1/4 md:left-0"
            onClick={() => handleClick(item)}
          >
            <div>
              <img
                src={item.image}
                alt={item.type}
                className="size-full object-cover"
              />
            </div>

            <div className="bg-white size-[80px] lg:size-[110px] overflow-hidden rounded-full absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
              <h1 className="font-barlow uppercase">{item.type}</h1>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RecipeMealsSlider;
