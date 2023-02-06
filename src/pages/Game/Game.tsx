import { New } from "./New";
import { Ongoing } from "./Ongoing";
import { End } from "./End";
import { useAppSelector } from "../../app/hooks";
import { selectStatus } from "./gameSlice";

export const Game = () => {
  const gameStatusComponents = {
    new: <New />,
    ongoing: <Ongoing />,
    end: <End />,
  };

  const gameStatus = useAppSelector(selectStatus);

  return gameStatusComponents[gameStatus];
};
