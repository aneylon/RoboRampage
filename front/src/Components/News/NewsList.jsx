import { useEffect } from "react";
import useFetch from "../../Hooks/useFetch";
import NewsListItem from "./NewsListItem";
import NewsItem from "./NewsItem";

const NewsList = () => {
  const { request, data, loading, error } = useFetch();
  useEffect(() => {
    request("http://localhost:4200/news");
  }, []);
  return (
    <div>
      <h1>News List!</h1>
      {loading && <div>...loading...</div>}
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
