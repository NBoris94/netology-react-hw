import { configureStore } from "@reduxjs/toolkit";
import listSlice from './slices/listSlice';
import formSlice from './slices/formSlice';
import filterSlice from './slices/filterSlice';

export default configureStore({
  reducer: {
    listSlice,
    formSlice,
    filterSlice
  }
})