import { useDispatch } from "react-redux";
import { getFeeds, getSearchFeeds } from "../../redux/actions";

const Button = ({ type, q, feeds }) => {
  const dispatch = useDispatch();

  const handleNextPage = () => {
    if (q) {
      dispatch(getSearchFeeds({ q, nextPage: feeds._links.next.href }));
    } else {
      dispatch(getFeeds({ type, nextPage: feeds._links.next.href }));
    }
  };

  return (
    <div className="w-[70%] mx-auto mb-5 flex justify-center">
      <button
        onClick={handleNextPage}
        className="font-barlow text-sm md:text-xl uppercase text-jet border-2 border-jet py-1 px-3 hover:border-orange hover:text-orange hover:scale-110 duration-500"
      >
        Next Page
      </button>
    </div>
  );
};

export default Button;
