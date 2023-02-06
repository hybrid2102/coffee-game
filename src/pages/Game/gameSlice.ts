import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { GameSetup } from "../../interfaces/GameSetup";
import { Player } from "../../interfaces/Player";

// Define a type for the slice state
interface GameState {
  status: "new" | "ongoing" | "end";
  setup: GameSetup;
}

// Define the initial state using that type
const initialState: GameState = {
  status: "new",
  setup: {
    secret: 0,
    multiplayerMode: false,
    players: [{ name: "Player 1" }],
  },
};

export const gameSlice = createSlice({
  name: "game",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    startGame: (state, action: PayloadAction<GameSetup>) => {
      state.status = "ongoing";
      state.setup = {
        secret: action.payload.secret,
        multiplayerMode: action.payload.multiplayerMode,
        players: action.payload.players,
      };
    },
  },
});

export const { startGame } = gameSlice.actions;

export const selectStatus = (state: RootState) => state.game.status;
export const selectSecret = (state: RootState) => state.game.setup.secret;
export const selectPlayers = (state: RootState) => state.game.setup.players;

export default gameSlice.reducer;
