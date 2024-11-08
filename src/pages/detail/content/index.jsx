import { editName } from "../../../utils/helper";
import Item from "./item";
import Heading from "./heading";
import { recipeDetails } from "../../../utils/constants";

const Content = ({ recipe }) => {
  const images = recipe.images && Object.entries(recipe.images);
  const recipesValues = [
    recipe.calories,
    recipe.dishType?.[0],
    recipe.totalWeight,
    recipe.totalTime,
  ];

  const details = recipeDetails.map((item, i) => ({
    ...item,
    value: recipesValues[i],
  }));

  return (
    <div className="bg-white rounded-md p-5">
      <Heading name={recipe.label} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-10">
        <div>
          <div className="rounded-md overflow-hidden h-[200px] lg:h-[500px] xl:h-[650px]">
            <img
              src={recipe.image}
              alt={recipe.label}
              className="size-full object-cover"
            />
          </div>

          <span className="font-medium text-jet text-md xl:text-xl">
            Source: {recipe.url}
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-2xl text-jet">{recipe.label}</h2>
          <span className="py-1 px-4 bg-orange text-white rounded-md font-medium w-24 text-center">
            {recipe.cuisineType && editName(recipe.cuisineType[0])}
          </span>

          <div className="grid grid-cols-1 xl:grid-cols-[300px_300px] justify-between items-center gap-5">
            {details.map((item, key) => (
              <Item key={key} {...item} />
            ))}
          </div>

          <h2 className="font-bold text-2xl text-jet">Health Label:</h2>

          <div className="flex flex-wrap gap-3">
            {recipe.healthLabels?.map((item) => (
              <span
                key={item}
                className="text-white py-1 px-4 rounded-md bg-green shadow-md font-medium"
              >
                {item}
              </span>
            ))}
          </div>

          <h2 className="font-bold text-2xl text-jet">
            Images (different size):
          </h2>
          <div className="flex flex-wrap gap-3 xl:gap-5">
            {images?.map(([key, value], i) => (
              <div key={i} className="flex flex-col gap-2 mx-auto lg:mx-0">
                <img
                  src={value.url}
                  className="size-[140px] object-cover rounded-sm"
                />

                <div className="flex justify-between gap-3 items-center">
                  <small>{`${value.width} x ${value.height}`}</small>
                  <small>({key})</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
