import { New } from "./New";
import { Ongoing } from "./Ongoing";
import { End } from "./End";
import { useAppSelector } from "../../app/hooks";

export const Game = () => {
  const gameStatusComponents = {
    new: <New />,
    ongoing: <Ongoing />,
    end: <End />,
  };

  const gameStatus = useAppSelector((state) => state.game.status);

  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   if (gameStatus == "ongoing") {
  //     dispatch(restartGame);
  //   }
  // }, []);

  return gameStatusComponents[gameStatus];
};
