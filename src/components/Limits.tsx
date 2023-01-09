import React, { useEffect, useState } from "react";

export const Limits = (props: { min: number; max: number }) => {
  const { min, max } = props;
  return (
    <div>
      {min} --- {max}
    </div>
  );
};
