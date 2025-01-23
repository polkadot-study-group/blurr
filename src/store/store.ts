import { combineReducers, createStore } from "redux";
import tabPageReducer from "./tabpage/tabpage-reducer";
import workspaceTabReducer from "./workspace_tabs/workspace-tab-reducer";

const rootReducer = combineReducers({
  currentTabPage: tabPageReducer,
  workspaceTabs: workspaceTabReducer,
});

export const store = createStore(rootReducer);
export type RootState = ReturnType<typeof store.getState>;
