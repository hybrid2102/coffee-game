import { useEffect, useState } from "react";
import { Bet } from "./Bet";
import { Hint } from "./Hint";
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
  }, [bet, endGameCallback, secretNumber]);

  return (
    <div className="row justify-content-center">
      <Hint min={min} max={max} />
      <Bet callback={setBetCallback} />
      <SecretNumber secretNumber={secretNumber} />
    </div>
  );
};
