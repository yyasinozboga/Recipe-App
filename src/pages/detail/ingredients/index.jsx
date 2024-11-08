import React from "react";
import Item from "./item";

const Ingredients = ({ recipe }) => {
  return (
    <div>
      <h2 className="font-bold text-jet text-2xl">Ingredients:</h2>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 mt-5">
        {recipe.ingredients?.map((item, key) => (
          <Item key={key} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Ingredients;
