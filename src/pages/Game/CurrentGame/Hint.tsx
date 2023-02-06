import { useSelector } from "react-redux";
import { GameRange } from "../../../interfaces/GameRange";
import { selectSettings } from "../settingsSlice";
import "./hint.css";
interface HintProps {
  range: GameRange;
}

export const Hint: React.FC<HintProps> = (props: HintProps) => {
  const { range } = props;
  const { defaultRange } = useSelector(selectSettings);

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
