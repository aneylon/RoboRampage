import Title from "../Title/Title";
import Grid from "./Grid";

const TicTacToe = () => {
  return (
    <div>
      <Title text="Tic Tac Toe" />
      <Grid height={3} width={3} />
    </div>
  );
};

export default TicTacToe;
