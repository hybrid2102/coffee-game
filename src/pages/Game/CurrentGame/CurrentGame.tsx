import { useContext, useEffect, useState } from "react";
import { GameContext } from "../../../App";
import { Player } from "../../../interfaces/Player";
import { GameRange } from "../../../interfaces/GameRange";
import { Bet } from "./Bet";
import { GameHistory } from "./GameHistory";
import { Hint } from "./Hint";
import { NextRound } from "./NextRound";
import { RevealSecret } from "./RevealSecret";

export const CurrentGame = (props: {
  secret: number;
  players: Player[];
  callback: () => void;
}) => {
  const { secret, callback, players } = props;

  const { defaultMin, defaultMax } = useContext(GameContext);

  const [range, setRange] = useState<GameRange>({
    min: defaultMin,
    max: defaultMax,
  });
  const [bet, setBet] = useState(0);
  const [wink, setWink] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(0);

  const setBetCallback = (bet: number) => {
    if (bet >= range.min && bet <= range.max) {
      setCurrentPlayer(currentPlayer + 1);
      setBet(bet);
    }
  };

  useEffect(() => {
    if (bet && bet >= range.min && bet <= range.max) {
      if (bet == secret) {
        // hai perso!
        callback();
      } else {
        // sei salvo: aggiorno i limiti per il prossimo turno
        if (bet < secret) {
          setRange({ ...range, min: bet });
        } else {
          setRange({ ...range, max: bet });
        }
      }
    }
  }, [bet, secret]);

  useEffect(() => {
    if (range.max - range.min === 2) {
      setWink(true);
    }
  }, [range]);

  return (
    <>
      <NextRound
        bet={bet}
        wink={wink}
        players={players}
        currentPlayer={currentPlayer}
      />
      <Hint range={range} />
      <Bet range={range} callback={setBetCallback} />
      <GameHistory bet={bet} />
      <RevealSecret secret={secret} />
    </>
  );
};
