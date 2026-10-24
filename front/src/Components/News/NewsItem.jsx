const NewsItem = ({ newsItem }) => {
  const { title, content, publishDate, modDate, author } = newsItem;
  const showUpdated = publishDate !== modDate;
  console.log(showUpdated, publishDate, modDate);
  return (
    <div>
      <h1>{title}</h1>
      <hr />
      <div>{content}</div>
      <hr />
      <h3>by : {author}</h3>
      <h4>Published : {publishDate}</h4>
      {publishDate !== modDate && <h5>Updated : {modDate}</h5>}
    </div>
  );
};

export default NewsItem;
