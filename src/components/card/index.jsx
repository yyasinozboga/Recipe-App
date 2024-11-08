import { useNavigate } from "react-router-dom";
import { editName } from "../../utils/helper";
import { FiArrowRight } from "react-icons/fi";

const Card = ({ item }) => {
  const recipe = { ...item.recipe, ...item._links };
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/foodDetail/${recipe.label}`, { state: item._links.self.href });
  };

  return (
    <div className="flex flex-col gap-2 rounded-md overflow-hidden border-[1px] border-gray/30 shadow-md relative h-[235px] md:h-[260px] xl:h-[370px]">
      <figure className="w-full h-[100px] xl:h-[180px] shadow-md">
        <img
          src={recipe.image}
          alt={recipe.label}
          className="size-full object-cover"
        />
      </figure>

      <div className="px-3">
        <h1 className="font-handlee text-sm md:text-[16px] xl:text-lg">
          {recipe.label.length > 15
            ? recipe.label.slice(0, 15) + "..."
            : recipe.label}
        </h1>

        <div className="flex justify-between items-center flex-wrap mt-2 gap-2">
          <span className="font-handlee text-[12px] xl:text-lg md:text-[17px]">
            CUISINE: {editName(recipe.cuisineType[0])}
          </span>

          <span className="py-1 px-2 rounded-md bg-green text-white font-barlow text-[12px] md:text-md">
            {recipe.mealType[0].toUpperCase()}
          </span>
        </div>
      </div>

      <button
        className="bg-orange py-2 md:py-3 px-3 text-white absolute bottom-0 w-full text-start font-barlow flex justify-between items-center hover:bg-jet duration-500 text-sm md:text-[16px]"
        onClick={handleClick}
      >
        Read Full Recipe
        <FiArrowRight className="text-lg" />
      </button>
    </div>
  );
};

export default Card;
