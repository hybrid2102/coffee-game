import React, { useEffect, useState } from "react";
import { CurrentGame } from "./CurrentGame";
import { NewGame } from "./NewGame";

export const Game = () => {
  const [secretNumber, setSecretNumber] = useState(0);

  useEffect(() => {
    console.log(secretNumber);
  }, [secretNumber]);

  const setSecretNumberCallback = (secret: number) => setSecretNumber(secret);

  return secretNumber ? (
    <CurrentGame secretNumber={secretNumber} />
  ) : (
    <NewGame callback={setSecretNumberCallback} />
  );
};
