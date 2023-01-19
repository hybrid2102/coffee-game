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
      Che fortuna {players[currentPlayer]?.name}: il numero segreto non è{" "}
      <strong>{props.bet}</strong>!
      <br />
      Ora tocca al prossimo giocatore. {wink && "😉"}
    </div>
  ) : (
    // ancora nessuna scommessa o numero indovinato
    <></>
  );
};
