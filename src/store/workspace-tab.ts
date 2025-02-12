import { defaultTab } from "@/defaults/default-tab.data";
import { WorkspaceTabModel } from "@/models/workspace-tabs.model";
import { createSlice } from "@reduxjs/toolkit";

export interface WorkspaceTabState {
  value: WorkspaceTabModel[];
  active: WorkspaceTabModel;
}

const initialState: WorkspaceTabState = {
  value: defaultTab,
  active: defaultTab[0],
};

export const workspaceTabSlice = createSlice({
  name: "workspaceTab",
  initialState,
  reducers: {
    setTabs: (state, action) => {
      state.value = action.payload;
    },
    setActive: (state, action) => {
      state.active = action.payload;
    },
    addTab: (state, action) => {
      state.value.push(action.payload);
    },
    removeTab: (state, action) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export const { setTabs, addTab, setActive, removeTab } =
  workspaceTabSlice.actions;
export default workspaceTabSlice.reducer;
