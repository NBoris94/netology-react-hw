import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
  items: [],
  itemsOnDelete: [],
  loading: 'idle',
  error: null,
  currentRequestId: undefined,
};

export const getAllServicesRequest = createAsyncThunk(
  'services/getAll',
  async (args, {getState, requestId, rejectWithValue}) => {
    const { currentRequestId, loading } = getState().listSlice;

    if (loading !== 'pending' || requestId !== currentRequestId) {
      return;
    }

    try {
      const response = await fetch("http://localhost:7070/api/services", {
        method: "GET"
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return await response.json();
    }
    catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteItemRequest = createAsyncThunk(
  'services/delete',
  async (itemId, { getState, requestId, dispatch, rejectWithValue}) => {
    dispatch(addItemOnDelete({itemId, requestId}));

    try {
      const response = await fetch(`http://localhost:7070/api/services/${itemId}`, {
        method: "DELETE"
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }
    }
    catch (e) {
      return rejectWithValue(itemId, e.message);
    }

    return itemId;
  }
);

const listSlice = createSlice({
  name: 'listSlice',
  initialState,
  reducers: {
    addItemOnDelete(state, action) {
      const item = state.itemsOnDelete.find((i) => i.id === action.payload.itemId);
      if (item === undefined) {
        state.itemsOnDelete.push({
          id: state.items.find((i) => i.id === action.payload.itemId).id,
          loading: 'pending',
          error: null,
          currentRequestId: action.payload.requestId
        });
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllServicesRequest.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending';
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(getAllServicesRequest.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.loading === 'pending' &&
          state.currentRequestId === requestId
        ) {
          state.loading = 'idle';
          state.items = action.payload;
          state.currentRequestId = undefined;
        }
      })
      .addCase(getAllServicesRequest.rejected, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.loading === 'pending' &&
          state.currentRequestId === requestId
        ) {
          state.loading = 'idle';
          state.currentRequestId = undefined;
          if (action.payload) {
            state.error = action.payload;
          }
          else {
            state.error = action.error.message;
          }
        }
      })
      .addCase(deleteItemRequest.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        const index = state.itemsOnDelete.findIndex((i) => i.id === action.payload);
        if (
          state.itemsOnDelete[index].loading === 'pending' &&
          state.itemsOnDelete[index].currentRequestId === requestId
        ) {
          state.itemsOnDelete.slice(index, 1);
          state.items = state.items.filter((i) => i.id !== action.payload);
        }
      })
      .addCase(deleteItemRequest.rejected, (state, action) => {
        const index = state.itemsOnDelete.findIndex((i) => i.id === action.payload);
        state.itemsOnDelete[index].loading = 'idle';
        state.itemsOnDelete[index].error = action.error.message;
      })
  },
});

export const { addItemOnDelete } = listSlice.actions;

export default listSlice.reducer;