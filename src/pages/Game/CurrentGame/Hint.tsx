import { useContext } from "react";
import { GameContext } from "../../../App";
import { GameRange } from "../../../interfaces/GameRange";
import "./hint.css";
export const Hint = (props: { range: GameRange }) => {
  const { range } = props;
  const { defaultRange } = useContext(GameContext);

  const leftPc = (range.min * 100) / defaultRange.max;
  const rightPc = 100 - (range.max * 100) / defaultRange.max;

  const guessRange = 100 - rightPc - leftPc;
  let rangeTemp = "center-cold";
  if (guessRange < 50) {
    rangeTemp = "center-warm";
  }
  if (guessRange < 25) {
    rangeTemp = "center-hot";
  }

  const gridColumnsValue = `${leftPc}% 1fr ${rightPc}%`;

  return (
    <>
      <div className="alert alert-warning" role="alert">
        Il numero segreto è compreso tra <strong>{range.min}</strong> e
        <strong> {range.max}</strong> (esclusi)
      </div>
      <div
        className="container mb-3"
        style={{
          display: "grid",
          gridTemplateColumns: gridColumnsValue,
        }}
      >
        <div className="left"></div>
        <div className={rangeTemp}></div>
        <div className="right"></div>
      </div>
    </>
  );
};
