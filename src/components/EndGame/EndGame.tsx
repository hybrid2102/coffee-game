import React from "react";
import Button from "react-bootstrap/Button";

export const EndGame = (props: { restartCallback: () => void }) => {
  const { restartCallback } = props;
  return (
    <div>
      <div className="alert alert-danger">
        Hai perso 🙃! Devi pagare il caffè ☕.
      </div>
      <Button onClick={restartCallback}>Ricomincia</Button>
    </div>
  );
};
