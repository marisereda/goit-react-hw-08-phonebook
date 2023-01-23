import { createSlice } from '@reduxjs/toolkit';
import { signOutUser } from './operations';

const initialState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: (_, action) => {
      return action.payload;
    },
  },
  extraReducers: {
    [signOutUser.fulfilled]: (state, action) => {
      return '';
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export default filterSlice.reducer;
