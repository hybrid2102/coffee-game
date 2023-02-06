import { useState } from "react";
import { NewGame } from "./NewGame/NewGame";
import { Player } from "../../interfaces/Player";
import { CurrentGame } from "./CurrentGame/CurrentGame";
import { EndGame } from "./EndGame/EndGame";
import { useAppSelector } from "../../app/hooks";
import { selectPlayers, selectSecret, selectStatus } from "./gameSlice";

// enum GameStatus {
//   New,
//   Current,
//   End,
// }

export const Game = () => {
  // const [gameStatus, setGameStatus] = useState(GameStatus.New);
  // const [secret, setSecret] = useState(0);
  // const [players, setPlayers] = useState<Player[]>([{ name: "Player One" }]);

  // const startGame = (data: GameSetup) => {
  //   console.log("Secret number: " + data.secret);
  //   setSecret(data.secret);
  //   if (data.multiplayerMode) setPlayers(data.players);
  //   setGameStatus(GameStatus.Current);
  // };

  const endGame = (loser: Player) => {
    // setLoser(loser);
    // setGameStatus(GameStatus.End);
  };

  const restartGame = () => {
    // setGameStatus(GameStatus.New);
  };

  // const [loser, setLoser] = useState<Player>(players[0]);
  const gameStatus = useAppSelector(selectStatus);
  const players = useAppSelector(selectPlayers);
  const secret = useAppSelector(selectSecret);

  const loser = { name: "" };

  switch (gameStatus) {
    default:
    case "new":
      return <NewGame />;

    case "ongoing":
      return (
        <CurrentGame secret={secret} players={players} callback={endGame} />
      );

    case "end":
      return <EndGame secret={secret} loser={loser} callback={restartGame} />;
  }
};
