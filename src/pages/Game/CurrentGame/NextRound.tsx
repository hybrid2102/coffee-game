import { Player } from "../../../interfaces/Player";

export const NextRound = (props: {
  bet: number;
  wink: boolean;
  currentPlayer: Player;
  nextPlayer: Player;
}) => {
  const { bet, wink, currentPlayer, nextPlayer } = props;

  return bet ? (
    <div className="alert alert-success" role="alert">
      Che fortuna <strong>{currentPlayer.name}</strong>: il numero segreto non è{" "}
      <strong>{props.bet}</strong>!
      <br />
      {nextPlayer ? (
        <span>
          Ora tocca a <strong>{nextPlayer.name}</strong>.
        </span>
      ) : (
        <span>Ora tocca al prossimo giocatore. </span>
      )}
      {wink && "😉"}
    </div>
  ) : (
    // ancora nessuna scommessa o numero indovinato
    <div className="alert alert-info" role="alert">
      <strong>{currentPlayer.name}</strong> tocca a te!
    </div>
  );
};
