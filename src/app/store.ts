import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "../pages/Game/settingsSlice";
import gameReducer from "../pages/Game/gameSlice";
import playersReducer from "../pages/Game/New/playersSlice";

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    game: gameReducer,
    players: playersReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
