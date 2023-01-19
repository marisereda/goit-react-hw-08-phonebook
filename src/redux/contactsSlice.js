import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from './operations';

const initialState = { values: [], isLoading: false, error: null };

const updateStateIfPending = state => {
  state.isLoading = true;
};

const updateStateIfRejected = (state, action) => {
  state.error = action.error?.message;
  state.isLoading = false;
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {},

  extraReducers: {
    // ---------------  get contacts  -----------------
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

    // ---------------  add contacts  -----------------
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
            number: action.payload.number,
          },
        ],
      });
    },
    [addContact.rejected]: (state, action) => {
      updateStateIfRejected(state, action);
    },

    // ---------------  update contacts  -----------------
    [updateContact.pending]: state => {
      updateStateIfPending(state);
    },
    [updateContact.fulfilled]: (state, action) => {
      return (state = {
        ...state,
        isLoading: false,
        values: state.values.map(value => {
          if (value.id === action.payload.id) {
            return {
              id: action.payload.id,
              name: action.payload.name,
              number: action.payload.number,
            };
          } else return value;
        }),
      });
    },
    [updateContact.rejected]: (state, action) => {
      updateStateIfRejected(state, action);
    },

    // ---------------  delete contact  -----------------
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
