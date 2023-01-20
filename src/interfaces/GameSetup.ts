import { Player } from "./Player";

export interface GameSetup {
  secret: number;
  multiplayerMode: boolean;
  players: Player[];
}
