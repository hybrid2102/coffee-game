import { GameRange } from "../../../interfaces/GameRange";

export const Hint = (props: { range: GameRange }) => {
  const { range } = props;
  return (
    <div className="alert alert-warning" role="alert">
      Il numero segreto è compreso tra <strong>{range.min}</strong> e
      <strong> {range.max}</strong> (esclusi)
    </div>
  );
};
