const NewsListItem = ({ newsItem }) => {
  const selectItem = () => {};
  return <li onClick={selectItem}>{newsItem.title}</li>;
};

export default NewsListItem;
