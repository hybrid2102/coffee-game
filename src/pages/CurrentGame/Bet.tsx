import React, { useRef } from "react";
import { Button } from "react-bootstrap";

export const Bet = (props: { callback: (e: any) => void }) => {
  const { callback } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    //let secret = e.target.querySelector("#bet").value;
    if (inputRef.current) {
      const secret = +inputRef.current.value;
      callback(secret);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="row justify-content-center mb-5">
      <div className="col-auto">
        <input
          type="text"
          className="form-control"
          placeholder="Prova a NON indovinare..."
          ref={inputRef}
        />
      </div>
      <div className="col-auto">
        <Button type="submit">Prova</Button>
      </div>
    </form>
  );
};
