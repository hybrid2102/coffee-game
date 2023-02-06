import { NewGame } from "./NewGame";
import { CurrentGame } from "./CurrentGame";
import { EndGame } from "./EndGame";
import { useAppSelector } from "../../app/hooks";
import { selectStatus } from "./gameSlice";

export const Game = () => {
  const gameStatusComponents = {
    new: <NewGame />,
    ongoing: <CurrentGame />,
    end: <EndGame />,
  };

  const gameStatus = useAppSelector(selectStatus);

  return gameStatusComponents[gameStatus];
};
