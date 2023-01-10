import { useRef, useState } from "react";
import { Button } from "react-bootstrap";

export const NewGame = (props: {
  callback: (secret: number) => void;
  min: number;
  max: number;
}) => {
  const { callback, min, max } = props;

  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    //let secret = e.target.querySelector("#secretNumber").value;
    if (inputRef.current) {
      setError(false);
      let secret = +inputRef.current.value;

      if (secret < min || secret > max) {
        setError(true);
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

      {error && (
        <>
          <br />
          <div className="row justify-content-center">
            <div className="col-auto ">
              <p className="alert alert-danger">
                Inserisci un numero tra {min} e {max}
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};
