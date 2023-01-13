import { useState } from "react";

export const ModeSelector = (props: {
  modeCallback: (mode: boolean) => void;
}) => {
  const { modeCallback } = props;
  const [checked, setChecked] = useState(false);
  const handleChecked = (b: boolean) => {
    setChecked(b);
    modeCallback(b);
  };
  return (
    <>
      <div className="form-check form-switch form-check-reverse">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckReverse"
          onChange={(e) => handleChecked(e.currentTarget.checked)}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckReverse">
          Modalità manuale
        </label>
      </div>
      {!checked && (
        <p className="text-center mt-3">
          <em>Il numero verrà scelto casualmente.</em>
        </p>
      )}
    </>
  );
};
