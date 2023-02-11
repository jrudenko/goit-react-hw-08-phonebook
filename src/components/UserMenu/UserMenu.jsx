import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

import {MenuContainer, MenuBox, MenuTitle, MenuBtn } from './UserMenu.styled';

function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const email = useSelector(authSelectors.getUserEmail);

  return (
    <MenuContainer>
      <MenuBox>
        <MenuTitle>Current user: {name}</MenuTitle>
        <MenuTitle>{email}</MenuTitle>
      </MenuBox>
      <MenuBtn
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log Out
      </MenuBtn>
    </MenuContainer>
  );
}

export default UserMenu;