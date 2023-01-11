import { Bet } from "./Bet";
import { Hint } from "./Hint";
import { NextRound } from "./NextRound";
import { SecretNumber } from "./SecretNumber";

export const CurrentGame = (props: {
  secretNumber: number;
  min: number;
  max: number;
  setBetCallback: (e: any) => void;
  betForNextRound: number;
}) => {
  const { secretNumber, min, max, setBetCallback, betForNextRound } = props;

  return (
    <div className="row justify-content-center">
      <NextRound bet={betForNextRound} />
      <Hint min={min} max={max} />
      <Bet callback={setBetCallback} />
      <SecretNumber secretNumber={secretNumber} />
    </div>
  );
};
