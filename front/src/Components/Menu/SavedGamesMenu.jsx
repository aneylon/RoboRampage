import Title from "../Title/Title";

const SavedGamesMenu = ({ goBack }) => {
  // TODO : Get saved games
  return (
    <div>
      <Title text={"Saved Games"} />
      <div>
        <button>Game 1</button>
      </div>
      <div>
        <button>Game 2</button>
      </div>
      <div>
        <button>Game 3</button>
      </div>
      <div>
        <button onClick={goBack}>Back</button>
      </div>
    </div>
  );
};

export default SavedGamesMenu;
