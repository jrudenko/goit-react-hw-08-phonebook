import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const SIGN_UP_ENDPOINT = '/users/signup';
const SIGN_IN_ENDPOINT = '/users/login';
const SIGN_OUT_ENDPOINT = '/users/logout';
const GET_USER_ENDPOINT = '/users/current';

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};
// register
const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post(SIGN_UP_ENDPOINT, credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (e) {
      toast.warn('Please try again!');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
// login
const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const res = await axios.post(SIGN_IN_ENDPOINT, credentials);
    setAuthHeader(res.data.token);
    return res.data;
  } catch (e) {
    toast.warn('Please try again!');
    return thunkAPI.rejectWithValue(e.message);
  }
});
// logout
const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post(SIGN_OUT_ENDPOINT);
    clearAuthHeader();
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const res = await axios.get(GET_USER_ENDPOINT);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const authOperations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
};

export default authOperations;
