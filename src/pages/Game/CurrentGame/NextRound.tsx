import { GameBet } from "../../../interfaces/GameBet";
import { GameRange } from "../../../interfaces/GameRange";
import { NextPlayer } from "./NextPlayer";

export const NextRound = (props: { gameBet: GameBet; range: GameRange }) => {
  const {
    gameBet: { number, currentPlayer, nextPlayer },
    range,
  } = props;

  const primoTurno = !number;
  const wink = range.max - range.min === 2;

  return primoTurno ? (
    <div className="alert alert-info" role="alert">
      <strong>{currentPlayer.name}</strong> tocca a te!
    </div>
  ) : (
    <div className="alert alert-success" role="alert">
      Meno male <strong>{currentPlayer.name}</strong>: il numero segreto non è{" "}
      <strong>{number}</strong>!
      <br />
      <NextPlayer nextPlayer={nextPlayer} />
      {wink && "😉"}
    </div>
  );
};
