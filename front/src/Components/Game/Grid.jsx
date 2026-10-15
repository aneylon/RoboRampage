import { useEffect, useState } from "react";

const Grid = ({ height, width }) => {
  const [myGrid, setMyGrid] = useState(null);

  useEffect(() => {
    let tempGrid = [];
    for (let i = 0; i < height; i++) {
      let row = [];
      for (let j = 0; j < width; j++) {
        row.push([i, j]);
      }
      tempGrid.push(row);
    }
    console.log(tempGrid);
    setMyGrid(tempGrid);
  }, []);

  return (
    <div>
      <h1>GRID!</h1>
      <div>
        {myGrid &&
          myGrid.map((row) => {
            console.log("mapping", { row });
            return (
              <div>
                {row.map((col) => {
                  return <span className="grid-cell">{col}</span>;
                })}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Grid;
