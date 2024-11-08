import { TiHome } from "react-icons/ti";
import { LiaAngleRightSolid } from "react-icons/lia";
import { getCategory } from "../../utils/helper";
import { useNavigate } from "react-router-dom";

const Heading = ({ type, handleChange }) => {
  const { category, title } = getCategory(type);
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center w-[95%] xl:w-[70%] mx-auto border-b-[1px] border-gray/40 py-5 mt-10 gap-3">
      <div className="flex items-center gap-1 md:gap-3">
        <TiHome className="text-jet text-[15px] md:text-[30px]" />
        <span
          className="font-barlow text-jet tracking-widest text-[10px] md:text-lg cursor-pointer"
          onClick={() => navigate("/")}
        >
          HOME
        </span>
        <LiaAngleRightSolid className="text-jet text-[15px] md:text-[30px]" />
        <span className="font-barlow text-jet tracking-widest uppercase text-[10px] md:text-lg">
          {title} / {type}
        </span>
      </div>

      <select
        className="outline-none rounded-sm bg-orange text-white p-1 md:p-2 w-[150px] md:w-[300px]"
        defaultValue={type}
        onChange={handleChange}
      >
        {category.map((item, key) => (
          <option key={key}>{item.type}</option>
        ))}
      </select>
    </div>
  );
};

export default Heading;
