// import { defaultTab } from "@/defaults/default-tab.data";
import { createSlice } from "@reduxjs/toolkit";
import { NodeData } from "react-folder-tree";

export interface DirectoryTreeState {
  data: NodeData | null;
}

const initialState: DirectoryTreeState = {
  data: null,
};

export const DirectoryTreeSlice = createSlice({
  name: "DirectoryTree",
  initialState,
  reducers: {
    setTree: (state, action) => {
      state.data = action.payload;
    },
    addFolder: (state, action) => {
      console.log(state, action);
      //   state.value.push(action.payload);
    },
    removeFolder: (state, action) => {
      console.log(state, action);
      //   state.value.splice(action.payload, 1);
    },
    addFile: (state, action) => {
      console.log(state, action);
      //   state.value.push(action.payload);
    },
    removeFile: (state, action) => {
      console.log(state, action);
      //   state.value.push(action.payload);
    },
  },
});

export const { setTree, addFolder, removeFolder, addFile, removeFile } =
  DirectoryTreeSlice.actions;
export default DirectoryTreeSlice.reducer;
