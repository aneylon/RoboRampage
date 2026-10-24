const NewsListItem = ({ newsItem }) => {
  const selectItem = () => {
    console.log("show item", newsItem.id);
  };
  return <li onClick={selectItem}>{newsItem.title}</li>;
};

export default NewsListItem;
