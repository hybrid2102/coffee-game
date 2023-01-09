import React from "react";

export const SecretNumber = (props: { secretNumber: number }) => {
  const { secretNumber } = props;
  return (
    <fieldset>
      <legend>Numero segreto</legend>
      <input id="secretNumber" readOnly value={secretNumber} type="text" />
    </fieldset>
  );
};
