export const Hint = (props: { minBet: number; maxBet: number }) => {
  const { minBet, maxBet } = props;
  return (
    <div className="alert alert-warning" role="alert">
      Il numero segreto è compreso tra <strong>{minBet}</strong> e
      <strong> {maxBet}</strong> (esclusi)
    </div>
  );
};
