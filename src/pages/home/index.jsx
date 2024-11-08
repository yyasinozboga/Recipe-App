import Hero from "./hero";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeeds } from "../../redux/actions";
import Card from "../../components/card";
import DishesCard from "../../components/dishesCard";
import { dishTypeData } from "../../data";
import Title from "../../components/title";
import RecipeMealsSlider from "./recipeMealsSlider";
import Container from "../../components/container";
import Loader from "../../components/loader";
import Error from "../../components/error";

const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, error, feeds } = useSelector((store) => store.feeds);

  useEffect(() => {
    dispatch(getFeeds({ type: null, nextPage: null }));
  }, []);

  return (
    <div className="overflow-hidden">
      <Hero />
      <Title subtitle="Some Recipes" title="Chicken Recipes" />
      <div className="w-[95%] sm:w-[80%] md:w-[95%] xl:w-[70%] mx-auto my-5">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error />
        ) : (
          feeds.hits && (
            <Container>
              {feeds.hits.slice(0, 12).map((item, key) => (
                <Card key={key} item={item} />
              ))}
            </Container>
          )
        )}
      </div>
      <div className="py-5 bg-gray/10">
        <Title subtitle="Find Dishes you love" title="Recipe Dishes" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-[70%] mx-auto">
          {dishTypeData.map((item, key) => (
            <DishesCard key={key} item={item} />
          ))}
        </div>
      </div>
      <Title subtitle="Get Meal Ready" title="Recipe Meals" />
      <RecipeMealsSlider />
    </div>
  );
};

export default Home;
