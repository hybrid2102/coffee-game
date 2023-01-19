import React, { useEffect, useState } from "react";

export const GameHistory = (props: { bet: number }) => {
  const { bet } = props;
  const [history, setHistory] = useState(Array<number>);

  useEffect(() => {
    if (bet) {
      history.push(bet);
      setHistory(history);
    }
  }, [bet]);

  return bet ? (
    <div className="alert alert-secondary mt-3" role="alert">
      {history.map((value, index) => (
        <p key={index}>
          Turno {index + 1}: {value}
        </p>
      ))}
    </div>
  ) : (
    <></>
  );
};
