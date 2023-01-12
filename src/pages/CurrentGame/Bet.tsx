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
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        className="form-control"
        placeholder="Prova a NON indovinare..."
        ref={inputRef}
      />
      <Button type="submit">Prova</Button>
    </form>
  );
};
