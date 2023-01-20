import React, { useEffect, useState } from "react";
import { Player } from "../../../interfaces/Player";

export const GameHistory = (props: { bet: number; player: Player }) => {
  const { bet, player } = props;
  const [history, setHistory] = useState(Array<number>);

  useEffect(() => {
    if (bet) {
      history.push(bet);
      setHistory(history);
    }
  }, [bet]);

  const now = new Date();
  const time = `(${now.getHours()}:${now.getMinutes()}:${now.getSeconds()})`;

  return bet ? (
    <div className="alert alert-secondary mt-3" role="alert">
      <ol>
        {history.map((value, index) => (
          <li style={{ textAlign: "left" }} key={index}>
            {time} <strong>{player.name}</strong> scommette{" "}
            <strong>{value}</strong>
          </li>
        ))}
      </ol>
    </div>
  ) : (
    <></>
  );
};
