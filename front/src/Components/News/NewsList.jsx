import { useEffect } from "react";
import useFetch from "../../Hooks/useFetch";
import NewsListItem from "./NewsListItem";
import NewsItem from "./NewsItem";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const NewsList = () => {
  const { request, data, loading, error } = useFetch();
  useEffect(() => {
    request("http://localhost:4200/news");
  }, [request]);
  return (
    <div>
      <h1>News List!</h1>
      {loading && (
        <div>
          <h2>
            <Skeleton />
          </h2>
          <p>
            <Skeleton count={3} />
          </p>
        </div>
      )}
      {error && <div className="errorText">{error}</div>}
      {data && (
        <>
          <NewsItem newsItem={data[0]} />
          <ul>
            {data.map((item) => (
              <NewsListItem key={item.id} newsItem={item} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default NewsList;
