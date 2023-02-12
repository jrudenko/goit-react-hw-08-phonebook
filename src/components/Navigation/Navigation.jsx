import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

import { Link } from './Navigation.styled';

function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <NavLink>
      <Link to="/">Home</Link>{isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </NavLink>
  );
}

export default Navigation;