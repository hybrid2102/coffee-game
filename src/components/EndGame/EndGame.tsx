import React from "react";
import Button from "react-bootstrap/Button";

export const EndGame = (props: { restartCallback: () => void }) => {
  const { restartCallback } = props;
  return (
    <>
      <div>Hai perso!</div>
      <Button onClick={restartCallback}>Ricomincia</Button>
    </>
  );
};
