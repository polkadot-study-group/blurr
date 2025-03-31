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
    setActive: (state, action: { payload: WorkspaceTabModel }) => {
      state.active = action.payload;
    },
    addTab: (state, action: { payload: WorkspaceTabModel }) => {
      state.value.push(action.payload);
    },
    removeTab: (state, action: { payload: number }) => {
      // set previous tabs active
      const be_removed_index = action.payload - 1;
      if (be_removed_index > -1) {
        state.active = state.value[be_removed_index];
      }
      state.value.splice(action.payload, 1);
    },
  },
});

export const { setTabs, addTab, setActive, removeTab } =
  workspaceTabSlice.actions;
export default workspaceTabSlice.reducer;
