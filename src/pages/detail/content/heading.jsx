import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const Heading = ({ name }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-3 border-b-2 border-gray/20">
      <button
        className="flex items-center gap-2 font-medium"
        onClick={() => navigate(-1)}
      >
        <GoArrowLeft size={22} /> Go Back
      </button>

      <h1 className="font-bold text-2xl md:text-4xl mb-5">{name}</h1>
    </div>
  );
};

export default Heading;
