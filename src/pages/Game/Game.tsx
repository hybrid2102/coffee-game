import { useState } from "react";
import { NewGame } from "./NewGame/NewGame";
import { Player } from "../../interfaces/Player";
import { CurrentGame } from "./CurrentGame/CurrentGame";
import { EndGame } from "./EndGame/EndGame";
import { GameSetup } from "../../interfaces/GameSetup";

enum GameStatus {
  New,
  Current,
  End,
}

export const Game = () => {
  const [gameStatus, setGameStatus] = useState(GameStatus.New);
  const [secret, setSecret] = useState(0);
  const [players, setPlayers] = useState<Player[]>([{ name: "Player One" }]);

  const startGame = (data: GameSetup) => {
    console.log("Secret number: " + data.secret);
    setSecret(data.secret);
    setPlayers(data.players);
    setGameStatus(GameStatus.Current);
  };

  const endGame = () => {
    setGameStatus(GameStatus.End);
  };

  const restartGame = () => {
    setGameStatus(GameStatus.New);
  };

  switch (gameStatus) {
    case GameStatus.Current:
      return (
        <CurrentGame secret={secret} players={players} callback={endGame} />
      );

    case GameStatus.End:
      return <EndGame secret={secret} callback={restartGame} />;

    case GameStatus.New:
    default:
      return <NewGame callback={startGame} />;
  }
};
