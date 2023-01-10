import React from "react";
import Button from "react-bootstrap/Button";

export const EndGame = (props: {
  secretNumber: number;
  restartCallback: () => void;
}) => {
  const { secretNumber, restartCallback } = props;
  return (
    <div>
      <div className="alert alert-danger">
        <p>
          Il numero era proprio <strong>{secretNumber}</strong>! 🙃
        </p>
        <p>Hai perso, devi pagare il caffè. ☕</p>
      </div>
      <Button onClick={restartCallback}>Ricomincia</Button>
    </div>
  );
};
