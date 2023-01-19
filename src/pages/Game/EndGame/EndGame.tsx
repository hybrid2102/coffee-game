import Button from "react-bootstrap/Button";

export const EndGame = (props: { secret: number; callback: () => void }) => {
  const { secret: secretNumber, callback: restartGameCallback } = props;

  return (
    <>
      <div className="alert alert-danger" role="alert">
        Il numero era proprio <strong>{secretNumber}</strong>! 🙃
        <br />
        Hai perso, devi pagare il caffè. ☕
      </div>
      <Button autoFocus onClick={restartGameCallback}>
        Ricomincia
      </Button>
    </>
  );
};
