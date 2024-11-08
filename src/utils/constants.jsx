import { FaFire } from "react-icons/fa";
import { BiDish } from "react-icons/bi";
import { GiWeightScale } from "react-icons/gi";
import { AiOutlineFieldTime } from "react-icons/ai";

export const recipeDetails = [
  {
    icon: <FaFire size={20} className="text-jet" />,
    text: "Category",
  },
  {
    icon: <BiDish size={20} className="text-jet" />,
    text: "Dish Type",
  },
  {
    icon: <GiWeightScale size={20} className="text-jet" />,
    text: "Weight",
  },
  {
    icon: <AiOutlineFieldTime size={20} className="text-jet" />,
    text: "Time",
  },
];
