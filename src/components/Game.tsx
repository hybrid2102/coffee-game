import React, { useEffect, useState } from "react";
import { CurrentGame } from "./CurrentGame";
import { NewGame } from "./NewGame";

export const Game = () => {
  const [secretNumber, setSecretNumber] = useState(0);
  const [bet, setBet] = useState(0);

  useEffect(() => {
    console.log(secretNumber);
    console.log(bet);
  }, [secretNumber, bet]);

  const setSecretNumberCallback = (secret: number) => setSecretNumber(secret);

  const setBetCallback = (bet: number) => setBet(bet);

  return secretNumber ? (
    <CurrentGame secretNumber={secretNumber} callback={setBetCallback} />
  ) : (
    <NewGame callback={setSecretNumberCallback} />
  );
};
