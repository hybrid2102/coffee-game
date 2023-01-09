import React, { useRef } from "react";

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
    <form onSubmit={handleSubmit}>
      <label htmlFor="bet">Prova a indovinare:</label>
      <input id="bet" type="text" ref={inputRef} />
      <input type="submit" />
    </form>
  );
};
