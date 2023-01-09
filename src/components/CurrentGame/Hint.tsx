import React, { useEffect, useState } from "react";

export const Hint = (props: { min: number; max: number }) => {
  const { min, max } = props;
  return (
    <p>
      Il numero segreto è compreso tra {min} e {max}
    </p>
  );
};
