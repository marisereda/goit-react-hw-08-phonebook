import { createSlice } from '@reduxjs/toolkit';
import { registerUser, signInUser, signOutUser } from './operations';

const initialState = {
  name: '',
  email: '',
  token: '',
  fetching: false,
  errorRegister: '',
  errorLogIn: '',
  errorLogOut: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearErrors: state => {
      state.errorRegister = '';
      state.errorLogIn = '';
      state.errorLogOut = '';
    },
  },
  extraReducers: {
    // ---------------- Register User ----------------

    [registerUser.pending]: (state, action) => {
      state.fetching = true;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.fetching = false;
      state.name = action.payload.user.name;
      state.email = action.payload.user.email;
      state.token = action.payload.token;
      state.errorRegister = '';
    },
    [registerUser.rejected]: (state, action) => {
      console.log('action', action);
      state.fetching = false;
      state.name = '';
      state.email = '';
      state.token = '';
      state.errorRegister = action.error.code;
    },
    // ---------------  Log in User  -----------------

    [signInUser.pending]: (state, action) => {
      state.fetching = true;
    },
    [signInUser.fulfilled]: (state, action) => {
      state.fetching = false;
      // state.name = action.payload.user.name;
      state.email = action.payload.user.email;
      state.token = action.payload.token;
      state.errorLogIn = '';
    },
    [signInUser.rejected]: (state, action) => {
      console.log('action login rejected', action);

      state.fetching = false;
      state.name = '';
      state.email = '';
      state.token = '';
      state.errorLogIn = action.error.code;
    },

    // ---------------  Log out User  -----------------

    [signOutUser.pending]: (state, action) => {
      state.fetching = true;
    },
    [signOutUser.fulfilled]: (state, action) => {
      state.fetching = false;
      // state.name = action.payload.user.name;
      state.email = '';
      state.token = '';
      state.errorLogOut = '';
    },
    [signOutUser.rejected]: (state, action) => {
      console.log('action logout rejected', action);

      state.fetching = false;

      state.errorLogOut = action.error.code;
    },
  },
});

export default userSlice.reducer;
export const { clearErrors } = userSlice.actions;
