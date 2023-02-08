import { Button } from "react-bootstrap";
import { SetSecret } from "./SetSecret";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRandom } from "../../../helpers/useRandom";
import { Players } from "./Players";
import { GameSetup } from "../../../interfaces/GameSetup";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectSettings } from "../settingsSlice";
import { startGame } from "../gameSlice";
import { testAxios } from "../../../helpers/useNickname";

export const New: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    initialRange: { min, max },
  } = useAppSelector(selectSettings);

  const formCtx = useForm<GameSetup>({
    defaultValues: {
      secret: useRandom(min, max),
      multiplayerMode: false,
      players: [{ name: "Player 1" }, { name: "Player 2" }],
    },
    criteriaMode: "all",
  });

  const onSubmit: SubmitHandler<GameSetup> = (data: GameSetup) => {
    dispatch(startGame(data));
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
      <Button
        className="mt-3 btn-danger"
        onClick={async () => await testAxios()}
      >
        Test Axios
      </Button>
    </>
  );
};
