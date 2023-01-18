import { useContext } from "react";
import { Button } from "react-bootstrap";
import { ModeSelector } from "./ModeSelector";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRandom } from "../../../helpers/useRandom";
import { GameContext, GameSettings } from "../../../App";
import { Players } from "./Players";

export interface IFormInputs {
  secretInput: number;
}

export const NewGame = (props: {
  startGameCallback: (secret: number) => void;
}) => {
  const { startGameCallback } = props;
  const { defaultMin, defaultMax } = useContext<GameSettings>(GameContext);
  const randomSecret = useRandom(defaultMin, defaultMax);

  const formCtx = useForm<IFormInputs>({
    defaultValues: { secretInput: randomSecret },
    criteriaMode: "all",
  });

  const onSubmit: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    startGameCallback(data.secretInput);
  };

  return (
    <form onSubmit={formCtx.handleSubmit(onSubmit)}>
      <ModeSelector formContext={formCtx} />
      <Players />
      <Button type="submit" className="mt-3">
        Inizia la partita
      </Button>
    </form>
  );
};
