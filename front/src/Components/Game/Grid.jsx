import { useEffect, useState } from "react";
import GridCell from "./GridCell";

const Grid = ({ height, width }) => {
  const [myGrid, setMyGrid] = useState(null);

  const clickFunction = (id) => {
    // console.log("clicked", id);
  };

  const mouseOverFunction = (id) => {
    // console.log("over", id);
  };

  useEffect(() => {
    let tempGrid = [];
    for (let i = 0; i < height; i++) {
      let row = [];
      for (let j = 0; j < width; j++) {
        row.push([i, j]);
      }
      tempGrid.push(row);
    }
    setMyGrid(tempGrid);
  }, [height, width]);

  return (
    <div>
      <h1>GRID!</h1>
      <div>
        {myGrid &&
          myGrid.map((row) => {
            return (
              <div>
                {row.map((col) => {
                  return (
                    <GridCell
                      id={col}
                      click={clickFunction}
                      over={mouseOverFunction}
                    />
                  );
                })}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Grid;
