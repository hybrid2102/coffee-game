import { useEffect, useState } from "react";
import { GameBet } from "../../../interfaces/GameBet";

export const GameHistory = (props: { gameBet: GameBet }) => {
  const { gameBet } = props;
  const [history, setHistory] = useState<GameBet[]>([]);

  useEffect(() => setHistory(history.concat(gameBet)), [gameBet]);

  let time: string;
  if (gameBet.number) {
    const now = gameBet?.date;
    time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  }

  return (
    <div className="alert alert-secondary mt-3" role="alert">
      <ol>
        {history.map((value, index) => (
          <li style={{ textAlign: "left" }} key={index}>
            {time} - <strong>{value.currentPlayer.name}</strong> scommette{" "}
            <strong>{value.number}</strong>
          </li>
        ))}
      </ol>
    </div>
  );
};
