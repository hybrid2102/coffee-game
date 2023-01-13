import { useContext, useEffect, useState } from "react";
import { GameContext } from "../../App";
import { CurrentGame } from "./CurrentGame/CurrentGame";
import { EndGame } from "./EndGame/EndGame";
import { NewGame } from "./NewGame/NewGame";

export const Game = () => {
  const { defaultMin, defaultMax, error } = useContext(GameContext);

  const [min, setMin] = useState(defaultMin);
  const [max, setMax] = useState(defaultMax);
  const [secretNumber, setSecretNumber] = useState(0);
  const [endGame, setEndGame] = useState(false);
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

  useEffect(() => {
    if (max - min === 2) {
      setWink(true);
    }
  }, [min, max]);

  const setSecretNumberCallback = (secret: number) => {
    setSecretNumber(secret);
  };

  const restartCallback = () => {
    setEndGame(false);
    setSecretNumber(0);
    setBet(0);
    setMin(defaultMin);
    setMax(defaultMax);
    setWink(false);
  };

  return (
    <>
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
          betForNextRound={bet}
          wink={wink}
        />
      ) : (
        <NewGame startGameCallback={setSecretNumberCallback} />
      )}
      {error && <p className="alert alert-danger mt-4">{error}</p>}
    </>
  );
};
