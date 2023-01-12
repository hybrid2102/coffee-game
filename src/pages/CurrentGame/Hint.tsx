import React from "react";

export const Hint = (props: { min: number; max: number }) => {
  const { min, max } = props;
  return (
    <p className="text-center">
      Il numero segreto è compreso tra <strong>{min}</strong> e
      <strong> {max}</strong> (esclusi)
    </p>
  );
};
