import { createSlice } from "@reduxjs/toolkit";

export const headerStateSlice = createSlice({
  name: "headerLayout",
  initialState: {
    value: "true",
    gnbOpacity: "0",
  },
  reducers: {
    onAndUp: (state, action) => {
      state.value = action.payload;
    },
    connectWith: (state, action) => {
      state.value = action.payload;
    },
    headerGnbOpcity: (state, action) => {
      state.gnbOpacity = action.payload;
    },
  },
});
export const { onAndUp, connectWith, headerGnbOpcity } =
  headerStateSlice.actions;

export default headerStateSlice.reducer;
