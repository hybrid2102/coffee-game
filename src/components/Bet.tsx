import React, { useRef } from "react";

export const Bet = (props: {
  secretNumber: number;
  callback: (e: any) => void;
}) => {
  let { secretNumber, callback } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    //let secret = e.target.querySelector("#bet").value;
    if (inputRef.current) {
      let secret = +inputRef.current.value;
      callback(secret);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Numero segreto</legend>
        <input id="secretNumber" readOnly value={secretNumber} type="text" />
      </fieldset>

      <label htmlFor="bet">Prova a indovinare:</label>
      <input id="bet" type="text" ref={inputRef} />
      <input type="submit" />
    </form>
  );
};
