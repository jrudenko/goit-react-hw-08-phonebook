import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

import {MenuContainer, MenuBox, MenuTitle, MenuBtn } from './UserMenu.styled';

function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <MenuContainer>
      <MenuBox>
        <MenuTitle> Welcome, {name}</MenuTitle>
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