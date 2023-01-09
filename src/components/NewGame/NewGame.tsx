import { useRef } from "react";
import { Button } from "react-bootstrap";

export const NewGame = (props: { callback: (secret: number) => void }) => {
  const { callback } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    //let secret = e.target.querySelector("#secretNumber").value;
    if (inputRef.current) {
      let secret = +inputRef.current.value;
      callback(secret);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="row justify-content-center">
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
  );
};
