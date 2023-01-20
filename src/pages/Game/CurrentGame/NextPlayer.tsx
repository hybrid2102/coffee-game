import { Player } from "../../../interfaces/Player";

export const NextPlayer = (props: { nextPlayer?: Player }) => {
  const { nextPlayer } = props;
  return nextPlayer ? (
    <span>
      Ora tocca a <strong>{nextPlayer.name}.</strong>.
    </span>
  ) : (
    <span>Prova ancora.</span>
  );
};
