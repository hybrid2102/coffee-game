import Button from "react-bootstrap/Button";
import { Player } from "../../../interfaces/Player";

export const EndGame = (props: {
  secret: number;
  loser: Player;
  callback: () => void;
}) => {
  const { secret: secretNumber, loser, callback: restartGameCallback } = props;

  return (
    <>
      <div className="alert alert-danger" role="alert">
        Il numero era proprio <strong>{secretNumber}</strong>! 🙃
        <br />
        <strong>{loser.name}</strong> ha perso, deve pagare il caffè. ☕
      </div>
      <Button autoFocus onClick={restartGameCallback}>
        Ricomincia
      </Button>
    </>
  );
};
