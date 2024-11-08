import React from "react";

const Nutrient = ({ recipe }) => {
  const totalNutrients =
    recipe.totalNutrients && Object.values(recipe.totalNutrients);

  return (
    <div>
      <h2 className="text-2xl font-bold text-jet">Nutrient:</h2>

      <div className="flex flex-wrap gap-3 mt-5">
        {totalNutrients?.map((item, key) => (
          <div
            key={key}
            className="flex flex-col items-center gap-1 bg-orange/20 w-[150px] mx-auto xl:w-44 py-3 rounded-sm border-[1px] border-gray/30"
          >
            <span className="font-thin text-center">{item.label}</span>
            <span className="font-thin">
              {item.quantity.toFixed(2)} {item.unit}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nutrient;
