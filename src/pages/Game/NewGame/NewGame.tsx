import { useContext } from "react";
import { Button } from "react-bootstrap";
import { SetSecret } from "./SetSecret";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRandom } from "../../../rename2/useRandom";
import { GameContext, GameSettings } from "../../../App";
import { Players } from "./Players";
import { GameSetup } from "../../../interfaces/GameSetup";

export const NewGame = (props: { callback: (data: GameSetup) => void }) => {
  const { callback: startGameCallback } = props;
  const { defaultMin, defaultMax } = useContext<GameSettings>(GameContext);
  const randomSecret = useRandom(defaultMin, defaultMax);

  const formCtx = useForm<GameSetup>({
    defaultValues: {
      secret: randomSecret,
      players: [{ name: "" }, { name: "" }],
    },
    criteriaMode: "all",
  });

  const onSubmit: SubmitHandler<GameSetup> = (data: GameSetup) => {
    startGameCallback(data);
  };

  return (
    <>
      <h1 className="display-6 fw-bold mb-4">Nuova partita</h1>
      <form onSubmit={formCtx.handleSubmit(onSubmit)}>
        <SetSecret formContext={formCtx} />
        <Players formContext={formCtx} />
        <div className="d-grid mt-5">
          <Button type="submit">Inizia la partita</Button>
        </div>
      </form>
    </>
  );
};
