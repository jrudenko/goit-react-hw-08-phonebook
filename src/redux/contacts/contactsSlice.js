import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

export const contactsSlise = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const ReducerFilter = contactsSlise.reducer;

export const { filter } = contactsSlise.actions;
