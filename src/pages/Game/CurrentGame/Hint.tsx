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
  let rangeTemp = "cold";
  if (guessRange < 50) {
    rangeTemp = "warm";
  }
  if (guessRange < 25) {
    rangeTemp = "hot";
  }

  const gridColumnsValue = `${leftPc}% 1fr ${rightPc}%`;

  return (
    <>
      <div className="alert alert-warning" role="alert">
        Il numero segreto è compreso tra <strong>{range.min}</strong> e
        <strong> {range.max}</strong> (esclusi)
      </div>
      <div
        className="mb-3"
        style={{
          display: "grid",
          gridTemplateColumns: gridColumnsValue,
        }}
      >
        <span className={`bet-min ${rangeTemp}`}>{range.min}</span>
        <span className={`bet-max ${rangeTemp}`}>{range.max}</span>
        <div className="range left"></div>
        <div className={`range center ${rangeTemp}`}></div>
        <div className="range right"></div>
        <span className="default-min">{defaultRange.min}</span>
        <span className="default-max">{defaultRange.max}</span>
      </div>
    </>
  );
};
