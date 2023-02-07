import { createSlice } from "@reduxjs/toolkit";
import { GameSettings } from "../../interfaces/GameSettings";
import type { RootState } from "../../app/store";

// Define a type for the slice state
interface SettingsState {
  value: GameSettings;
}

// Define the initial state using that type
const initialState: SettingsState = {
  value: {
    initialRange: { min: 1, max: 1000 },
    initialNicksCount: 3,
  },
};

export const settingsSlice = createSlice({
  name: "settings",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
});

export const selectSettings = (state: RootState) => state.settings.value;

export default settingsSlice.reducer;
