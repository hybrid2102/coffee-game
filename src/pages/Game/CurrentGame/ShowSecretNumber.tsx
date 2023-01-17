import Button from "react-bootstrap/Button";

export const ShowSecretNumber = (props: { secretNumber: number }) => {
  const { secretNumber } = props;
  const mostraNumero = () => {
    const confirmed = window.confirm(
      "Sei sicuro di voler vedere il numero segreto?"
    );
    if (confirmed)
      alert(`Il numero segreto è ${secretNumber}. Acqua in bocca!`);
  };
  return (
    <Button onClick={mostraNumero} className="btn-warning mt-4">
      Mostra il numero segreto
    </Button>
  );
};
