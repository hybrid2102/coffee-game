import { useContext, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { GameContext, GameSettings } from "../../../App";
import { GameSetup } from "../../../interfaces/GameSetup";

export const SetSecret = (props: { formContext: UseFormReturn<GameSetup> }) => {
  const {
    register,
    formState: { errors },
  } = props.formContext;

  const { defaultRange } = useContext<GameSettings>(GameContext);

  const [manualMode, setManualMode] = useState(false);

  return (
    <>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckReverse"
          onChange={(e) => setManualMode(e.currentTarget.checked)}
        />
        <label
          className="form-check-label"
          style={{ textAlign: "left" }}
          htmlFor="flexSwitchCheckReverse"
        >
          Modalità manuale
        </label>
      </div>
      {manualMode && (
        <input
          type="number"
          className="form-control my-3"
          placeholder="Imposta il numero segreto..."
          {...register("secret", {
            required: { value: true, message: "inserire un numero valido" },
            min: {
              value: defaultRange.min + 1,
              message: `inserire un numero maggiore di ${defaultRange.min}`,
            },
            max: {
              value: defaultRange.max - 1,
              message: `inserire un numero minore di ${defaultRange.max}`,
            },
          })}
        />
      )}
      {errors.secret && (
        <p className="alert alert-danger mt-4">{errors.secret.message}</p>
      )}
      {!manualMode && (
        <p className="mt-3">
          <em>Il numero verrà scelto casualmente.</em>
        </p>
      )}
    </>
  );
};
