import Button from "react-bootstrap/Button";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { restartGame, selectLoser, selectSecret } from "../gameSlice";

export const End: React.FC = () => {
  const secret = useAppSelector(selectSecret);
  const loser = useAppSelector(selectLoser);
  const dispatch = useAppDispatch();
  const restart = () => dispatch(restartGame());
  return (
    <>
      <div className="alert alert-danger" role="alert">
        Oh no, il numero era proprio <strong>{secret}</strong>! 🙃
        <br />
        <strong>{loser?.name}</strong> ha perso, deve pagare il caffè. ☕
      </div>
      <div className="d-grid mt-5">
        <Button autoFocus onClick={restart}>
          Ricomincia
        </Button>
      </div>
    </>
  );
};
