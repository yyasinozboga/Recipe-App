import { IoIosCheckboxOutline } from "react-icons/io";

const Info = ({ item }) => {
  return (
    <div className="flex items-start gap-3 border-b-[1px] border-gray/30 pb-5">
      <IoIosCheckboxOutline size={25} />
      <div className="flex flex-col gap-1">
        <h3 className="font-medium text-md xl:text-lg">{item.text}</h3>
        <span className="flex flex-wrap gap-2 items-center font-thin text-gray">
          <b>Measure:</b> {item.quantity + item.measure}
          <b>Weight:</b> {item.weight.toFixed(2)}
          <b>Food:</b> {item.food}
        </span>
      </div>
    </div>
  );
};

export default Info;
