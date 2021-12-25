import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterTitle: ""
}

const filterSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    change(state, action) {
      return {...state, [action.payload.name]: action.payload.value};
    }
  }
});

export const { change } = filterSlice.actions;
export default filterSlice.reducer;