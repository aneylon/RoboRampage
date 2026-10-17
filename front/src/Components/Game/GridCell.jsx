const GridCell = ({ id }) => {
  const clickIt = () => {
    console.log("clicked", id);
  };
  return (
    <span className="grid-cell" onClick={clickIt}>
      {id}
    </span>
  );
};

export default GridCell;
