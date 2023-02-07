import { New } from "./New";
import { Ongoing } from "./Ongoing";
import { End } from "./End";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { restartGame, selectStatus } from "./gameSlice";
import { useEffect } from "react";

export const Game = () => {
  const gameStatusComponents = {
    new: <New />,
    ongoing: <Ongoing />,
    end: <End />,
  };

  const gameStatus = useAppSelector(selectStatus);

  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   if (gameStatus == "ongoing") {
  //     dispatch(restartGame);
  //   }
  // }, []);

  return gameStatusComponents[gameStatus];
};
