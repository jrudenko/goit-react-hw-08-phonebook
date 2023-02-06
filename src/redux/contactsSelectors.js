export const getVisibleContacts = state => {
  return state.contacts.contacts.filter(contact =>
    contact.name.toLowerCase().includes(state.contacts.query)
  );
};

export const getContacts = state => state.contacts.contacts;
