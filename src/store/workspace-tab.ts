import { defaultTab } from "@/defaults/default-tab.data";
import { WorkspaceTabModel } from "@/models/workspace-tabs.mode";
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
  },
});

export const { setTabs, addTab, setActive } = workspaceTabSlice.actions;
export default workspaceTabSlice.reducer;
