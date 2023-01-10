import React from "react";
import Button from "react-bootstrap/Button";

export const SecretNumber = (props: { secretNumber: number }) => {
  const { secretNumber } = props;
  const mostraNumero = () => alert(secretNumber);
  return (
    <div>
      <Button onClick={mostraNumero} className="btn-warning">
        Mostra il numero segreto
      </Button>
    </div>
  );
};
