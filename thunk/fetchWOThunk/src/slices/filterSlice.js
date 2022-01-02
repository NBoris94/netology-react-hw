import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterName: ""
}

const filterSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    change(state, action) {
      state.filterName = action.payload;
    }
  }
});

export const { change } = filterSlice.actions;
export default filterSlice.reducer;