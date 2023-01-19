import { useContext } from "react";
import { Button } from "react-bootstrap";
import { SetSecret } from "./SetSecret";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRandom } from "../../../helpers/useRandom";
import { GameContext, GameSettings } from "../../../App";
import { Players } from "./Players";
import { GameSetup } from "../../../interfaces/GameSetup";

export const NewGame = (props: { callback: (data: GameSetup) => void }) => {
  const { callback: startGameCallback } = props;
  const { defaultMin, defaultMax } = useContext<GameSettings>(GameContext);
  const randomSecret = useRandom(defaultMin, defaultMax);

  const formCtx = useForm<GameSetup>({
    defaultValues: { secret: randomSecret, players: [{ name: "" }] },
    criteriaMode: "all",
  });

  const onSubmit: SubmitHandler<GameSetup> = (data: GameSetup) => {
    startGameCallback(data);
  };

  return (
    <form onSubmit={formCtx.handleSubmit(onSubmit)}>
      <SetSecret formContext={formCtx} />
      <Players formContext={formCtx} />
      <Button type="submit" className="mt-3">
        Inizia la partita
      </Button>
    </form>
  );
};
