import { createSlice } from '@reduxjs/toolkit';
import { registerUser, signInUser, signOutUser } from './operations';

const initialState = {
  name: '',
  email: '',
  token: '',
  fetchingRegister: false,
  fetchingLogIn: false,
  fetchingLogOut: false,
  successRegister: false,
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
    clearState: state => {
      state = initialState;
    },
  },
  extraReducers: {
    // ---------------- Register User ----------------

    [registerUser.pending]: (state, action) => {
      state.fetchingRegister = true;
      state.successRegister = false;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.fetchingRegister = false;
      state.name = action.payload.user.name;
      state.email = action.payload.user.email;
      state.successRegister = true;
      // state.token = action.payload.token;
      state.errorRegister = '';
    },
    [registerUser.rejected]: (state, action) => {
      state.fetchingRegister = false;
      state.name = '';
      state.email = '';
      state.token = '';
      state.errorRegister = action.error.code;
      state.successRegister = false;

      console.log('🚧 error:', action.error);
    },
    // ---------------  Log in User  -----------------

    [signInUser.pending]: (state, action) => {
      state.fetchingLogIn = true;
    },
    [signInUser.fulfilled]: (state, action) => {
      state.fetchingLogIn = false;
      state.email = action.payload.data.user.email;
      state.token = action.payload.data.token;
      state.errorLogIn = '';
    },
    [signInUser.rejected]: (state, action) => {
      state.fetchingLogIn = false;
      state.name = '';
      state.email = '';
      state.token = '';
      state.errorLogIn = action.error.code;
    },

    // ---------------  Log out User  -----------------

    [signOutUser.pending]: (state, action) => {
      state.fetchingLogOut = true;
      state.email = '';
      state.token = '';
      state.errorLogOut = '';
    },
    [signOutUser.fulfilled]: (state, action) => {
      state.fetchingLogOut = false;
    },
    [signOutUser.rejected]: (state, action) => {
      state.fetchingLogOut = false;
      state.errorLogOut = action.error.code;
    },
  },
});

export default userSlice.reducer;
export const { clearErrors, clearState } = userSlice.actions;
