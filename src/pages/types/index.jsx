import React from "react";
import Title from "../../components/title";
import { getType } from "../../utils/helper";
import { useNavigate, useParams } from "react-router-dom";

const Types = () => {
  const { type } = useParams();
  const category = getType(type);
  const navigate = useNavigate();
  const handleClick = (item) => {
    navigate(`/filteredFoods/${item.type}`, { state: item });
  };

  return (
    <div className="bg-meals">
      <div className="box" />
      <Title subtitle="Get Meal Ready" title="Recipe Meals" />

      <div className="flex flex-wrap justify-center gap-5 xl:gap-16 w-[95%] xl:w-[80%] mx-auto mt-10 xl:mt-20">
        {category.map((item) => (
          <div
            key={item.type}
            className="category-box"
            onClick={() => handleClick(item)}
          >
            <div>
              <img
                src={item.image}
                alt={item.type}
                className="size-full object-cover"
              />
              <div className="category-img" />
            </div>

            <h3 className="font-handlee absolute text-white text-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden text-center">
              {item.type}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Types;
