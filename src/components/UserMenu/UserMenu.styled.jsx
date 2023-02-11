import styled from '@emotion/styled'

export const MenuContainer  = styled.div`
display: flex;
align-items: center;
`;

export const MenuBox  = styled.div`
display: flex;
flex-direction: column;
margin-right: 20px;
`;

export const MenuTitle  = styled.p`
font-size: 16px;
margin: 0;
`;


export const MenuBtn  = styled.button`
display: flex;
align-items: center;
justify-content: center;
color: white;
background-color: #4caf50;
width: 100px;
height: 32px;
margin-left: 10px;
padding: 5px;
cursor: pointer;
text-decoration: none;
border: none;
border-radius: 4px;
font-size: 16px;
transition: background-color ease-in-out 300ms;
  &:hover,
  &:focus {
    background-color: #188ce8;
  }
`;

