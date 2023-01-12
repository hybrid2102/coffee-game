import React from "react";
import Button from "react-bootstrap/Button";

export const EndGame = (props: {
  secretNumber: number;
  restartCallback: () => void;
}) => {
  const { secretNumber, restartCallback } = props;
  return (
    <>
      <div className="alert alert-danger text-center" role="alert">
        Il numero era proprio <strong>{secretNumber}</strong>! 🙃
        <br />
        <br />
        Hai perso, devi pagare il caffè. ☕
      </div>
      <div>
        <Button onClick={restartCallback}>Ricomincia</Button>
      </div>
    </>
  );
};
