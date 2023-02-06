import { configureStore } from '@reduxjs/toolkit';

import contactsReducer from './contactsSlice';

const store = configureStore({
  reducer: { contacts: contactsReducer },
});

export { store };
