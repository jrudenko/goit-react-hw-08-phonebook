import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

import {PageLoginSection, PageLoginTitle, PageHomeLabel, PageHomeInput, PageHomeBtn} from './PageLogin.styled';

function PageLogin() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.logIn({ ...form }));
    setForm({ email: '', password: '' });
  };

  const { email, password } = form;

  return (
    <PageLoginSection>
      <PageLoginTitle>Please enter your email and password</PageLoginTitle>
      <form onSubmit={handleSubmit}>
        <PageHomeLabel>
          Email
          < PageHomeInput
            type="email"
            name="email"
            pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
            title="Enter your email"
            placeholder="Example user@mail.com"
            required
            value={email}
            onChange={handleChange}
          />
        </PageHomeLabel>
        < PageHomeLabel>
          Password
          <PageHomeInput
            type="password"
            name="password"
            title="Enter your password"
            required
            value={password}
            onChange={handleChange}
          />
            <PageHomeBtn PageHomeBtn type="submit" >Log In</PageHomeBtn>
        </PageHomeLabel>
      </form>
    </PageLoginSection>
  );
};

export default PageLogin;