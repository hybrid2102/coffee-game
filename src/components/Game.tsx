import React, { useEffect, useState } from "react";
import { CurrentGame } from "./CurrentGame/CurrentGame";
import { EndGame } from "./EndGame/EndGame";
import { NewGame } from "./NewGame/NewGame";

export const Game = () => {
  const [secretNumber, setSecretNumber] = useState(0);
  const [endGame, setEndGame] = useState(false);

  useEffect(() => {
    console.log(secretNumber);
  }, [secretNumber]);

  const setSecretNumberCallback = (secret: number) => setSecretNumber(secret);
  const endGameCallback = () => setEndGame(true);

  return endGame ? (
    <EndGame />
  ) : secretNumber ? (
    <CurrentGame
      secretNumber={secretNumber}
      endGameCallback={endGameCallback}
    />
  ) : (
    <NewGame callback={setSecretNumberCallback} />
  );
};
