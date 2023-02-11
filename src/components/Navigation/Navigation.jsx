import { useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

import { Nav, Link, } from './Navigation.styled';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Nav>
      {isLoggedIn ? (
        <Link
          to="/contacts"
          // style={({ isActive }) => {
          //   return isActive
          //     ? [Btn, Active].join(' ')
          //     : Btn;
          // }}
        >
          Contacts
        </Link>
      ) : (
        <Link
          to="/"
          // style={({ isActive }) => {
          //   return isActive
          //     ? [Btn, Active].join(' ')
          //     : Btn;
          // }}
        >
          Home
        </Link>
      )}
    </Nav>
  );
}
