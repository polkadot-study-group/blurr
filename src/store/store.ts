import { combineReducers, createStore } from "redux";
import tabPageReducer from "./tabpage/tabpage-reducer";
import workspaceTabsReducer from "./workspace-tab";

const rootReducer = combineReducers({
  currentTabPage: tabPageReducer,
  workspaceTabs: workspaceTabsReducer,
});

export const store = createStore(rootReducer);
export type RootState = ReturnType<typeof store.getState>;
