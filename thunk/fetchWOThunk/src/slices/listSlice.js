import {v4 as uuidv4} from "uuid";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loadingState: 'idle',
  error: null,
  itemsOnDelete: []
};

const listSlice = createSlice({
  name: 'listSlice',
  initialState,
  reducers: {

    listLoading(state, action) {
      if (state.loadingState === 'idle') {
        state.loadingState = 'pending';
      }
    },

    listReceived(state, action) {
      if (state.loadingState === 'pending') {
        state.loadingState = 'idle';
        state.items = action.payload;
      }
    },

    listFailure(state, action) {
      state.loadingState = 'idle';
      state.error = action.payload;
    },

    deleteItemLoading(state, action) {
      const item = state.itemsOnDelete.find((i) => i.id === action.payload);
      if (item === undefined) {
        state.itemsOnDelete.push({
          id: state.items.find((i) => i.id === action.payload).id,
          loading: 'pending',
          error: null
        });
      }
    },

    deleteItemSuccess(state, action) {
      const item = state.itemsOnDelete.find((i) => i.id === action.payload);
      if (item.loading === 'pending') {
        state.itemsOnDelete = state.itemsOnDelete.filter((i) => i.id !== item.id);
        state.items = state.items.filter((i) => i.id !== item.id);
      }
    },

    deleteItemFailure(state, action) {
      const index = state.itemsOnDelete.findIndex((i) => i.id === action.payload.id);
      state.itemsOnDelete[index].loading = 'idle';
      state.itemsOnDelete[index].error = action.payload.message;
    },
  }
});

export async function fetchList(dispatch) {
  dispatch(listLoading());

  try {
    const response = await fetch("http://localhost:7070/api/services", {
      method: "GET"
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    dispatch(listReceived(data));
  }
  catch (e) {
    dispatch(listFailure(e.message));
  }
}

export async function deleteItemRequest(dispatch, id) {
  dispatch(deleteItemLoading(id));

  console.log(id);

  try {
    const response = await fetch(`http://localhost:7070/api/services/${id}`, {
      method: "DELETE"
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    dispatch(deleteItemSuccess(id));
  }
  catch (e) {
    const message = e.message;
    dispatch(deleteItemFailure({ message, id }));
  }
}

export const { listLoading, listReceived, listFailure, deleteItemLoading, deleteItemSuccess, deleteItemFailure } = listSlice.actions;

export default listSlice.reducer;