import { Player } from "./Player";

export interface GameBet {
  number: number;
  date: Date;
  currentPlayer: Player;
  nextPlayer?: Player;
}
