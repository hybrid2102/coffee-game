import React from "react";
import { useContext, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { GameContext } from "../../../App";
import { useRandom } from "../../../Helpers/useRandom";
import { ModeSelector } from "./ModeSelector";

export const NewGame = (props: {
  startGameCallback: (secret: number) => void;
}) => {
  const { startGameCallback } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const { defaultMin, defaultMax } = useContext(GameContext);
  const { setError } = useContext(GameContext);
  const [manualMode, setManualMode] = useState(false);

  const manualModeCallback = (mode: boolean) => setManualMode(mode);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    let secretNumber: number;

    if (manualMode) {
      if (!inputRef.current) return;
      secretNumber = +inputRef.current.value;
      if (isNaN(secretNumber)) {
        setError("Inserire un numero valido");
        return;
      }
      if (secretNumber <= defaultMin || secretNumber >= defaultMax) {
        setError(
          `Inserire un numero compreso tra ${defaultMin} e ${defaultMax} (esclusi)`
        );
        return;
      }
      startGameCallback(secretNumber);
    } else {
      secretNumber = useRandom(defaultMin, defaultMax);
      startGameCallback(secretNumber);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="row justify-content-md-center">
      <ModeSelector manualModeCallback={manualModeCallback} />
      {manualMode ? (
        <div className="col col-sm-4">
          <input
            type="number"
            className="form-control my-3"
            placeholder="Imposta il numero segreto..."
            ref={inputRef}
          />
        </div>
      ) : (
        <p className="text-center mt-3">
          <em>Il numero verrà scelto casualmente.</em>
        </p>
      )}
      <div>
        <Button type="submit">Inizia la partita</Button>
      </div>
    </form>
  );
};
