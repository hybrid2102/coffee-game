import { Bet } from "./Bet";
import { Hint } from "./Hint";
import { SecretNumber } from "./SecretNumber";

export const CurrentGame = (props: {
  secretNumber: number;
  min: number;
  max: number;
  setBetCallback: (e: any) => void;
}) => {
  const { secretNumber, min, max, setBetCallback } = props;

  return (
    <div className="row justify-content-center">
      <Hint min={min} max={max} />
      <Bet callback={setBetCallback} />
      <SecretNumber secretNumber={secretNumber} />
    </div>
  );
};
