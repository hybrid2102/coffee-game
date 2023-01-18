import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInputs {
  betInput: number;
}

export const Players = () => {
  const [multiplayerMode, setMultiplayerMode] = useState(false);

  // react-hook-form
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<IFormInputs>({ mode: "onSubmit", criteriaMode: "all" });
  const betInputOptions = {
    required: { value: true, message: "inserire un numero valido" },
  };
  const onSubmit: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    resetField("betInput");
    //callback(data.betInput);
  };

  return (
    <>
      <div className="form-check form-switch form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckReverse"
          onChange={(e) => setMultiplayerMode(e.currentTarget.checked)}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckReverse">
          Modalità multiplayer
        </label>
      </div>
      {multiplayerMode ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-8">
              <input
                type="number"
                className="form-control"
                placeholder="Inserisci un nome..."
                {...register("betInput", betInputOptions)}
              />
            </div>
            <div className="col-4 d-grid">
              <Button type="submit">Altro giocatore</Button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              {errors.betInput && (
                <p className="alert alert-danger mt-3">
                  {errors.betInput.message}
                </p>
              )}
            </div>
          </div>
        </form>
      ) : (
        <p className="mt-3">
          <em>Ci sarà un solo giocatore anonimo</em>
        </p>
      )}
    </>
  );
};
