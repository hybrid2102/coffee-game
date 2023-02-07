import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { useFieldArray, UseFormReturn } from "react-hook-form";
import { GameSetup } from "../../../interfaces/GameSetup";

interface PlayersProps {
  formContext: UseFormReturn<GameSetup>;
}

export const Players: React.FC<PlayersProps> = (props: PlayersProps) => {
  const {
    control,
    register,
    watch,
    formState: { errors },
  } = props.formContext;

  const { fields, append, remove } = useFieldArray({
    name: "players",
    control,
  });

  const multiplayerMode = watch("multiplayerMode");

  return (
    <>
      <div className="form-check form-switch form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckReverse"
          {...register("multiplayerMode")}
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
                  placeholder={"Nome per il giocatore #" + (index + 1)}
                  {...register(`players.${index}.name` as const, {
                    required: { value: true, message: "inserire un nome" },
                  })}
                />
                <input
                  type="text"
                  disabled
                  className="form-control"
                  placeholder='AKA "Papero giallo"'
                  {...register(`players.${index}.nick` as const)}
                />
                <Button
                  className="btn-danger"
                  disabled={index < 2}
                  onClick={() => remove(index)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
              </div>
              {errors?.players?.[index]?.["name"] && (
                <p className="alert alert-danger mt-4">
                  {errors?.players?.[index]?.["name"]?.message}
                </p>
              )}
            </div>
          ))}
          <div className="d-grid justify-content-md-end">
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
