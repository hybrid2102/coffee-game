import React from "react";
import { useContext, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { GameContext } from "../../../App";
import { useRandom } from "../../../Helpers/useRandom";
import { ModeSelector } from "./ModeSelector";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInputs {
  secretInput: number;
}

export const NewGame = (props: {
  startGameCallback: (secret: number) => void;
}) => {
  const { startGameCallback } = props;
  const { defaultMin, defaultMax } = useContext(GameContext);
  const [manualMode, setManualMode] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({ criteriaMode: "all" });

  const manualModeCallback = (mode: boolean) => setManualMode(mode);

  const onSubmit: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    const secretNumber = manualMode
      ? data.secretInput
      : useRandom(defaultMin, defaultMax);
    startGameCallback(secretNumber);
  };

  const secretInputOptions = {
    required: { value: true, message: "inserire un numero valido" },
    min: {
      value: defaultMin + 1,
      message: `inserire un numero maggiore di ${defaultMin}`,
    },
    max: {
      value: defaultMax - 1,
      message: `inserire un numero minore di ${defaultMax}`,
    },
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="row justify-content-md-center"
    >
      <ModeSelector manualModeCallback={manualModeCallback} />
      {manualMode ? (
        <div className="col col-sm-4">
          <input
            type="number"
            {...register("secretInput", secretInputOptions)}
            className="form-control my-3"
            placeholder="Imposta il numero segreto..."
          />
          {errors.secretInput && (
            <p className="alert alert-danger mt-4">
              {errors.secretInput.message}
            </p>
          )}
        </div>
      ) : (
        <p className="text-center mt-3">
          <em>Il numero verrà scelto casualmente.</em>
        </p>
      )}
      <div>
        <Button type="submit">Inizia la partita</Button>
      </div>
    </form>
  );
};
