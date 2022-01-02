import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: {
    id: 0,
    name: "",
    price: 0,
    content: ""
  },
  loading: 'idle',
  saveLoading: 'idle',
  error: null
}

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

    itemLoadingStatus(state, action) {
      state.loading = action.payload;
    },

    itemSaveLoadingStatus(state, action) {
      state.saveLoading = action.payload;
    },

    itemReceived(state, action) {
      state.item = action.payload
    },

    itemFailure(state, action) {
      state.error = action.payload;
    },
  }
});

export const { changeFields, clearForm, itemSaveLoadingStatus, itemLoadingStatus,  itemFailure, itemReceived } = itemSlice.actions;

export async function getItemRequest(dispatch, id) {
  dispatch(itemLoadingStatus("pending"));

  try {
    const response = await fetch(`http://localhost:7070/api/services/${id}`, {
      method: "GET"
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();

    dispatch(itemReceived(data));
    dispatch(itemLoadingStatus("idle"));
    dispatch(itemFailure(null));
  }
  catch (e) {
    dispatch(itemFailure(e.message));
  }
}

export async function saveItemRequest(dispatch, navigate, item) {
  dispatch(itemLoadingStatus("pending"));
  dispatch(itemFailure(null));

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

    dispatch(itemLoadingStatus("idle"));
    dispatch(itemFailure(null));
    dispatch(clearForm());
    navigate("/");
  }
  catch (e) {
    dispatch(itemLoadingStatus("idle"));
    dispatch(itemFailure(e.message));
  }
}

export default itemSlice.reducer;