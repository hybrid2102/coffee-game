import { useState } from "react";
import { Player } from "../../../interfaces/Player";
import { GameRange } from "../../../interfaces/GameRange";
import { Bet } from "./Bet";
import { GameHistory } from "./GameHistory";
import { Hint } from "./Hint";
import { NextRound } from "./NextRound";
import { RevealSecret } from "./RevealSecret";
import { GameBet } from "../../../interfaces/GameBet";
import { useSelector } from "react-redux";
import { selectSettings } from "../../../redux/slices/settingsSlice";

interface CurrentGameProps {
  secret: number;
  players: Player[];
  callback: (loser: Player) => void;
}

export const CurrentGame: React.FC<CurrentGameProps> = (
  props: CurrentGameProps
) => {
  const { secret, callback, players } = props;

  const { defaultRange } = useSelector(selectSettings);

  const [gameBet, setGameBet] = useState<GameBet>({
    number: 0,
    date: new Date(),
    currentPlayer: players[0],
  });
  const [range, setRange] = useState<GameRange>({
    min: defaultRange.min,
    max: defaultRange.max,
  });
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

  const betCallback = (bet: number) => {
    if (Number(bet) >= Number(range.min) && Number(bet) <= Number(range.max)) {
      if (bet == secret) {
        // hai perso!
        const loser = players[currentPlayerIndex];
        callback(loser);
      } else {
        // sei salvo: aggiorno i limiti per il prossimo turno
        if (Number(bet) < Number(secret)) {
          setRange({ ...range, min: bet });
        } else {
          setRange({ ...range, max: bet });
        }

        const next =
          currentPlayerIndex == players.length - 1 ? 0 : currentPlayerIndex + 1;

        let nextPlayer: Player | undefined;
        if (next != currentPlayerIndex) {
          nextPlayer = players[next];
          setCurrentPlayerIndex(next);
        }

        setGameBet({
          number: bet,
          date: new Date(),
          currentPlayer: players[currentPlayerIndex],
          nextPlayer: nextPlayer,
        });
      }
    }
  };

  return (
    <>
      <NextRound gameBet={gameBet} range={range} />
      <Hint range={range} />
      <Bet range={range} callback={betCallback} />
      {gameBet.number != 0 && <GameHistory gameBet={gameBet} />}
      <RevealSecret secret={secret} />
    </>
  );
};
