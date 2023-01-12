import React from "react";
import Button from "react-bootstrap/Button";

export const SecretNumber = (props: { secretNumber: number }) => {
  const { secretNumber } = props;
  const mostraNumero = () => {
    const confirmed = window.confirm(
      "Sei sicuro di voler vedere il numero segreto?"
    );
    if (confirmed)
      alert(`Il numero segreto è ${secretNumber}. Acqua in bocca!`);
  };
  return (
    <div className="d-grid mt-5">
      <Button onClick={mostraNumero} className="btn-warning">
        Mostra il numero segreto
      </Button>
    </div>
  );
};
