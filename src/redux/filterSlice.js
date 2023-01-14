import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: (_, action) => {
      return action.payload;
    },
  },
});

export const selectFilter = state => state.filter;
export const { changeFilter } = filterSlice.actions;
export default filterSlice.reducer;
