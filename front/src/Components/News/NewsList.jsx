import NewsListItem from "./NewsListItem";

const NewsList = () => {
  const newsItems = [
    { id: 1, title: "News One" },
    { id: 2, title: "News Two" },
    { id: 3, title: "News three" },
  ];
  return (
    <div>
      <h1>News List!</h1>
      <ul>
        {newsItems.map((item) => (
          <NewsListItem key={item.id} newsItem={item} />
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
