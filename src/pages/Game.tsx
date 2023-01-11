import React, { useEffect, useState } from "react";
import { CurrentGame } from "./CurrentGame/CurrentGame";
import { EndGame } from "./EndGame/EndGame";
import { NewGame } from "./NewGame/NewGame";

export const Game = () => {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(1000);
  const [secretNumber, setSecretNumber] = useState(0);
  const [endGame, setEndGame] = useState(false);
  const [bet, setBet] = useState(0);

  const setBetCallback = (bet: number) => setBet(bet);

  useEffect(() => {
    if (bet) {
      if (bet === secretNumber) {
        // hai perso
        setEndGame(true);
      } else {
        // sei salvo, aggiorno i limiti per il prossimo turno
        if (bet < secretNumber) {
          setMin(bet);
        } else {
          setMax(bet);
        }
      }
    }
  }, [bet, secretNumber]);

  const setSecretNumberCallback = (secret: number) => {
    setSecretNumber(secret);
  };

  const restartCallback = () => {
    setEndGame(false);
    setSecretNumber(0);
    setBet(0);
    setMin(1);
    setMax(1000);
  };

  return (
    <div className="container text-center">
      {endGame ? (
        <EndGame
          secretNumber={secretNumber}
          restartCallback={restartCallback}
        />
      ) : secretNumber ? (
        <CurrentGame
          secretNumber={secretNumber}
          min={min}
          max={max}
          setBetCallback={setBetCallback}
        />
      ) : (
        <NewGame callback={setSecretNumberCallback} min={min} max={max} />
      )}
    </div>
  );
};
