import { useContext, useEffect, useState } from "react";
import { GameContext } from "../../../App";
import { Bet } from "./Bet";
import { GameHistory } from "./GameHistory";
import { Hint } from "./Hint";
import { NextRound } from "./NextRound";
import { ShowSecretNumber } from "./ShowSecretNumber";

export const CurrentGame = (props: {
  secretNumber: number;
  endGameCallback: () => void;
}) => {
  const { secretNumber, endGameCallback } = props;

  const { defaultMin, defaultMax } = useContext(GameContext);

  const [min, setMin] = useState(defaultMin);
  const [max, setMax] = useState(defaultMax);
  const [bet, setBet] = useState(0);
  const [wink, setWink] = useState(false);

  const setBetCallback = (bet: number) => {
    if (bet >= min && bet <= max) {
      setBet(bet);
    }
  };

  useEffect(() => {
    if (bet >= min && bet <= max) {
      if (bet === secretNumber) {
        // hai perso!
        endGameCallback();
      } else {
        // sei salvo: aggiorno i limiti per il prossimo turno
        if (bet < secretNumber) {
          setMin(bet);
        } else {
          setMax(bet);
        }
      }
    }
  }, [bet, secretNumber]);

  useEffect(() => {
    if (max - min === 2) {
      setWink(true);
    }
  }, [min, max]);

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
