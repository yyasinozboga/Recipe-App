import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/card";
import { getFeeds } from "../../redux/actions";
import Heading from "./heading";
import { useEffect } from "react";
import Container from "../../components/container";
import { getCategory } from "../../utils/helper";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Button from "../../components/button";

const FilteredPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { type, image } = location.state;
  const { isLoading, error, feeds } = useSelector((store) => store.feeds);

  useEffect(() => {
    dispatch(getFeeds({ type, nextPage: null }));
  }, []);

  const handleChange = (e) => {
    const { category } = getCategory(e.target.value);
    const item = category.find((item) => item.type === e.target.value);
    navigate(`/filteredFoods/${e.target.value}`, { state: item });
    dispatch(getFeeds({ type: e.target.value, nextPage: null }));
  };

  return (
    <>
      <div className="relative h-[200px]">
        <figure className="slider">
          <img src={image} alt={type} className="size-full object-cover" />
        </figure>

        <h1 className="text-white font-bold text-4xl md:text-5xl absolute top-1/2 -translate-y-1/2 left-[2%] xl:left-[15%] text-nowrap">
          CUISINE / {type}
        </h1>
      </div>

      <Heading type={type} handleChange={handleChange} />

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

      {!isLoading && !error && feeds.hits && (
        <Button type={type} feeds={feeds} />
      )}
    </>
  );
};

export default FilteredPage;
