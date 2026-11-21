const GridCell = ({ id, click, over }) => {
  return (
    <span
      className="grid-cell"
      onClick={() => click(id)}
      onMouseOver={() => over(id)}
    >
      {id}
    </span>
  );
};

export default GridCell;
