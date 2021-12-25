import {v4 as uuidv4} from "uuid";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  items: [
    {id: uuidv4(), title: 'Замена батареи', price: 5000},
    {id: uuidv4(), title: 'Замена дисплея', price: 20000},
    {id: uuidv4(), title: 'Замена стекла', price: 2500}
  ],
  loadingState: 'idle'
};

const listSlice = createSlice({
  name: 'listSlice',
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = {...action.payload, id: uuidv4(), price: Number(action.payload.price) }
      state.items.push(newItem);
    },

    editItem(state, action) {
      const updatedItem = {...action.payload, price: Number(action.payload.price) }
      state.items = state.items.map((item) => {
        if (item.id === updatedItem.id) {
          return updatedItem;
        }
        return item;
      })
    },

    deleteItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    // filterList(state, action) {
    //   if(action.payload !== "") {
    //     state.filteredItems = state.items.filter((item) => item.title.toLowerCase() === action.payload.toLowerCase());
    //   }
    //   else {
    //     state.filteredItems = []
    //   }
    // }
  }
})

export const { addItem, editItem, deleteItem } = listSlice.actions;
export default listSlice.reducer;