import { useState } from "react";
import { NewGame } from "./NewGame/NewGame";
import { CurrentGame } from "./CurrentGame/CurrentGame";
import { EndGame } from "./EndGame/EndGame";

enum GameStatus {
  New,
  Current,
  End,
}

export const Game = () => {
  const [gameStatus, setGameStatus] = useState(GameStatus.New);
  const [secretNumber, setSecretNumber] = useState(0);

  const setSecretNumberCallback = (secret: number) => {
    setSecretNumber(secret);
    setGameStatus(GameStatus.Current);
  };

  const endGameCallback = () => {
    setGameStatus(GameStatus.End);
  };

  const restartGameCallback = () => {
    setGameStatus(GameStatus.New);
  };

  switch (gameStatus) {
    case GameStatus.Current:
      return (
        <CurrentGame
          secretNumber={secretNumber}
          endGameCallback={endGameCallback}
        />
      );

    case GameStatus.End:
      return (
        <EndGame
          secretNumber={secretNumber}
          restartGameCallback={restartGameCallback}
        />
      );

    case GameStatus.New:
    default:
      return <NewGame startGameCallback={setSecretNumberCallback} />;
  }
};
