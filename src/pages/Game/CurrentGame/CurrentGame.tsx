import { Bet } from "./Bet";
import { Hint } from "./Hint";
import { NextRound } from "./NextRound";
import { ShowSecretNumber } from "./ShowSecretNumber";

export const CurrentGame = (props: {
  secretNumber: number;
  min: number;
  max: number;
  setBetCallback: (x: number) => void;
  betForNextRound: number;
  wink: boolean;
}) => {
  const { secretNumber, min, max, setBetCallback, betForNextRound, wink } =
    props;

  return (
    <>
      <NextRound bet={betForNextRound} wink={wink} />
      <Hint minBet={min} maxBet={max} />
      <Bet minBet={min} maxBet={max} callback={setBetCallback} />
      <ShowSecretNumber secretNumber={secretNumber} />
    </>
  );
};
