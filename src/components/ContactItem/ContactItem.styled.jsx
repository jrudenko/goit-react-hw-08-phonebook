import styled from '@emotion/styled'

export const Item = styled.li`
  display: flex;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
  padding: 10px;
  
  font-size: 10px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 15px;
  box-shadow: 17px 17px 84px 18px rgba(21, 15, 15, 0.2) inset;
  background-color: #eb1d1d;;

 &:hover {
    transform: scale(1.1);
  }
   &:focus {
    transform: scale(1.1);
  }
`;

export const Button = styled.button`
  width: 100px;
  height: 100%;
  padding: 5px;
  border-radius: 20px;
  color: #ffffff;
  cursor: pointer;
  font-size: 15px;
  box-shadow: 17px 17px 84px 18px rgba(21, 15, 15, 0.2) inset;
  border: 2px solid rgb(252, 6, 6);
  background-color: #eb1d1d;

  &:hover,
  &:focus {
  background-color: rgb(114, 113, 114);
  }
    
`;