const NewsItem = ({ newsItem }) => {
  const { title, content, publishDate, modDate, author } = newsItem;
  return (
    <div>
      <h1>{title}</h1>
      <div>{content}</div>
      <h3>Published : {publishDate}</h3>
      {publishDate !== modDate && <h3>Updated : {modDate}</h3>}
    </div>
  );
};

export default NewsItem;
