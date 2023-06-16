import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
  signOutUser,
} from './operations';

const initialState = {
  values: [],
  addContactIsLoading: false,
  isLoading: false,
  whoIsUpdating: [],
  error: null,
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {},

  extraReducers: {
    // ---------------  get contacts  -----------------
    [fetchContacts.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.values = action.payload;
      state.isLoading = false;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.error = action.error?.message;
      state.isLoading = false;
    },

    // ---------------  add contacts  -----------------
    [addContact.pending]: state => {
      state.addContactIsLoading = true;
      state.error = null;
    },
    [addContact.fulfilled]: (state, action) => {
      state.addContactIsLoading = false;
      state.values.push(action.payload);
    },
    [addContact.rejected]: (state, action) => {
      state.error = action.error?.message;
      state.addContactIsLoading = false;
    },

    // ---------------  update contacts  -----------------
    [updateContact.pending]: (state, action) => {
      state.whoIsUpdating.push(action.meta.arg.id);
      state.error = null;
    },
    [updateContact.fulfilled]: (state, action) => {
      state.whoIsUpdating = state.whoIsUpdating.filter(
        id => id !== action.payload._id
      );
      state.values = state.values.map(value =>
        value._id === action.payload._id ? { ...action.payload } : value
      );
    },
    [updateContact.rejected]: (state, action) => {
      state.error = action.error?.message;
      state.whoIsUpdating = state.whoIsUpdating.filter(
        id => id !== action.meta.arg.id
      );
    },

    // ---------------  delete contact  -----------------
    [deleteContact.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
      state.whoIsUpdating.push(action.meta.arg);
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.whoIsUpdating = state.whoIsUpdating.filter(
        id => id !== action.meta.arg
      );
      state.addContactIsLoading = false;
      state.values = state.values.filter(
        value => value._id !== action.payload._id
      );
    },
    [deleteContact.rejected]: (state, action) => {
      state.error = action.error?.message;
      state.isLoading = false;
      state.whoIsUpdating = state.whoIsUpdating.filter(
        id => id !== action.meta.arg
      );
    },

    // ---------------  log out user -----------------
    [signOutUser.fulfilled]: (state, action) => {
      state.values = [];
    },
  },
});

export const selectContacts = state => state.contacts.values;
export default contactSlice.reducer;
