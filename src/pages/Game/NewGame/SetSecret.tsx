import { useContext, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { GameContext, GameSettings } from "../../../App";
import { GameSetup } from "../../../interfaces/GameSetup";

export const SetSecret = (props: { formContext: UseFormReturn<GameSetup> }) => {
  const {
    register,
    formState: { errors },
  } = props.formContext;

  const { defaultMin, defaultMax } = useContext<GameSettings>(GameContext);

  const [manualMode, setManualMode] = useState(false);

  return (
    <>
      <div className="form-check form-switch form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckReverse"
          onChange={(e) => setManualMode(e.currentTarget.checked)}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckReverse">
          Modalità manuale
        </label>
      </div>
      <input
        type={manualMode ? "number" : "hidden"}
        disabled={!manualMode}
        className="form-control my-3"
        placeholder="Imposta il numero segreto..."
        {...register("secret", {
          required: { value: true, message: "inserire un numero valido" },
          min: {
            value: defaultMin + 1,
            message: `inserire un numero maggiore di ${defaultMin}`,
          },
          max: {
            value: defaultMax - 1,
            message: `inserire un numero minore di ${defaultMax}`,
          },
        })}
      />
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
