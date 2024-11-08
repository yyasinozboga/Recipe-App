import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getRecipeDataById } from "../../redux/actions";
import Content from "./content";
import Ingredients from "./ingredients";
import Nutrient from "./nutrient";
import Loader from "../../components/loader";
import Error from "../../components/error";

const Detail = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { isLoading, error, recipeDataById } = useSelector(
    (store) => store.recipeDataById,
  );
  const url = location.state;
  useEffect(() => {
    dispatch(getRecipeDataById(url));
  }, []);

  const recipe = { ...recipeDataById.recipe, ...recipeDataById._links };

  return (
    <div className="bg-gray/10 py-10">
      <div
        className={`w-[95%] xl:w-[70%] mx-auto ${
          isLoading && "bg-white rounded-md"
        }`}
      >
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error />
        ) : (
          recipe && (
            <>
              <Content recipe={recipe} />
              <div className="mt-5 bg-white rounded-md p-5">
                <Ingredients recipe={recipe} />
                <Nutrient recipe={recipe} />
              </div>
            </>
          )
        )}
      </div>
    </div>
  );
};

export default Detail;
