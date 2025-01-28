import { createSlice } from "@reduxjs/toolkit";

export interface GlobalState {
  showTerminal: boolean;
}

const initialState: GlobalState = {
  showTerminal: false,
};

export const globalSlice = createSlice({
  name: "show_terminal",
  initialState,
  reducers: {
    toggleTerminal: (state) => {
      state.showTerminal = !state.showTerminal;
    },
  },
});

export const { toggleTerminal } = globalSlice.actions;
export default globalSlice.reducer;
