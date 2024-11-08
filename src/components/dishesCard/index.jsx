import { useNavigate } from "react-router-dom";

const DishesCard = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = (item) => {
    navigate(`/filteredFoods/${item.type}`, { state: item });
  };

  return (
    <div
      className="rounded-md shadow-md relative overflow-hidden h-[200px]"
      onClick={() => handleClick(item)}
    >
      <figure className="size-full">
        <img
          src={item.image}
          alt={item.type}
          className="size-full object-cover"
        />
      </figure>

      <h1 className="bg-orange/80 absolute bottom-[5px] w-[90%] text-white font-handlee text-lg py-1 px-3">
        {item.type}
      </h1>
    </div>
  );
};

export default DishesCard;
