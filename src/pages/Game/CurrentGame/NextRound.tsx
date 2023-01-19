import { Player } from "../../../interfaces/Player";

export const NextRound = (props: {
  bet: number;
  wink: boolean;
  players: Player[];
  currentPlayer: number;
}) => {
  const { bet, wink, players, currentPlayer } = props;

  return bet ? (
    <div className="alert alert-success" role="alert">
      Che fortuna <strong>{players[currentPlayer - 1]?.name}</strong>: il numero
      segreto non è <strong>{props.bet}</strong>!
      <br />
      {players.length <= 1 ? (
        <span>Ora tocca al prossimo giocatore. </span>
      ) : (
        <span>
          Ora tocca a <strong>{players[currentPlayer]?.name}</strong>.
        </span>
      )}
      {wink && "😉"}
    </div>
  ) : (
    // ancora nessuna scommessa o numero indovinato
    <div className="alert alert-info" role="alert">
      <strong>{players[currentPlayer]?.name}</strong> tocca a te!
    </div>
  );
};
