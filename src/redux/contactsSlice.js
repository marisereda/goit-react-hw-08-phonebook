import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = { values: [], isLoading: false, error: null };

const updateStateIfPending = state => {
  state.isLoading = true;
};

const updateStateIfRejected = (state, action) => {
  state.error = action.payload.message;
  state.isLoading = false;
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {},

  extraReducers: {
    [fetchContacts.pending]: state => {
      updateStateIfPending(state);
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.values = action.payload;
      state.isLoading = false;
    },
    [fetchContacts.rejected]: (state, action) => {
      updateStateIfRejected(state, action);
    },

    // --------------------------------
    [addContact.pending]: state => {
      updateStateIfPending(state);
    },
    [addContact.fulfilled]: (state, action) => {
      return (state = {
        ...state,
        isLoading: false,
        values: [
          ...state.values,
          {
            id: action.payload.id,
            name: action.payload.name,
            phone: action.payload.phone,
          },
        ],
      });
    },
    [addContact.rejected]: (state, action) => {
      updateStateIfRejected(state, action);
    },

    // --------------------------------
    [deleteContact.pending]: state => {
      updateStateIfPending(state);
    },
    [deleteContact.fulfilled]: (state, action) => {
      return (state = {
        ...state,
        isLoading: false,
        values: state.values.filter(value => value.id !== action.payload.id),
      });
    },
    [deleteContact.rejected]: (state, action) => {
      updateStateIfRejected(state, action);
    },
  },
});

export const selectContacts = state => state.contacts.values;
export default contactSlice.reducer;
