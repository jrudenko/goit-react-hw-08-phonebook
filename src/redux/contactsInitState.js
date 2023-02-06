import { STATUS } from 'redux/contactsStatus';

export const contactsInitstate = {
  status: STATUS.idle,
  contacts: [],
  query: '',
};
