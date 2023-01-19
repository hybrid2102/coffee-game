import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useFieldArray, UseFormReturn } from "react-hook-form";
import { GameSetup } from "../../../interfaces/GameSetup";

export const Players = (props: { formContext: UseFormReturn<GameSetup> }) => {
  const {
    control,
    register,
    formState: { errors },
  } = props.formContext;

  const { fields, append, remove } = useFieldArray({
    name: "players",
    control,
  });

  const [multiplayerMode, setMultiplayerMode] = useState(false);

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
        <>
          {fields.map((field, index) => (
            <div key={field.id}>
              <div className="input-group my-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Inserisci un nome..."
                  {...register(`players.${index}.name` as const, {
                    required: { value: true, message: "inserire un nome" },
                  })}
                />
                {index > 0 && (
                  <Button onClick={() => remove(index)}>Elimina</Button>
                )}
              </div>
              {errors?.players?.[index]?.["name"] && (
                <p className="alert alert-danger mt-4">
                  {errors?.players?.[index]?.["name"]?.message}
                </p>
              )}
            </div>
          ))}
          <div className="d-grid justify-content-md-start">
            <Button className="me-md-2" onClick={() => append({ name: "" })}>
              Aggiungi giocatore
            </Button>
          </div>
        </>
      ) : (
        <p className="mt-3">
          <em>Ci sarà un solo giocatore anonimo</em>
        </p>
      )}
    </>
  );
};
