import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "car",
  initialState: {},
  reducers: {
    updateForm(state, action) {
        return {...state, ...action.payload }
    },
  },
});

export const { updateForm } = formSlice.actions;

export default formSlice.reducer;
