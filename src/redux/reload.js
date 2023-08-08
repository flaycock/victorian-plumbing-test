import { createSlice } from "@reduxjs/toolkit";

export const reload = createSlice({
  name: "reloadData",
  initialState: {
    value: true   
  },
  reducers: {
    setReload: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { setReload } = reload.actions;
export default reload.reducer;