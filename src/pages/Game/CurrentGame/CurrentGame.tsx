import { Bet } from "./Bet";
import { GameHistory } from "./GameHistory";
import { Hint } from "./Hint";
import { NextRound } from "./NextRound";
import { ShowSecretNumber } from "./ShowSecretNumber";

export const CurrentGame = (props: {
  secretNumber: number;
  min: number;
  max: number;
  setBetCallback: (x: number) => void;
  bet: number;
  wink: boolean;
}) => {
  const { secretNumber, min, max, setBetCallback, bet, wink } = props;

  return (
    <>
      <NextRound bet={bet} wink={wink} />
      <Hint minBet={min} maxBet={max} />
      <Bet minBet={min} maxBet={max} callback={setBetCallback} />
      <ShowSecretNumber secretNumber={secretNumber} />
      <GameHistory bet={bet} />
    </>
  );
};
