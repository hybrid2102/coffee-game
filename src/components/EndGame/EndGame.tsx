import React from "react";

export const EndGame = (props: { restartCallback: () => void }) => {
  const { restartCallback } = props;
  return (
    <>
      <div>Hai perso!</div>
      <button onClick={restartCallback}>Ricomincia</button>
    </>
  );
};
