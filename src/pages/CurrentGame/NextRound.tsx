export const NextRound = (props: { bet: number; wink: boolean }) => {
  const { bet, wink } = props;
  return bet ? (
    <div className="alert alert-success" role="alert">
      Che fortuna: il numero segreto non è <strong>{props.bet}</strong>!
      <br />
      Ora tocca al prossimo giocatore. {wink && "😉"}
    </div>
  ) : (
    // ancora nessuna scommessa o numero indovinato
    <></>
  );
};
