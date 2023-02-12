
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      toast.error('oops.... something was wrong');
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contacts, thunkAPI) => {
    const { name, number } = contacts;

    try {
      const response = await axios.post('/contacts', {
        name: name,
        number: number,
      });
      toast.info(`${response.name} added to contacts.`);
      return response.data;
    } catch (error) {
      toast.error('oops.... something was wrong');
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      toast.info(`${response.name} removed from contacts.`);
      return response.data;
    } catch (error) {
      toast.error('oops.... something was wrong');
      return thunkAPI.rejectWithValue(error);
    }
  }
);
