import { Player } from "./Player";

export interface GameSetup {
  secret: number;
  players: Player[];
}
