import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  title: "",
  price: 0
}

const formSlice = createSlice({
  name: 'formSlice',
  initialState,
  reducers: {
    change(state, action) {
      return {...state, [action.payload.name]: action.payload.value};
    },
    clearForm(state, action) {
      if (state.id === action.payload) {
        return initialState;
      }
    },
    fillForm(state, action) {
      return action.payload;
    }
  }
});

export const { change, clearForm, fillForm } = formSlice.actions;
export default formSlice.reducer;