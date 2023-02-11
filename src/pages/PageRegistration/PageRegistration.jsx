import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

import {PageRegistrationSection, PageRegistrationTitle, PageRegistrationLabel, PageRegistrationInput, PageRegistrationBtn } from './PageRegistration.styled';

function PageRegistration() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ ...form }));
    setForm({ name: '', email: '', password: '' });
  };

  const { name, email, password } = form;

  return (
    <PageRegistrationSection>
      <PageRegistrationTitle>Please enter your registration details</PageRegistrationTitle>
      <form onSubmit={handleSubmit}>
        <PageRegistrationLabel>
          Name
          <PageRegistrationInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces."
            placeholder="Example John"
            required
            value={name}
            onChange={handleChange}
          />
        </PageRegistrationLabel>
        <PageRegistrationLabel>
          Email
          <PageRegistrationInput
            type="email"
            name="email"
            pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
            title="Enter your email"
            placeholder="Example user@mail.com"
            required
            value={email}
            onChange={handleChange}
          />
        </PageRegistrationLabel>
        <PageRegistrationLabel>
          Password
          <PageRegistrationInput        
            type="password"
            name="password"
            required
            value={password}
            onChange={handleChange}
          />
        </PageRegistrationLabel>
        <PageRegistrationBtn type="submit">
          Register
        </PageRegistrationBtn>
      </form>
    </PageRegistrationSection>
  );
}
export default PageRegistration;
