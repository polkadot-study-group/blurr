import { combineReducers, createStore } from "redux";
import tabPageReducer from "./tabpage/tabpage-reducer";

const rootReducer = combineReducers({
  currentTabPage: tabPageReducer,
});

export const store = createStore(rootReducer);
export type RootState = ReturnType<typeof store.getState>;
