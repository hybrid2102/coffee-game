import React, { useRef } from "react";
import { Button } from "react-bootstrap";

export const Bet = (props: { callback: (e: any) => void }) => {
  const { callback } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (inputRef.current) {
      const secret = +inputRef.current.value;
      inputRef.current.value = "";
      callback(secret);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="row justify-content-md-center">
      <div className="col col-sm-4">
        <input
          type="number"
          className="form-control my-3"
          placeholder="Prova a NON indovinare..."
          ref={inputRef}
        />
      </div>
      <div className="text-center mt-3">
        <Button type="submit">Scommetti</Button>
      </div>
    </form>
  );
};
