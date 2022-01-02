import { configureStore } from "@reduxjs/toolkit";
import listSlice from './slices/listSlice';
import itemSlice from './slices/itemSlice';
import filterSlice from './slices/filterSlice';

export default configureStore({
  reducer: {
    listSlice,
    itemSlice,
    filterSlice
  }
})