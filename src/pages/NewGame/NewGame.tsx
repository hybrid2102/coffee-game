import { useContext, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { GameContext } from "../../App";
import { ModeSelector } from "./ModeSelector";

function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const NewGame = (props: {
  startGameCallback: (secret: number) => void;
}) => {
  const { startGameCallback } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const { defaultMin, defaultMax, setError } = useContext(GameContext);
  const [manualMode, setManualMode] = useState(false);

  const modeCallback = (mode: boolean) => setManualMode(mode);

  const handleSubmit = (e: any) => {
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
      secretNumber = randomIntFromInterval(defaultMin + 1, defaultMax - 1);
      startGameCallback(secretNumber);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="row justify-content-md-center">
      <ModeSelector modeCallback={modeCallback} />
      {manualMode && (
        <div className="col col-sm-4">
          <input
            type="number"
            className="form-control my-3"
            placeholder="Imposta il numero segreto..."
            ref={inputRef}
          />
        </div>
      )}
      <div>
        <Button type="submit">Inizia la partita</Button>
      </div>
    </form>
  );
};
