import { combineReducers, createStore } from "redux";
import tabPageReducer from "./tabpage/tabpage-reducer";
import workspaceTabsReducer from "./workspace-tab";
import globalReducer from "./global";
import directoryTreeReducer from "./directory-tree";

const rootReducer = combineReducers({
  currentTabPage: tabPageReducer,
  workspaceTabs: workspaceTabsReducer,
  globalSettings: globalReducer,
  directoryTree: directoryTreeReducer,
});

export const store = createStore(rootReducer);
export type RootState = ReturnType<typeof store.getState>;
