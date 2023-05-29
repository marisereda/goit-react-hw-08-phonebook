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

const updateStateIfPending = state => {
  state.isLoading = true;
};

const updateStateIfRejected = (state, action) => {
  state.error = action.error?.message;
  console.log('🚧 error:', state.error);

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
      state.addContactIsLoading = true;
    },
    [addContact.fulfilled]: (state, action) => {
      return (state = {
        ...state,
        isLoading: state.isLoading,

        addContactIsLoading: false,
        values: [
          ...state.values,
          {
            _id: action.payload._id,
            name: action.payload.name,
            phone: action.payload.phone,
          },
        ],
      });
    },
    [addContact.rejected]: (state, action) => {
      state.error = action.error?.message;
      state.addContactIsLoading = false;
    },

    // ---------------  update contacts  -----------------
    [updateContact.pending]: (state, action) => {
      updateStateIfPending(state);
      state.whoIsUpdating.push(action.meta.arg.id);
    },
    [updateContact.fulfilled]: (state, action) => {
      return (state = {
        ...state,
        isLoading: false,
        whoIsUpdating: state.whoIsUpdating.filter(
          id => id !== action.meta.arg.id
        ),
        addContactIsLoading: false,
        values: state.values.map(value => {
          if (value._id === action.payload._id) {
            return {
              _id: action.payload._id,
              name: action.payload.name,
              phone: action.payload.phone,
            };
          } else return value;
        }),
      });
    },
    [updateContact.rejected]: (state, action) => {
      updateStateIfRejected(state, action);
      state.whoIsUpdating = state.whoIsUpdating.filter(
        id => id !== action.meta.arg.id
      );
    },

    // ---------------  delete contact  -----------------
    [deleteContact.pending]: (state, action) => {
      console.log('🚧 action:', action);

      updateStateIfPending(state);
      state.whoIsUpdating.push(action.meta.arg);
    },
    [deleteContact.fulfilled]: (state, action) => {
      console.log('🚧 action2:', action);
      return (state = {
        ...state,
        isLoading: false,
        whoIsUpdating: state.whoIsUpdating.filter(id => id !== action.meta.arg),
        addContactIsLoading: false,
        values: state.values.filter(value => value._id !== action.payload._id),
      });
    },
    [deleteContact.rejected]: (state, action) => {
      updateStateIfRejected(state, action);
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
