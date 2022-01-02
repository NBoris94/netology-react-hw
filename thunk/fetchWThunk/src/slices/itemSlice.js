import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
  item: {
    id: 0,
    name: "",
    price: 0,
    content: ""
  },
  loading: 'idle',
  error: null,
  currentRequestId: undefined
}

export const getServiceRequest = createAsyncThunk(
  'services/get',
  async (itemId, {getState, requestId, rejectWithValue}) => {
    const { currentRequestId, loading } = getState().itemSlice;

    if (loading !== 'pending' || requestId !== currentRequestId) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:7070/api/services/${itemId}`, {
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

export const updateServiceRequest = createAsyncThunk(
  'services/update',
  async ({item, navigate}, {getState, requestId, rejectWithValue, dispatch}) => {
    const { currentRequestId, loading } = getState().itemSlice;

    if (loading !== 'pending' || requestId !== currentRequestId) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:7070/api/services`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(item)
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      dispatch(clearForm());
      navigate("/");
    }
    catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

const itemSlice = createSlice({
  name: 'itemSlice',
  initialState,
  reducers: {
    changeFields(state, action) {
      state.item = { ...state.item, [action.payload.name]: action.payload.value }
    },

    clearForm(state, action) {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getServiceRequest.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending';
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(getServiceRequest.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.loading === 'pending' &&
          state.currentRequestId === requestId
        ) {
          state.loading = 'idle';
          state.item = action.payload;
          state.currentRequestId = undefined;
        }
      })
      .addCase(getServiceRequest.rejected, (state, action) => {
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
      .addCase(updateServiceRequest.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.error = null;
          state.loading = 'pending';
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(updateServiceRequest.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.loading === 'pending' &&
          state.currentRequestId === requestId
        ) {
          state.loading = 'idle';
          state.error = null;
          state.currentRequestId = undefined;
        }
      })
      .addCase(updateServiceRequest.rejected, (state, action) => {
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
  }
});

export const { changeFields, clearForm } = itemSlice.actions;

export default itemSlice.reducer;