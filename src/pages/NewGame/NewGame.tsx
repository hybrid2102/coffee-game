import { useContext, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { GameContext } from "../../App";

export const NewGame = (props: { callback: (secret: number) => void }) => {
  const { callback } = props;
  const { defaultMin, defaultMax, setError } = useContext(GameContext);

  //const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    //let secret = e.target.querySelector("#secretNumber").value;
    if (inputRef.current) {
      setError("");
      let secret = +inputRef.current.value;

      if (isNaN(secret)) {
        setError("Inserire un numero valido");
        return;
      }

      if (secret < defaultMin || secret > defaultMax) {
        setError(
          `Inserire un numero compreso tra ${defaultMin} e ${defaultMax}`
        );
        return;
      }

      callback(secret);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="row justify-content-center mb-5">
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Inserisci il numero"
            ref={inputRef}
          />
        </div>
        <div className="col-auto">
          <Button type="submit" className="form-control">
            Inizia il gioco
          </Button>
        </div>
      </form>
    </>
  );
};
