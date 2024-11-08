import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "../../components/card";
import { getSearchFeeds } from "../../redux/actions";
import { RxCross1 } from "react-icons/rx";
import { clearResults } from "../../redux/slices/getSearchFeedsSlice";
import Container from "../../components/container";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Button from "../../components/button";
import NoResults from "../../components/noresults";

const SearchFeeds = () => {
  const { name } = useParams();
  const { isLoading, error, searchFeeds } = useSelector(
    (store) => store.searchFeeds,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSearchFeeds({ q: name, nextPage: null }));
  }, []);

  const handleClick = () => {
    dispatch(clearResults());
  };

  return (
    <div className="w-[95%] sm:w-[80%] md:w-[95%] xl:w-[70%] mx-auto my-5">
      {searchFeeds.hits && (
        <button
          className="flex items-center gap-2 border-[1px] border-jet rounded-md py-1 px-2 text-jet"
          onClick={handleClick}
        >
          <RxCross1 size={20} color="red" /> CLEAR RESULT
        </button>
      )}

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : searchFeeds.length === 0 ? (
        <NoResults />
      ) : (
        searchFeeds.hits && (
          <Container>
            {searchFeeds.hits.slice(0, 12).map((item, key) => (
              <Card key={key} item={item} />
            ))}
          </Container>
        )
      )}

      {!isLoading && !error && searchFeeds.hits && (
        <Button q={name} feeds={searchFeeds} />
      )}
    </div>
  );
};

export default SearchFeeds;
