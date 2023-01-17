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

  return (
    <>
      {history.map((i) => (
        <p key={i}>{i}</p>
      ))}
    </>
  );
};
