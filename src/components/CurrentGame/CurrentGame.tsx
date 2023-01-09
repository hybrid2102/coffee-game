import { useEffect, useState } from "react";
import { Bet } from "./Bet";
import { Limits } from "./Limits";
import { SecretNumber } from "./SecretNumber";

export const CurrentGame = (props: {
  secretNumber: number;
  endGameCallback: () => void;
}) => {
  const { secretNumber, endGameCallback } = props;
  const [bet, setBet] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000);

  const setBetCallback = (bet: number) => setBet(bet);

  useEffect(() => {
    if (bet) {
      if (bet === secretNumber) {
        // hai perso
        endGameCallback();
      } else {
        // sei salvo, aggiorno i limiti per il prossimo turno
        if (bet < secretNumber) {
          setMin(bet);
        } else {
          setMax(bet);
        }
      }
    }
  }, [bet]);

  return (
    <>
      <SecretNumber secretNumber={secretNumber} />
      <Limits min={min} max={max} />
      <Bet callback={setBetCallback} />
    </>
  );
};
