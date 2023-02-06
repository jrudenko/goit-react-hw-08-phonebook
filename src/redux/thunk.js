import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://63e0e4c959bb472a742b3b11.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts', async () => {
  const { data } = await axios.get('/contacts');
  return data;
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }) => {
    const { data } = await axios.post('/contacts', { name, phone });
    return data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data;
  }
);

//Рабочий код

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/contacts');
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async (contacts, thunkAPI) => {
//     const { name, phone } = contacts;

//     try {
//       const response = await axios.post('/contacts', {
//         name: name,
//         phone: phone,
//       });
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (contactId, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/contacts/${contactId}`);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
