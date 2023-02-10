import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./slices/settingsSlice";
import gameReducer from "./slices/gameSlice";
import playersReducer from "./slices/playersSlice";

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
