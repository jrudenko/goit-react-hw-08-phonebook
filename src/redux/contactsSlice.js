import { createSlice } from '@reduxjs/toolkit';
import { contactsInitstate } from './contactsInitState';
import { STATUS } from './contactsStatus';
import { fetchContacts, addContact, deleteContact } from './thunk';

const handlePending = state => {
  state.status = STATUS.loading;
};

const handleRejected = state => {
  state.status = STATUS.error;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitstate,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.status = STATUS.success;
      state.contacts = payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled]: (state, { payload }) => {
      state.status = STATUS.success;
      state.contacts.push(payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.status = STATUS.success;
      state.contacts = state.contacts.filter(
        contact => contact.id !== payload.id
      );
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const { setQuery } = contactsSlice.actions;

export default contactsSlice.reducer;
