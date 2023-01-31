import { GameRange } from "../../../interfaces/GameRange";
import "./hint.css";
export const Hint = (props: { range: GameRange }) => {
  const { range } = props;
  return (
    /*  <div className="alert alert-warning" role="alert">
      Il numero segreto è compreso tra <strong>{range.min}</strong> e
      <strong> {range.max}</strong> (esclusi)
    </div> */
    <div
      className="container mb-3"
      style={{
        display: "grid",
        gridTemplateColumns: `${range.min}% 1fr ${100 - range.max}%`,
      }}
    >
      <div className="left"></div>
      <div className="center"></div>
      <div className="right"></div>
    </div>
  );
};
