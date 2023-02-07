import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useFieldArray, UseFormReturn } from "react-hook-form";
import { useAppSelector } from "../../../app/hooks";
import { useNickName } from "../../../helpers/useNickname";
import { GameSetup } from "../../../interfaces/GameSetup";
import { selectSettings } from "../settingsSlice";

interface PlayersProps {
  formContext: UseFormReturn<GameSetup>;
}

export const Players: React.FC<PlayersProps> = (props: PlayersProps) => {
  const {
    control,
    register,
    watch,
    setValue,
    formState: { errors },
  } = props.formContext;
  const { fields, append, remove } = useFieldArray({
    name: "players",
    control,
  });

  const multiplayerMode = watch("multiplayerMode");

  const { initialNicksCount } = useAppSelector(selectSettings);
  const [nicks, setNicknames] = useState(useNickName(initialNicksCount));

  const addPlayer = () => {
    let nicksForAdd = nicks.slice();
    if (fields.length == nicksForAdd.length) {
      const newNicks = useNickName(initialNicksCount);
      nicksForAdd = nicks.concat(newNicks);
      setNicknames(nicksForAdd);
    }
    const nextNick = nicksForAdd[fields.length];
    append({ name: "", nick: nextNick });
  };

  useEffect(() => {
    for (let i = 0; i < fields.length; i++) {
      setValue(`players.${i}.nick`, nicks[i]);
    }
  }, [setValue, nicks]);

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
                  placeholder={"Nome del giocatore #" + (index + 1)}
                  {...register(`players.${index}.name` as const, {
                    required: { value: true, message: "inserire un nome" },
                  })}
                />
                <input
                  type="text"
                  disabled
                  className="form-control"
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
            <Button className="me-md-2" onClick={addPlayer}>
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
