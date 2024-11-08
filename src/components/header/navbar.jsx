import { NavLink, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { getSearchFeeds } from "../../redux/actions";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target[0].value.toLowerCase();
    if (value.trim() !== "") {
      navigate(`/search/${value}`);
      dispatch(getSearchFeeds({ q: value, nextPage: null }));
    }

    e.target.reset();
  };

  return (
    <div className="bg-orange p-3">
      <div className="flex flex-col lg:flex-row gap-5 justify-between items-center w-[95%] lg:w-[70%] mx-auto">
        <div className="flex w-full lg:w-[50%] xl:w-[70%] justify-between lg:justify-center gap-4 md:gap-16">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>

          <NavLink to="/type/meals" className="nav-link">
            Meals
          </NavLink>

          <NavLink to="/type/dishTypes" className="nav-link">
            Dish Types
          </NavLink>

          <NavLink to="/type/cuisineTypes" className="nav-link">
            Cuisines
          </NavLink>
        </div>

        <form
          className="flex items-center gap-3 w-full lg:w-[40%] xl:w-[40%]"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Search recipe here..."
            className="py-2 ps-4 rounded-sm outline-none w-[95%] md:text-lg xl:text-[16px]"
          />
          <button className="bg-jet text-white p-2 text-2xl md:text-3xl xl:text-[30px] rounded-sm">
            <CiSearch />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
