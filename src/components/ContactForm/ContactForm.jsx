import { useState } from 'react';
import { Form, Label, Input, Button } from './ContactForm.styled';
import toast, { Toaster } from 'react-hot-toast';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from "redux/contacts/contactOperations";
import { nanoid } from 'nanoid'

import { getContacts } from "redux/contacts/contactsSelectors";



function ContactForm  () { 
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);

  const handleSubmit = e => {
   e.preventDefault();

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    const normalizeName = newContact.name.toLowerCase();
    const isNameInContact = contacts.find(newContact => newContact.name.toLowerCase() === normalizeName);
    isNameInContact ? toast.success(`${newContact.name} is already in contacts`) : dispatch(addContact(newContact));
    reset();
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    
    switch (name) {
      case 'name': setName(value);
        break;
      case 'number': setNumber(value);
        break;
      default: return;
    }
  };

   const reset = () => {
    setName('');
    setNumber('');
  };

    return (
      <Form onSubmit={handleSubmit} autoComplete='off'>
        <Label>
          Name
          <Input
            type="text"
            id="name_input"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Enter your name..."
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>

        <Label>
          Number
          <Input
            type="tel"
            id="name_input"
            name="number"
            value={number}
            onChange={handleChange}
            placeholder="Enter your number..."
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required            
          />
        </Label>

        <Button type="submit" >Add contact</Button>
        <Toaster />
      </Form>
    );

};

export default ContactForm;