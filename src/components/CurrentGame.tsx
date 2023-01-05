import { Bet } from "./Bet";

export const CurrentGame = (props: {
  secretNumber: number;
  callback: (e: any) => void;
}) => {
  const { secretNumber, callback } = props;

  return <Bet secretNumber={secretNumber} callback={callback} />;
};
