import { Bet } from "./Bet";
import { Hint } from "./Hint";
import { NextRound } from "./NextRound";
import { ShowSecretNumber } from "./ShowSecretNumber";

export const CurrentGame = (props: {
  secretNumber: number;
  min: number;
  max: number;
  setBetCallback: (e: any) => void;
  betForNextRound: number;
  wink: boolean;
}) => {
  const { secretNumber, min, max, setBetCallback, betForNextRound, wink } =
    props;

  return (
    <>
      <NextRound bet={betForNextRound} wink={wink} />
      <Hint min={min} max={max} />
      <Bet callback={setBetCallback} />
      <ShowSecretNumber secretNumber={secretNumber} />
    </>
  );
};
