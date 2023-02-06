import styled from '@emotion/styled'

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  width: 360px;
`;

export const ContactItem = styled.li`
    display: flex;
    align-items: center;
`;

export const ContactBtn = styled.button`
  width: 60px;
  height: 30px;
  text-align: center;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
  border-radius: 5px;
  border: none;
  &:hover,
  &:focus {
    background-color: #188ce8;
  }
`;