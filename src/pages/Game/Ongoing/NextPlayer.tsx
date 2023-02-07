import { Player } from "../../../interfaces/Player";

interface NextPlayerProps {
  nextPlayer?: Player;
}

export const NextPlayer: React.FC<NextPlayerProps> = (
  props: NextPlayerProps
) => {
  const { nextPlayer } = props;
  return nextPlayer ? (
    <span>
      Ora tocca a <strong>{nextPlayer.name}</strong>.
    </span>
  ) : (
    <span>Prova ancora.</span>
  );
};
