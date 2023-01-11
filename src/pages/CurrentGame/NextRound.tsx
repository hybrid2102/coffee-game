export const NextRound = (props: { bet: number }) => {
  const { bet } = props;
  return bet ? (
    <div className="alert alert-success" role="alert">
      <span>
        Che fortuna: il numero segreto non è <strong>{props.bet}</strong>!
      </span>
      <br />
      <span>Ora tocca al prossimo giocatore.</span>
    </div>
  ) : (
    // ancora nessuna scommessa o numero indovinato
    <></>
  );
};
