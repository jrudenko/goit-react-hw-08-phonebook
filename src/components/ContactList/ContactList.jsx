import ContactItem from 'components/ContactItem';
import React from 'react';
import { useEffect } from 'react';
import { List, } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
// import Loader from 'components/Loader';
import { fetchContacts } from 'redux/thunk';
import {getVisibleContacts} from "redux/contactsSelectors"

function ContactList() {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(getVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
        
        return (
    <>
      {/* {isLoading && <ContactListMesage>Loading contacts...</ContactListMesage>}
      {error && <ContactListMesage>{error}</ContactListMesage>} */}
      {/* {items.length !== 0 && ( */}
        <List>
            {filteredContacts.map(({ id, name, phone }) => (
                <ContactItem
                    key={id}
                    id={id}
                    name={name}
                    number={phone}
                />
                
            ))}
        </List>
      {/* )} */}
    </>
  );
};

export default ContactList;