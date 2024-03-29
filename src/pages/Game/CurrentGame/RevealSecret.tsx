import Button from "react-bootstrap/Button";

interface RevealSecretProps {
  secret: number;
}

export const RevealSecret: React.FC<RevealSecretProps> = (
  props: RevealSecretProps
) => {
  const { secret } = props;
  const mostraNumero = () => {
    const confirmed = window.confirm(
      "Sei sicuro di voler vedere il numero segreto?"
    );
    if (confirmed) alert(`Il numero segreto è ${secret}. Acqua in bocca!`);
  };
  return (
    <div className="d-grid mt-5">
      <Button onClick={mostraNumero} className="btn-warning">
        Mostra il numero segreto
      </Button>
    </div>
  );
};
