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

  const setSecretNumberCallback = (secret: number) => {
    setSecretNumber(secret);
  };

  const endGameCallback = () => {
    setEndGame(true);
  };

  const restartCallback = () => {
    setEndGame(false);
    setSecretNumber(0);
  };

  return (
    <div className="container text-center">
      {endGame ? (
        <EndGame
          secretNumber={secretNumber}
          restartCallback={restartCallback}
        />
      ) : secretNumber ? (
        <CurrentGame
          secretNumber={secretNumber}
          endGameCallback={endGameCallback}
        />
      ) : (
        <NewGame callback={setSecretNumberCallback} />
      )}
    </div>
  );
};
